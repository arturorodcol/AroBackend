"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_controller_1 = require("../controller/usuario.controller");
const router = (0, express_1.Router)();
router.post("/", usuario_controller_1.crearUsuario);
router.get("/", usuario_controller_1.getUsuarios);
router.get("/:id", usuario_controller_1.getUnUsuario);
router.delete("/:id", usuario_controller_1.eliminarUsuarios);
exports.default = router;
//# sourceMappingURL=usuario.route.js.map