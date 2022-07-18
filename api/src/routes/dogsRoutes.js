const { Router } = require("express");
const router = Router();
const { Dog } = require("../db");

router.get("", async (req, res) => {
  const { name } = req.query;

  try {
    const options = { where: {} };
    if (name) options.where = name;

    const response = await Dog.findAll(options);
    res.json(response);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

router.get("/:idRaza", async (req, res) => {
  const { idRaza } = req.params;

  try {
    const response = await Dog.findByPk(idRaza);
    res.json(response);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

router.post("", async (req, res) => {
  // TODO destructuring de datos que mando por el form
  const { name, height, weight, life_span } = req.body;

  try {
    await Dog.create({ name, height, weight, life_span });
    res.status(201).json({ success: "Creado con exito!" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
