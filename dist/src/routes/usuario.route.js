"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_controller_1 = require("../controller/usuario.controller");
const express_validator_1 = require("express-validator");
const validate_fields_1 = require("../middlewares/validate-fields");
const validate_jwt_1 = __importDefault(require("../middlewares/validate-jwt"));
const router = (0, express_1.Router)();
router.post("/", [
    (0, express_validator_1.check)("nombre", "El nombre es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("tipoDocumento", "El tipo de documento es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("numeroDocumento", "El numero de documento es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("email", "El correo es obligatorio").not().isEmpty().isEmail(),
    (0, express_validator_1.check)("login", "El login para el usuario es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("password", "La contraseña es obligatoria").not().isEmpty(),
    validate_fields_1.validateFields,
], usuario_controller_1.crearUsuario);
//validacion
router.get("/", usuario_controller_1.getUsuarios);
router.get("/:id", validate_jwt_1.default, usuario_controller_1.getUnUsuario);
router.delete("/:id", validate_jwt_1.default, usuario_controller_1.eliminarUsuarios);
exports.default = router;
//# sourceMappingURL=usuario.route.js.map