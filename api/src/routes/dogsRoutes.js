const { Router } = require("express");
const router = Router();
const { Dog, Temperament } = require("./db.js");

router.get("", async (req, res) => {
  try {
    const response = await Dog.findAll();
    res.json(response);
  } catch (err) {}
});
