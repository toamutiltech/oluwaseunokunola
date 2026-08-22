import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import Home from "../page";
import { PROJECTS } from "@/data/projects";
import { EXPERIENCE } from "@/data/experience";

describe("Homepage", () => {
  it("renders the hero section with name and title", () => {
    render(<Home />);
    const nameElements = screen.getAllByText(/Oluwaseun Adeolu/i);
    expect(nameElements.length).toBeGreaterThan(0);
    expect(nameElements[0]).toBeInTheDocument();

    const roleElements = screen.getAllByText(/Software Engineer/i);
    expect(roleElements.length).toBeGreaterThan(0);
    expect(roleElements[0]).toBeInTheDocument();

    expect(screen.getByText(/SaaS Product Builder/i)).toBeInTheDocument();
  });

  it("renders the projects section with projects list", () => {
    render(<Home />);
    expect(screen.getByText("Selected Projects")).toBeInTheDocument();
    PROJECTS.slice(0, 3).forEach((project) => {
      const projectElements = screen.getAllByText(project.title);
      expect(projectElements.length).toBeGreaterThan(0);
      expect(projectElements[0]).toBeInTheDocument();
    });
  });

  it("renders core technical expertise skills section", () => {
    render(<Home />);
    expect(screen.getByText("Core Technical Expertise")).toBeInTheDocument();
    const tsElements = screen.getAllByText("TypeScript");
    expect(tsElements.length).toBeGreaterThan(0);
    expect(tsElements[0]).toBeInTheDocument();
    expect(screen.getByText("React.js")).toBeInTheDocument();
  });

  it("renders professional journey experience timeline", () => {
    render(<Home />);
    expect(screen.getByText("Professional Journey")).toBeInTheDocument();
    const expElements = screen.getAllByText(EXPERIENCE[0].company);
    expect(expElements.length).toBeGreaterThan(0);
    expect(expElements[0]).toBeInTheDocument();
  });

  it("renders contact form and submits via WhatsApp", async () => {
    const user = userEvent.setup();
    const openSpy = vi.spyOn(window, "open").mockImplementation(() => null);

    render(<Home />);

    const nameInput = screen.getByPlaceholderText("Name");
    const emailInput = screen.getByPlaceholderText("Email");
    const messageInput = screen.getByPlaceholderText("Project Details");
    const submitButton = screen.getByRole("button", { name: /Send via WhatsApp/i });

    await user.type(nameInput, "Test User");
    await user.type(emailInput, "test@example.com");
    await user.type(messageInput, "Need a new web app");

    await user.click(submitButton);

    expect(openSpy).toHaveBeenCalledWith(
      expect.stringContaining("https://wa.me/2348139669156"),
      "_blank"
    );
  });
});
