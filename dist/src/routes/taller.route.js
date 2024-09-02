"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const taller_controller_1 = require("../controller/taller.controller");
const validate_jwt_1 = __importDefault(require("../middlewares/validate-jwt"));
const router = (0, express_1.Router)();
router.post("/", validate_jwt_1.default, taller_controller_1.crearTaller);
router.get("/", validate_jwt_1.default, taller_controller_1.consultarTaller);
router.put("/:id", validate_jwt_1.default, taller_controller_1.actualizarTaller);
router.delete("/:id", validate_jwt_1.default, taller_controller_1.eliminarTaller);
exports.default = router;
//# sourceMappingURL=taller.route.js.map