"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contacto_controller_1 = require("../controller/contacto.controller");
const router = (0, express_1.Router)();
router.post("/", contacto_controller_1.contactoUsuario);
exports.default = router;
//# sourceMappingURL=contacto.route.js.map