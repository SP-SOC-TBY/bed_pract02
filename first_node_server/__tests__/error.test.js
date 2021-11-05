// we will use supertest to test HTTP requests/responses
const request = require("supertest");
// we also need our app for the correct routes!
const app = require("../server");

describe("GET /err ", () => {
    test("It should respond with error html", async () => {
      const response = await request(app).get("/err");
      //console.log(response)
      //expect(response.body).toEqual(["Elie", "Matt", "Joel", "Michael"]);
      expect(response.text).toMatch(/html/);
      expect(response.text.toLowerCase()).toMatch(/file does not exist/);
      //expect(response.header['content-type']).toContain('html');
      expect(response.statusCode).toBe(200);;
    });
  });