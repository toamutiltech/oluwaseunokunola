import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ExperienceSection } from "../Experience";

describe("ExperienceSection Component", () => {
  it("renders professional experience timeline heading and career roles", () => {
    render(<ExperienceSection />);
    expect(screen.getByText("Professional Journey")).toBeInTheDocument();
    expect(screen.getByText("Senior Software Engineer")).toBeInTheDocument();
  });
});
