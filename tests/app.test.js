const request = require("supertest");
const app = require("../server");

describe("API Tests", () => {
  describe("GET /", () => {
    it("should return welcome message with endpoints", async () => {
      const res = await request(app).get("/");
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty("message");
      expect(res.body).toHaveProperty("endpoints");
      expect(res.body.endpoints).toHaveProperty("tasks");
    });
  });

  describe("GET /health", () => {
    it("should return health status", async () => {
      const res = await request(app).get("/health");
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty("status", "healthy");
      expect(res.body).toHaveProperty("timestamp");
    });
  });

  describe("404 Handler", () => {
    it("should return 404 for unknown routes", async () => {
      const res = await request(app).get("/unknown-route");
      expect(res.statusCode).toBe(404);
      expect(res.body).toHaveProperty("success", false);
      expect(res.body).toHaveProperty("error", "Route not found");
    });
  });
});