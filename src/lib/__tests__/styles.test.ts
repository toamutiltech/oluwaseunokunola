import { describe, it, expect } from "vitest";
import {
  GLASS_CARD,
  INPUT_BASE,
  INPUT_ERROR,
  BUTTON_PRIMARY,
  OVERLAY_BACKDROP,
  MODAL_CONTAINER,
} from "../styles";

describe("Style Tokens Utility", () => {
  it("exports valid non-empty Tailwind class strings", () => {
    expect(GLASS_CARD).toContain("glass");
    expect(INPUT_BASE).toContain("bg-white/5");
    expect(INPUT_ERROR).toContain("border-red-500");
    expect(BUTTON_PRIMARY).toContain("bg-white");
    expect(OVERLAY_BACKDROP).toContain("backdrop-blur-md");
    expect(MODAL_CONTAINER).toContain("bg-slate-900");
  });
});
