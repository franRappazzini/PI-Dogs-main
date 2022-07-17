const { DataTypes } = require("sequelize");
const { randomUUID } = require("crypto");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Dog",
    {
      idDog: {
        type: DataTypes.UUID,
        defaultValue: randomUUID(),
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      height: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      weight: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      life_span: {
        type: DataTypes.INTEGER,
      },
    },
    { timestamps: true }
  );
};
