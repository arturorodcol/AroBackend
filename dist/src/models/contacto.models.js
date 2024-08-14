"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ContactoSchema = new mongoose_1.Schema({
    nombre: { type: String, required: true },
    telefono: { type: String, required: true },
    correo: { type: String, required: true },
    descripcion: { type: String, required: true },
    detalles: { type: String, required: true },
    createdAt: { type: Date, default: Date.now() }
});
const ContactoModel = (0, mongoose_1.model)("Contacto", ContactoSchema);
exports.default = ContactoModel;
//# sourceMappingURL=contacto.models.js.map