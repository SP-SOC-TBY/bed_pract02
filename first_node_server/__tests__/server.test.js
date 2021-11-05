// we will use supertest to test HTTP requests/responses
const request = require("supertest");
// we also need our app for the correct routes!
const app = require("../server");

describe("GET / ", () => {
    test("It should respond with welcome html", async () => {
      const response = await request(app).get("/");
      //console.log(response)
      //expect(response.body).toEqual(["Elie", "Matt", "Joel", "Michael"]);
      expect(response.text.toLowerCase()).toContain("welcome to node js");
      expect(response.header['content-type']).toContain('html');
      expect(response.statusCode).toBe(200);;
    });
  });