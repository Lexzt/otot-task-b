const supertest = require("supertest");
const http = require("http");
const app = require("./app.js");

describe("Get Endpoints", () => {
  let server;
  let request;

  beforeAll((done) => {
    server = http.createServer(app);
    server.listen(done);
    request = supertest(server);
  });

  afterAll((done) => {
    server.close(done);
  });

  it("Should do something", async () => {
    const res = await request.get("/get");
    expect(res.status).toEqual(200);
  });
});
