import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Home from "../page";

describe("Homepage", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the hero section with name and title", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      /Oluwaseun Adeolu Okunola/i
    );
    expect(screen.getByText(/Full-Stack Web Developer/i)).toBeInTheDocument();
  });

  it("renders the projects section with projects list", () => {
    render(<Home />);
    expect(screen.getByText("Selected Projects")).toBeInTheDocument();
  });

  it("renders core technical expertise skills section", () => {
    render(<Home />);
    expect(screen.getByText("Core Technical Expertise")).toBeInTheDocument();
  });

  it("renders professional journey experience timeline", () => {
    render(<Home />);
    expect(screen.getByText("Professional Journey")).toBeInTheDocument();
  });

  it("renders contact form and submits via WhatsApp", async () => {
    const user = userEvent.setup();
    const openSpy = vi.spyOn(window, "open").mockImplementation(() => null);

    render(<Home />);

    const nameInput = screen.getByPlaceholderText("Name");
    const emailInput = screen.getByPlaceholderText("Email");
    const detailsInput = screen.getByPlaceholderText("Project Details");
    const submitButton = screen.getByRole("button", { name: /Send via WhatsApp/i });

    await user.type(nameInput, "Test User");
    await user.type(emailInput, "test@example.com");
    await user.type(detailsInput, "Need a new web app");
    await user.click(submitButton);

    expect(openSpy).toHaveBeenCalledWith(
      expect.stringContaining("https://wa.me/2348093924896"),
      "_blank"
    );
  });
});
