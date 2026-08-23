import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Hero } from "../Hero";

describe("Hero Component", () => {
  it("renders engineer name, title credentials and hire me button", () => {
    render(<Hero />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      /Oluwaseun Adeolu Okunola/i
    );
    expect(screen.getByText(/Software Engineer/i)).toBeInTheDocument();
    expect(screen.getByText(/SaaS Product Builder/i)).toBeInTheDocument();
    expect(screen.getByText(/DevSecOps Specialist/i)).toBeInTheDocument();
    expect(screen.getByText(/Google Cloud DevSecOps Certified/i)).toBeInTheDocument();

    const hireLink = screen.getByRole("link", { name: /Hire Me/i });
    expect(hireLink).toHaveAttribute("href", "#contact");

    const resumeLink = screen.getByRole("link", { name: /Resume/i });
    expect(resumeLink).toHaveAttribute("download");
  });
});
