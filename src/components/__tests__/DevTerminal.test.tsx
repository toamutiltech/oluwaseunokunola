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
    const input = screen.getByRole("textbox");

    await user.type(input, "help{enter}");
    expect(screen.getByText(/Available CLI Commands/i)).toBeInTheDocument();
  });

  it("executes whoami, skills, projects, and clear commands", async () => {
    const user = userEvent.setup();
    render(<DevTerminal />);

    await user.click(screen.getByRole("button", { name: /Dev Terminal/i }));
    const input = screen.getByRole("textbox");

    await user.type(input, "whoami{enter}");
    expect(screen.getByText(/Oluwaseun Adeolu Okunola/i)).toBeInTheDocument();

    await user.type(input, "skills{enter}");
    expect(screen.getByText(/Core Technical Skills/i)).toBeInTheDocument();

    await user.type(input, "projects{enter}");
    expect(screen.getByText(/Featured Production Projects/i)).toBeInTheDocument();

    await user.type(input, "clear{enter}");
    expect(screen.queryByText(/Core Technical Skills/i)).not.toBeInTheDocument();
  });
});
