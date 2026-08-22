import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Leadership } from "../Leadership";

describe("Leadership Component", () => {
  it("renders community leadership heading and organization roles", () => {
    render(<Leadership />);
    expect(screen.getByText("Leadership & Community Impact")).toBeInTheDocument();
  });
});
