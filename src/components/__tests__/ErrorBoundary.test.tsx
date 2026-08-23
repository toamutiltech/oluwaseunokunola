import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import React, { useState } from "react";
import { ErrorBoundary } from "../ErrorBoundary";

const ProblemChild = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {
    throw new Error("Simulated component render error");
  }
  return <div>Normal Content</div>;
};

const ResettableApp = () => {
  const [hasError, setHasError] = useState(true);
  return (
    <ErrorBoundary>
      <ProblemChild shouldThrow={hasError} />
      <button onClick={() => setHasError(false)}>Fix Error</button>
    </ErrorBoundary>
  );
};

describe("ErrorBoundary Component", () => {
  const originalError = console.error;

  beforeEach(() => {
    // Suppress React error boundary console log clutter in test output
    console.error = vi.fn();
  });

  afterEach(() => {
    console.error = originalError;
  });

  it("renders children when no error occurs", () => {
    render(
      <ErrorBoundary>
        <div>All Systems Nominal</div>
      </ErrorBoundary>
    );

    expect(screen.getByText("All Systems Nominal")).toBeInTheDocument();
  });

  it("captures component error and displays fallback alert UI", () => {
    render(
      <ErrorBoundary>
        <ProblemChild shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
    expect(
      screen.getByText("Simulated component render error")
    ).toBeInTheDocument();
  });

  it("renders custom fallback node when provided", () => {
    render(
      <ErrorBoundary fallback={<div>Custom Failover UI</div>}>
        <ProblemChild shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByText("Custom Failover UI")).toBeInTheDocument();
  });

  it("allows resetting error state via Try Again button", () => {
    render(<ResettableApp />);

    expect(screen.getByText("Something went wrong")).toBeInTheDocument();

    const tryAgainButton = screen.getByRole("button", { name: /Try Again/i });
    fireEvent.click(tryAgainButton);
  });
});
