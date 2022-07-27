const { Router } = require("express");
const router = Router();
const { Dog, Temperament, Op } = require("../db");

router.get("", async (req, res) => {
  const { name } = req.query;

  try {
    const options = {
      include: { model: Temperament },
      where: {},
      order: ["name"],
    };
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
  const { name, height, weight, life_span, temperaments } = req.body;

  try {
    const dog = await Dog.create({ name, height, weight, life_span });
    // si selecciona temperamentos, los agrego a la tabla intermedia
    if (temperaments.length) {
      const tempsId = await Temperament.findAll({
        attributes: ["id"],
        where: {
          name: {
            [Op.or]: temperaments,
          },
        },
      });

      await dog.addTemperaments(tempsId);
    }
    res.status(201).json({ success: "Creado con exito!" });
  } catch (err) {
    res.status(400).json({ error: "Error al crear el perro" });
  }
});

module.exports = router;
