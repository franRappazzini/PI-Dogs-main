const { Router } = require("express");
const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogsRouter = require("./dogsRoutes");
const temperamentsRouter = require("./temperamentsRoutes");

router.use("/dogs", dogsRouter);
router.use("/temperaments", temperamentsRouter);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
