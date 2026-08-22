import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { About } from "../About";

describe("About Component", () => {
  it("renders about section bio, credentials, and technical focus areas", () => {
    render(<About />);
    expect(screen.getByText("Engineering Philosophy")).toBeInTheDocument();
    expect(screen.getByText("Building Scalable & Secure Systems")).toBeInTheDocument();
    expect(screen.getByText(/Full-Stack Architect/i)).toBeInTheDocument();
    expect(screen.getByText(/DevSecOps & Cloud/i)).toBeInTheDocument();
  });
});
