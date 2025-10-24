const request = require("supertest");
const app = require("../server");

describe("GET /", () => {
  it("should return greeting message", async () => {
    const response = await request("http://localhost:3000").get("/");
    expect(response.status).toBe(200);
  });
});
