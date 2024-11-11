const app = require("../../index");
const request = require("supertest");

describe("test cases for cart", () => {
  test("get all categories", async () => {
    const response = await request(app).get("/api/v1/category");

    expect(response.status).toBe(200);
  });
});