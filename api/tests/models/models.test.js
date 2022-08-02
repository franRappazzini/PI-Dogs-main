const { Dog } = require("../../src/db");

describe("MODELS", () => {
  it("Dog", () => {
    console.log(Dog);
    expect(Dog).toBe({});
  });
});
