const { Dog, conn } = require("../../src/db.js");
const { expect } = require("chai");

// describe("Dog model", () => {
//   before(() =>
//     conn.authenticate().catch((err) => {
//       console.error("Unable to connect to the database:", err);
//     })
//   );
//   describe("Validators", () => {
//     // beforeEach(() => Dog.sync({ force: true }));
//     describe("name", () => {
//       it("should throw an error if name is null", (done) => {
//         Dog.create({})
//           .then(() => done(new Error("It requires a valid name")))
//           .catch(() => done());
//       });
//       it("should work when its a valid name", () => {
//         Dog.create({ name: "Pug" });
//       });
//     });
//   });
// });

// mis test

describe("TEST DB", () => {
  before(async () => {
    await conn.sync({ force: true });
  });

  const dog = {
    name: "Probando",
    height: "20 - 30",
    weight: "12 - 23",
    life_span: "10 - 15",
  };

  it("Crear dog correctamente", async () => {
    const newDog = await Dog.create(dog);
    expect(newDog.dataValues.name).to.eq(dog.name);
    expect(newDog.dataValues.height).to.eq(dog.height);
    expect(newDog.dataValues.weight).to.eq(dog.weight);
    expect(newDog.dataValues.life_span).to.eq(dog.life_span);
    const dogs = await Dog.findAll();
    expect(dogs.length).to.eq(1);
  });

  // TODO ver esto

  // const dogWithoutName = { ...dog };
  // const dogWithoutWeight = { ...dog };
  // delete dogWithoutName.name;
  // delete dogWithoutWeight.weight;

  // it("Retornar error si falta un valor 'not null'", async () => {
  //   const newDog = await Dog.create(dogWithoutName);
  //   expect().to.eq();
  // });
});
