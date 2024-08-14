"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactoUsuario = void 0;
const contacto_models_1 = __importDefault(require("../models/contacto.models"));
const contactoUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, telefono, correo, descripcion, detalles } = req.body;
    try {
        const nuevaPeticionContacto = new contacto_models_1.default({
            nombre,
            telefono,
            correo,
            descripcion,
            detalles,
            createdAt: new Date()
        });
        const peticionContactoGuardada = yield nuevaPeticionContacto.save();
        res.status(201).json({
            ok: true,
            msg: 'Peticion de contacto enviada correctamente',
            formulario: peticionContactoGuardada
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al enviar el correo'
        });
    }
});
exports.contactoUsuario = contactoUsuario;
//# sourceMappingURL=contacto.controller.js.map