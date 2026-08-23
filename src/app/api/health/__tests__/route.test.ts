import { describe, expect, it } from "vitest";
import { GET } from "../route";

describe("Health API Route (/api/health)", () => {
  it("returns operational telemetry status with memory and uptime stats", async () => {
    const response = await GET();
    expect(response.status).toBe(200);

    const body = await response.json();
    expect(body.success).toBe(true);
    expect(body.message).toBe("System operational and healthy");
    expect(body.data.status).toBe("operational");
    expect(body.data.service).toBe("oluwaseun-portfolio");
    expect(typeof body.data.uptime.seconds).toBe("number");
    expect(typeof body.data.memory.heapUsedBytes).toBe("number");
    expect(body.data.checks.database).toBe("connected");
  });
});
