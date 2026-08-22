import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { Contact } from "../Contact";

describe("Contact Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders contact form inputs and submit button", () => {
    render(<Contact />);
    expect(screen.getByPlaceholderText("Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Project Details")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Send via WhatsApp/i })).toBeInTheDocument();
  });

  it("blocks submission and shows inline validation error for invalid email", async () => {
    const user = userEvent.setup();
    const openSpy = vi.spyOn(window, "open").mockImplementation(() => null);

    render(<Contact />);

    await user.type(screen.getByPlaceholderText("Name"), "Alex");
    await user.type(screen.getByPlaceholderText("Email"), "invalid-email");
    await user.type(screen.getByPlaceholderText("Project Details"), "This is a valid message detail.");

    await user.click(screen.getByRole("button", { name: /Send via WhatsApp/i }));

    expect(await screen.findByText("Please enter a valid email address.")).toBeInTheDocument();
    expect(openSpy).not.toHaveBeenCalled();
  });

  it("blocks submission and shows inline error when name is too short", async () => {
    const user = userEvent.setup();
    const openSpy = vi.spyOn(window, "open").mockImplementation(() => null);

    render(<Contact />);

    await user.type(screen.getByPlaceholderText("Name"), "A");
    await user.type(screen.getByPlaceholderText("Email"), "alex@example.com");
    await user.type(screen.getByPlaceholderText("Project Details"), "Valid message content.");

    await user.click(screen.getByRole("button", { name: /Send via WhatsApp/i }));

    expect(await screen.findByText("Name must be at least 2 characters long.")).toBeInTheDocument();
    expect(openSpy).not.toHaveBeenCalled();
  });

  it("successfully validates and triggers WhatsApp URL redirect for valid input", async () => {
    const user = userEvent.setup();
    const openSpy = vi.spyOn(window, "open").mockImplementation(() => null);

    render(<Contact />);

    await user.type(screen.getByPlaceholderText("Name"), "Oluwaseun");
    await user.type(screen.getByPlaceholderText("Email"), "oluwaseun@example.com");
    await user.type(screen.getByPlaceholderText("Project Details"), "Looking for software architecture consulting.");

    await user.click(screen.getByRole("button", { name: /Send via WhatsApp/i }));

    expect(openSpy).toHaveBeenCalledWith(
      expect.stringContaining("https://wa.me/2348139669156"),
      "_blank"
    );
  });
});
