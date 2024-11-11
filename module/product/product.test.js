const app = require("../../index");
const request = require("supertest");

describe("test cases for cart", () => {
    
  test("get all products", async () => {
    const response = await request(app).get("/api/v1/product");

    expect(response.status).toBe(200);
  });

  test("get products with category", async () => {
    const response = await request(app).get("/api/v1/product").query({
      category_name: "tshirt",
    });

    expect(response.status).toBe(200);
  });

  test("get products with product name", async () => {
    const response = await request(app).get("/api/v1/product").query({
      name: "nike tshirt",
    });

    expect(response.status).toBe(200);
  });
});
