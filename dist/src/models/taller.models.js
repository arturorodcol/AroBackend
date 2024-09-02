"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
//Puedo mejorar este componente al crear interfaces //revisar video 27
const TallerSchema = new mongoose_1.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    precio: { type: Number, required: true },
    comentarios: { type: String, required: true },
    fecha: { type: String, required: true },
    hora: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});
const TallerModel = (0, mongoose_1.model)("Taller", TallerSchema);
exports.default = TallerModel;
//# sourceMappingURL=taller.models.js.map