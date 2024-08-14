import { Request, Response } from "express";
import UsuarioModel from "../models/usuario.models";
import TallerModel from "../models/taller.models";

export const crearTaller = async (req: Request, res: Response) => {
    const { body } = req;
    const idUsuario = body.usuario;

    try {
        /*  //Esta linea describe función, para asociar a usuario logeado a la creación de una servicio 
        const usuario = await UsuarioModel.findById(idUsuario);
        if(!usuario) {
            return res.status(404).json({
                ok: false,
                msg: "Usuario no encontrado",
            }); 
        }
        */

        const tallerNuevo = new TallerModel({
            usuario: idUsuario,
            ...body
        });
        
        const tallerCreado = await tallerNuevo.save();

        res.status(200).json({
            ok: true,
            msg: "Taller registrado satisfactoriamente",
            tallerCreado,
        });
       
    }   catch (error) {
        console.log(error);
        res.status(400).json({
            ok: false,
            msg: "Error al crear taller", 
        });
    }
}

export const consultarTaller = async (req: Request, res: Response) => {
    try {
        const talleres = await TallerModel.find().populate({
            path: 'nombre',
            select: 'nombre fecha hora' 
        });

        res.json({
            ok: true,
            talleres,
        });

    } catch (error) {
        console.log(error);
        res.status(400).json({
            ok: false,
            msg: "Error al consultar talleres",
            error,
        });
    }
};

export const eliminarTaller = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
        
      const tallerEliminado = await TallerModel.findByIdAndDelete(id);
  
      res.json({
        ok: true,
        msg: "Taller eliminado",

      });
    } catch (error) {
      res.status(400).json({
        ok: false,
        msg: "Error al eliminar el taller",
      });
    }
};

export const actualizarTaller = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const { body } = req; 

        const tallerActualizo = await TallerModel.findByIdAndUpdate(id,  body, { new: true });
        res.status(200).json({
            ok: true,
            msg: "taller actualizado",
            inmueble: tallerActualizo, 
        });
    } catch (error) {
        res.status(400).json({
            ok: false,
            mgs: `Error al actualizar taller`,
        });
    }
};
