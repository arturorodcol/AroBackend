"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const taller_controller_1 = require("../controller/taller.controller");
const router = (0, express_1.Router)();
router.post("/", taller_controller_1.crearTaller);
router.get("/", taller_controller_1.consultarTaller);
router.put("/:id", taller_controller_1.actualizarTaller);
router.delete("/:id", taller_controller_1.eliminarTaller);
exports.default = router;
//# sourceMappingURL=taller.route.js.map