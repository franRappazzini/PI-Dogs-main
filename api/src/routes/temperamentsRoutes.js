const { Router } = require("express");
const router = Router();
const { Temperament } = require("../db");
const { default: axios } = require("axios");

router.get("", async (req, res) => {
  try {
    // primero busco los perros
    const api = await axios.get("https://api.thedogapi.com/v1/breeds");
    const data = await api.data;

    // me quedo solo con los temperamentos en un array
    const temperaments = data
      .map((dog) => dog.temperament)
      .join()
      .split(",");

    // filtro para que no haya repetidos y despues creo en la db
    await temperaments
      .filter((temp, i) => temperaments.indexOf(temp) === i)
      .forEach(
        (temp) =>
          temp.trim() !== "" &&
          Temperament.findOrCreate({ where: { name: temp.trim() } })
      );

    // ahora filtro los de la db
    const response = await Temperament.findAll({ order: [["name"]] });
    res.json(response);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

module.exports = router;
