const supertest = require("supertest");
const server = require("../../src/app");

describe("/dogs", () => {
  const dog = {
    name: "Chihuahua",
    weight: "1 - 3",
    height: "10 - 25",
    life_span: "12 - 15 years",
  };

  const dogWithoutName = { ...dog };
  delete dogWithoutName.name;

  it("POST status 201", async () => {
    const res = await supertest(server).post("/dogs").send(dog);
    return expect(res.status).toBe(201);
  });

  it("POST required value missing error", async () => {
    const res = await supertest(server).post("/dogs").send(dogWithoutName);
    return expect(res.status).toBe(400);
  });

  it("GET status 200", async () => {
    const res = await supertest(server).get("/dogs");
    return expect(res.status).toBe(200);
  });
});
