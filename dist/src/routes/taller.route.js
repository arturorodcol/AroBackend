"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const taller_controller_1 = require("../controller/taller.controller");
const express_validator_1 = require("express-validator");
const router = (0, express_1.Router)();
router.post("/", 
// validateJWT, 
[
    (0, express_validator_1.check)("nombre", "El nombre es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("descripcion", "La descripción es obligatoria").not().isEmpty(),
    (0, express_validator_1.check)("precio", "El precio es obligatorio").not().isEmpty()
], taller_controller_1.crearTaller);
router.get("/", 
// validateJWT, 
taller_controller_1.consultarTaller);
router.put("/:id", 
// validateJWT, 
taller_controller_1.actualizarTaller);
router.delete("/:id", 
// validateJWT, 
taller_controller_1.eliminarTaller);
exports.default = router;
//# sourceMappingURL=taller.route.js.map