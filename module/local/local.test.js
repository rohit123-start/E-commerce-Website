const app = require("../../index");
const request = require('supertest')


describe("testing get request",()=>{

    test("kjdljnlajnl",async () => {
        const response = await request(app).get('/')

        expect(response.status).toBe(200);
        expect(response.body.msg).toBe("Hello World");
      })
    
  
})
