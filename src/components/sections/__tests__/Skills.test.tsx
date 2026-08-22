import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Skills } from "../Skills";

describe("Skills Component", () => {
  it("renders skills section heading and tech badges", () => {
    render(<Skills />);
    expect(screen.getByText("Core Technical Expertise")).toBeInTheDocument();
    expect(screen.getByText("Programming")).toBeInTheDocument();
    expect(screen.getByText("Frontend")).toBeInTheDocument();
    expect(screen.getByText("Backend")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("React.js")).toBeInTheDocument();
    expect(screen.getByText("AWS")).toBeInTheDocument();
  });
});
