const { Router } = require("express");
const router = Router();
const { Temperament } = require("../db");

router.get("", async (req, res) => {
  try {
    // return temperaments;

    // const response = await getTemperaments();
    // const response= Temperament.findOrCreate()
    res.json(temperaments);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

module.exports = router;
