const { default: axios } = require("axios");
/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Dog, conn } = require("../../src/db.js");

const agent = session(app);
const dog = {
  name: "Nueva raza",
  height: "23 - 31",
  weight: "15 - 29",
  life_span: "9 - 14",
};

// describe("Videogame routes", () => {
//   before(() =>
//     conn.authenticate().catch((err) => {
//       console.error("Unable to connect to the database:", err);
//     })
//   );
//   beforeEach(() => Dog.sync({ force: true }).then(() => Dog.create(dog)));
//   describe("GET /dogs", () => {
//     it("should get 200", () => agent.get("/dogs").expect(200));
//   });
// });

describe("TEST ROUTES", () => {
  beforeEach(async () => {
    conn
      .sync({ force: true })
      .then(() =>
        server.listen(3001, () => console.log("server listening on port 3001"))
      );
  });

  it("POST /dogs", async () => {
    const res = await axios.post("http://localhost:3001/dogs", dog);
    expect(res.status).to.eq(201);
    // expect(res.data).to.haveOwnProperty("success");
  });

  it("GET /dogs", async () => {
    const res = await axios.get("http://localhost:3001/dogs");
    expect(res.status).to.eq(200);
    expect(res.data).to.be.an("array");
  });
});
