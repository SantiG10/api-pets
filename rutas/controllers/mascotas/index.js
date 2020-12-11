const router = require("express").Router();
const Mascota = require('./schema');
const { listar, obtenerUno, crear, editar, eliminar } = require("../genericos");
const { query } = require("express");


const listarHandler = listar({
  Modelo: Mascota,
  populate: ["dueno"]
});
router.get("/", listarHandler);

const obtenerUnoHandler = obtenerUno({ Modelo: Mascota });
router.get("/:_id", obtenerUnoHandler);

const crearHandler = crear({ Modelo: Mascota });
router.post("/", crearHandler);

const editarHandler = editar({ Modelo: Mascota });
router.put("/:_id", editarHandler);

const eliminarHandler = eliminar({ Modelo: Mascota });
router.delete("/:_id", eliminarHandler);

module.exports = router;