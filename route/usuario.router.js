const express = require("express");
const usuarioController = require("../controller/usuario.controller");
const usuarioRepository = require("../repository/usuario.repository");

const routes = new express.Router()


routes.get("/buscartudo", usuarioController.buscaTodos);
routes.get("/:id_usuario([0-9]+)", usuarioController.buscaPorId);
routes.post("/inserirEnd", usuarioController.InserirEnd);
routes.post("/inserir", usuarioController.Inserir);
// routes.delete("/:id([0-9]+)", funcionariosController.deletar);
// routes.put("/:id([0-9]+)", funcionariosController.atualizar);




module.exports = routes;