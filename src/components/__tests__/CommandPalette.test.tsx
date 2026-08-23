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

  it("opens modal overlay on Ctrl+K and Cmd+K keyboard shortcut", () => {
    const { unmount } = render(<CommandPalette />);

    fireEvent.keyDown(window, { key: "k", ctrlKey: true });
    expect(screen.getByPlaceholderText("Type a command or search sections...")).toBeInTheDocument();
    unmount();

    render(<CommandPalette />);
    fireEvent.keyDown(window, { key: "k", metaKey: true });
    expect(screen.getByPlaceholderText("Type a command or search sections...")).toBeInTheDocument();
  });

  it("filters search results and narrows visible items list when typing query", async () => {
    const user = userEvent.setup();
    render(<CommandPalette />);

    fireEvent.keyDown(window, { key: "k", ctrlKey: true });
    const input = screen.getByPlaceholderText("Type a command or search sections...");

    await user.type(input, "Resume");
    expect(screen.getByText("Download Resume (PDF)")).toBeInTheDocument();
    expect(screen.queryByText("Jump to Core Skills")).not.toBeInTheDocument();

    await user.clear(input);
    await user.type(input, "NonExistentCommandQuery");
    expect(
      screen.getByText('No commands found matching "NonExistentCommandQuery"')
    ).toBeInTheDocument();
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
