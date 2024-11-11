const app = require("../../index");
const request = require("supertest");

describe("test cases for cart", () => {
  test("get cart list", async () => {
    const response = await request(app).get("/api/v1/cart/1");

    expect(response.status).toBe(200);
  });

  test("add to cart", async () => {
    const response = await request(app).post("/api/v1/cart").send({
      productId: "1",
      quantity: 1,
      userId: "1",
    });

    expect(response.status).toBe(200);
  });
});
