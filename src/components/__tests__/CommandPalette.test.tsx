import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
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

    expect(screen.getByPlaceholderText(/Type a command or search/i)).toBeInTheDocument();
    expect(screen.getByText("Jump to About Section")).toBeInTheDocument();
    expect(screen.getByText("Download Resume (PDF)")).toBeInTheDocument();
  });

  it("opens modal overlay on Cmd+K keyboard shortcut", () => {
    render(<CommandPalette />);

    fireEvent.keyDown(window, { key: "k", metaKey: true });

    expect(screen.getByPlaceholderText(/Type a command or search/i)).toBeInTheDocument();
  });
});
