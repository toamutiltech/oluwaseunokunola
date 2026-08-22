import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Experience } from "../Experience";

describe("Experience Component", () => {
  it("renders professional experience timeline heading and career roles", () => {
    render(<Experience />);
    expect(screen.getByText("Professional Journey")).toBeInTheDocument();
    expect(screen.getByText("Senior Software Engineer")).toBeInTheDocument();
  });
});
