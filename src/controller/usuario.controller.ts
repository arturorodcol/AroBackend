import { Request, Response } from "express";
import UsuarioModel from "../models/usuario.models";


export const crearUsuario = async (req: Request, res: Response) => {
    const {body} = req;
    const {login, password } = body; 
    console.log("estoy en el controlador");
    
    try {
        //no creación de usuario con el mismo login (correo)
        const existeLogin = await UsuarioModel.findOne({
            login: login,
        });

        if(existeLogin) {
            return res.status(409).json({
                ok: false,
                msg: `Ya existe el login ${login} creado`,
            });
        }
        // instancia de mi modelo//
        const nuevoUsuario = new UsuarioModel({ 
            ...body,
        });
      
        const usuarioCreado = await nuevoUsuario.save(); //guardar usuario//

        res.status(200).json({
            ok: true,
            msg: "Usuario creado satisfactoriamente",
            usuario: usuarioCreado,
        });
    } catch (error) {
        console.error(error);
        res.status(400).json({
            ok: false,
            error,
            msg: "Error al crear usuario",
        }); 
    }
}

export const getUsuarios = async (req: Request, res: Response) => {
    try {
        const usuarios = await UsuarioModel.find();
        res.status(200).json({
            ok: true,
            usuarios,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            ok: true,
            msg: "Error al consultar clientes", 
        });
    }
}

export const getUnUsuario = async (req: Request, res: Response) => {
    try {
        const id = req.params.id; //busqueda espeficica //
        console.log(id);

        const usuario = await UsuarioModel.findById({_id: id}); // que voy a buscar //
        res.status(200).json({
            ok: true,
            usuario,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            ok: true,
            msg: "Error al consultar usuario", 
        });
    }
}

export const eliminarUsuarios = async (req: Request, res: Response) => {
    try {
        const id = req.params.id; //busqueda espeficica //

        const eliminarUsuario = await UsuarioModel.findByIdAndDelete(id); // actualizar recibe tres parametros id, info que envio y revolución de lo que actualize //
        res.status(200).json({
            ok: true,
            usuario: eliminarUsuario, 
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            ok: true,
            msg: "Error al eliminar usuario", 
        });
    }
}
