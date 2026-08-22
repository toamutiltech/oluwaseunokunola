import "@testing-library/jest-dom";
import React from "react";
import { vi } from "vitest";

// Mock next/image
vi.mock("next/image", () => ({
  default: (props: Record<string, any>) => {
    return React.createElement("img", { ...props, alt: props.alt || "" });
  },
}));

// Mock IntersectionObserver
class MockIntersectionObserver {
  observe = vi.fn();
  disconnect = vi.fn();
  unobserve = vi.fn();
}

Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver,
});

// Mock window.open
Object.defineProperty(window, "open", {
  writable: true,
  configurable: true,
  value: vi.fn(),
});
