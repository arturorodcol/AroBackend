"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const validate_fields_1 = require("../middlewares/validate-fields");
const auth_controller_1 = require("../controller/auth.controller");
const router = (0, express_1.Router)();
router.post("/", [
    (0, express_validator_1.check)("login", "El login para el usuario es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("password", "La contraseña es obligatoria").not().isEmpty(),
    validate_fields_1.validateFields,
], auth_controller_1.login);
exports.default = router;
//# sourceMappingURL=auth.controller.js.map