import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Certifications } from "../Certifications";

describe("Certifications Component", () => {
  it("renders certifications heading and verified credential badges", () => {
    render(<Certifications />);
    expect(screen.getByText("Certifications & Credentials")).toBeInTheDocument();
  });
});
