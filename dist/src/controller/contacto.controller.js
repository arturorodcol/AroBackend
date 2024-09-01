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
exports.eliminarContactoUsuarios = exports.revisarContactoUsuarios = exports.contactoUsuario = void 0;
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
const revisarContactoUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contactos = yield contacto_models_1.default.find();
        res.status(200).json({
            ok: true,
            contactos,
        });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            ok: true,
            msg: "Error al consultar usuarios por contactar",
        });
    }
});
exports.revisarContactoUsuarios = revisarContactoUsuarios;
const eliminarContactoUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id; //busqueda espeficica //
        const eliminarContactoUsuario = yield contacto_models_1.default.findByIdAndDelete(id); // actualizar recibe tres parametros id, info que envio y revolución de lo que actualize //
        res.status(200).json({
            ok: true,
            eliminarContactoUsuario,
        });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            ok: true,
            msg: "Error al eliminar usuario",
        });
    }
});
exports.eliminarContactoUsuarios = eliminarContactoUsuarios;
//# sourceMappingURL=contacto.controller.js.map