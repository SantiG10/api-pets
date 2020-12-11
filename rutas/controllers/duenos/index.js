const router = require("express").Router();
const Dueno = require('./schema');
const { listar, obtenerUno, crear, editar, eliminar } = require("../genericos");


const listarHandler = listar({ Modelo: Dueno });
router.get("/", listarHandler);

const obtenerUnoHandler = obtenerUno({ Modelo: Dueno });
router.get("/:_id", obtenerUnoHandler);

const crearHandler = crear({ Modelo: Dueno });
router.post("/", crearHandler);

const editarHandler = editar({ Modelo: Dueno });
router.put("/:_id", editarHandler);

const eliminarHandler = eliminar({ Modelo: Dueno });
router.delete("/:_id", eliminarHandler);

module.exports = router;