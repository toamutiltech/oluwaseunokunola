import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ProjectsSection } from "../Projects";
import { PROJECTS } from "@/data/projects";

describe("ProjectsSection Component", () => {
  it("renders projects heading and portfolio project cards", () => {
    render(<ProjectsSection />);
    expect(screen.getByText("Selected Projects")).toBeInTheDocument();
    PROJECTS.slice(0, 3).forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
      expect(screen.getByText(project.description)).toBeInTheDocument();
    });
  });
});
