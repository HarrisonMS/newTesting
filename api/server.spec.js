const supertest = require("supertest");

const server = require("./server.js");
const db = require("../data/dbConfig.js");

afterEach(async () => {
  await db("hobbits").truncate();
});

describe("server", () => {
  it("can run the tests", () => {
    expect(true).toBeTruthy();
  });

  describe("GET /", () => {
    it("should return http status code 200 OK", () => {
      return (
        supertest(server)
          .get("/")
          // .expect(200) // from supertest
          .then((response) => {
            // from jest
            expect(Array.isArray(response.body)).toBe(false);
          })
      );
    });

    it("should return { api: 'up' }", () => {
      return supertest(server)
        .get("/")
        .then((response) => {
          expect(response.body).toEqual({ api: "up" });
          expect(response.body.api).toBeDefined();
          expect(response.body.api).toBe("up");
        });
    });
  });

  describe("GET /hobbits", () => {
    it("should return an array", () => {
      return supertest(server)
        .get("/hobb")
        .then((response) => {
          expect(Array.isArray(response.body)).toBe(false);
        });
    });
  });
});
