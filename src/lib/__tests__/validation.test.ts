import { describe, it, expect } from "vitest";
import { contactFormSchema } from "../validation";

describe("Contact Form Validation Schema", () => {
  it("rejects invalid input (short name, invalid email, short message)", () => {
    const invalidForm = {
      name: "A",
      email: "not-an-email",
      message: "Short",
    };

    const result = contactFormSchema.safeParse(invalidForm);
    expect(result.success).toBe(false);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      expect(fieldErrors.name?.[0]).toContain("at least 2 characters");
      expect(fieldErrors.email?.[0]).toContain("valid email address");
      expect(fieldErrors.message?.[0]).toContain("at least 10 characters");
    }
  });

  it("accepts valid contact form payloads", () => {
    const validForm = {
      name: "Oluwaseun Okunola",
      email: "oluwaseunokunola@gmail.com",
      message: "I am interested in consulting services for cloud architecture.",
    };

    const result = contactFormSchema.safeParse(validForm);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.name).toBe("Oluwaseun Okunola");
    }
  });
});
