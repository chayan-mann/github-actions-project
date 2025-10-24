const request = require("supertest");
const app = require("../server");

describe("GET /", () => {
  it("should return greeting message", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: "Hello, World!" });
  });
});