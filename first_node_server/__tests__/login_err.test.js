// we will use supertest to test HTTP requests/responses
const request = require("supertest");
// we also need our app for the correct routes!
const app = require("../server");

describe("POST /login ", () => {
    test("It should respond with json", async () => {
      const response = await request(app).post("/")
      .send({"username": "admin@abc.co", "password": "1234567"});
      console.log(response.body.message)
      //expect(response.body).toEqual(["Elie", "Matt", "Joel", "Michael"]);
      expect(response.text.toLowerCase()).toContain("welcome to node js");
      expect(response.header['content-type']).toContain('html');
      expect(response.statusCode).toBe(200);;
    });
  });

describe("POST /login ", () => {
    test("It should respond with json", async () => {
      const response = await request(app).post("/")
      .send({"username": "admin@abc.com", "password": "234567"});
      console.log(response.body.message)
      //expect(response.body).toEqual(["Elie", "Matt", "Joel", "Michael"]);
      expect(response.text.toLowerCase()).toContain("welcome to node js");
      expect(response.header['content-type']).toContain('html');
      expect(response.statusCode).toBe(200);;
    });
  });