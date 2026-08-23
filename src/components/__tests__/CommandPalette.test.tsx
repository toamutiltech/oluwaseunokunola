import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { CommandPalette } from "../CommandPalette";

describe("CommandPalette Component", () => {
  it("renders floating launcher button initially", () => {
    render(<CommandPalette />);
    expect(screen.getByRole("button", { name: /Command Palette/i })).toBeInTheDocument();
  });

  it("opens modal overlay when launcher button is clicked", async () => {
    const user = userEvent.setup();
    render(<CommandPalette />);

    await user.click(screen.getByRole("button", { name: /Command Palette/i }));
    expect(screen.getByPlaceholderText("Type a command or search sections...")).toBeInTheDocument();
  });

  it("opens modal overlay on Cmd+K keyboard shortcut", () => {
    render(<CommandPalette />);
    fireEvent.keyDown(window, { key: "k", metaKey: true });
    expect(screen.getByPlaceholderText("Type a command or search sections...")).toBeInTheDocument();
  });

  it("filters search results when typing in search input", async () => {
    const user = userEvent.setup();
    render(<CommandPalette />);

    fireEvent.keyDown(window, { key: "k", metaKey: true });
    const input = screen.getByPlaceholderText("Type a command or search sections...");

    await user.type(input, "Projects");
    expect(screen.getByText("Jump to Selected Projects")).toBeInTheDocument();
  });

  it("closes modal overlay on Escape key press", () => {
    render(<CommandPalette />);
    fireEvent.keyDown(window, { key: "k", metaKey: true });
    expect(screen.getByPlaceholderText("Type a command or search sections...")).toBeInTheDocument();

    fireEvent.keyDown(window, { key: "Escape" });
    expect(
      screen.queryByPlaceholderText("Type a command or search sections...")
    ).not.toBeInTheDocument();
  });
});
