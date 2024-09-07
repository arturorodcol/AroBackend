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
exports.actualizarTaller = exports.eliminarTaller = exports.consultarTaller = exports.crearTaller = void 0;
const taller_models_1 = __importDefault(require("../models/taller.models"));
const usuario_models_1 = __importDefault(require("../models/usuario.models"));
const crearTaller = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const id = req._id;
    try {
        //Esta linea describe función, para asociar a usuario logeado a la creación de una servicio 
        const usuario = yield usuario_models_1.default.findById(id);
        if (!usuario) {
            return res.status(404).json({
                ok: false,
                msg: "Usuario no encontrado",
            });
        }
        const tallerNuevo = new taller_models_1.default(Object.assign({ usuario: id }, body));
        const tallerCreado = yield tallerNuevo.save();
        res.status(200).json({
            ok: true,
            msg: "Taller registrado satisfactoriamente",
            tallerCreado,
        });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            ok: false,
            msg: "Error al crear taller",
        });
    }
});
exports.crearTaller = crearTaller;
const consultarTaller = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // devolver listado de talleres con información que se selecciona 
        const talleres = yield taller_models_1.default.find().populate({
            path: 'nombre',
            select: 'nombre, fecha, hora'
        });
        res.json({
            ok: true,
            talleres,
        });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            ok: false,
            msg: "Error al consultar talleres",
            error,
        });
    }
});
exports.consultarTaller = consultarTaller;
const eliminarTaller = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const tallerEliminado = yield taller_models_1.default.findByIdAndDelete(id);
        res.json({
            ok: true,
            msg: "Taller eliminado",
            tallerEliminado,
        });
    }
    catch (error) {
        res.status(400).json({
            ok: false,
            msg: "Error al eliminar el taller",
        });
    }
});
exports.eliminarTaller = eliminarTaller;
const actualizarTaller = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { body } = req;
        const tallerActualizo = yield taller_models_1.default.findByIdAndUpdate(id, body, { new: true });
        res.status(200).json({
            ok: true,
            msg: "taller actualizado",
            inmueble: tallerActualizo,
        });
    }
    catch (error) {
        res.status(400).json({
            ok: false,
            mgs: `Error al actualizar taller`,
        });
    }
});
exports.actualizarTaller = actualizarTaller;
//# sourceMappingURL=taller.controller.js.map