import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { DevTerminal } from "../DevTerminal";

describe("DevTerminal Component", () => {
  it("renders terminal trigger button initially", () => {
    render(<DevTerminal />);
    expect(screen.getByRole("button", { name: /Dev Terminal/i })).toBeInTheDocument();
  });

  it("opens terminal widget and responds to help command", async () => {
    const user = userEvent.setup();
    render(<DevTerminal />);

    await user.click(screen.getByRole("button", { name: /Dev Terminal/i }));

    expect(screen.getByPlaceholderText(/Type command/i)).toBeInTheDocument();

    const input = screen.getByPlaceholderText(/Type command/i);
    await user.type(input, "help{enter}");

    expect(screen.getByText(/Available Commands:/i)).toBeInTheDocument();
  });
});
