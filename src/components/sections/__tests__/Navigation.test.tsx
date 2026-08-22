import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { Navigation } from "../Navigation";

describe("Navigation Component", () => {
  it("renders desktop navigation links", () => {
    render(
      <Navigation
        activeSection="hero"
        isMenuOpen={false}
        setIsMenuOpen={vi.fn()}
      />
    );

    const navItems = ["About", "Skills", "Exp", "Leadership", "Projects", "Contact"];
    navItems.forEach((item) => {
      expect(screen.getByRole("link", { name: item })).toBeInTheDocument();
    });
  });

  it("toggles mobile menu when menu button is clicked", async () => {
    const user = userEvent.setup();
    const setIsMenuOpenMock = vi.fn();

    render(
      <Navigation
        activeSection="hero"
        isMenuOpen={false}
        setIsMenuOpen={setIsMenuOpenMock}
      />
    );

    const toggleButton = screen.getByRole("button", { name: /Toggle Menu/i });
    await user.click(toggleButton);

    expect(setIsMenuOpenMock).toHaveBeenCalledWith(true);
  });

  it("renders mobile menu items when isMenuOpen is true", () => {
    render(
      <Navigation
        activeSection="about"
        isMenuOpen={true}
        setIsMenuOpen={vi.fn()}
      />
    );

    const links = screen.getAllByRole("link", { name: "About" });
    expect(links.length).toBeGreaterThan(1);
  });
});
