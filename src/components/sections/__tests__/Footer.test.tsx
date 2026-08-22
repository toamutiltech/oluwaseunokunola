import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Footer } from "../Footer";

describe("Footer Component", () => {
  it("renders footer copyright and quick navigation links", () => {
    render(<Footer />);
    expect(screen.getByText(/Oluwaseun Adeolu Okunola/i)).toBeInTheDocument();
    expect(screen.getByText(/Full-Stack Web Developer/i)).toBeInTheDocument();
  });
});
