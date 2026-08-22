import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { About } from "../About";

describe("About Component", () => {
  it("renders about section bio, credentials, and technical focus areas", () => {
    render(<About />);
    expect(screen.getByText("Professional Summary")).toBeInTheDocument();
    expect(screen.getByText("5+ Years")).toBeInTheDocument();
  });
});
