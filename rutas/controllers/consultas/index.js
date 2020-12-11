const router = require("express").Router();
const Consulta = require('./schema');
const { listar, obtenerUno, crear, editar, eliminar } = require("../genericos");


const listarHandler = listar({
  Modelo: Consulta,
  populate: ["mascota", "veterinaria"],
});
router.get("/", listarHandler);

const obtenerUnoHandler = obtenerUno({ Modelo: Consulta });
router.get("/:_id", obtenerUnoHandler);

const crearHandler = crear({ Modelo: Consulta });
router.post("/", crearHandler);

const editarHandler = editar({ Modelo: Consulta });
router.put("/:_id", editarHandler);

const eliminarHandler = eliminar({ Modelo: Consulta });
router.delete("/:_id", eliminarHandler);

module.exports = router;