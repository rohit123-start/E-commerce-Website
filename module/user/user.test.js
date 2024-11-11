const app = require("../../index");
const request = require("supertest");

describe("test cases for users", () => {
    
  test("register user", async () => {
    const response = await request(app).get("/api/v1/register").send({
        name: "Rohit" + Math.random(),
        password: Math.random()
    });

    expect(response.status).toBe(200);
    expect(response.body.token).not.toBeUndefined();

  });

  test("login user", async () => {
    const response = await request(app).post("/api/v1/login").send({
        name: "Rohit",
        password: "12345"
    });

    expect(response.status).toBe(200);
  });
});
