import { Request, Response } from "express";
import ContactoModel from "../models/contacto.models";

export const contactoUsuario = async (req: Request, res: Response) => {
    
    const { nombre, telefono, correo, descripcion, detalles } = req.body;

    try {
        
        const nuevaPeticionContacto = new ContactoModel({
            nombre,
            telefono,
            correo,
            descripcion,
            detalles,
            createdAt: new Date()
        });

        const peticionContactoGuardada = await nuevaPeticionContacto.save();

        res.status(201).json({
            ok: true,
            msg: 'Peticion de contacto enviada correctamente',
            formulario: peticionContactoGuardada
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ 
            ok: false,
            msg: 'Error al enviar el correo' 
        });
    }
}

export const revisarContactoUsuarios = async (req: Request, res: Response) => {
    try {
        const contactos = await ContactoModel.find();
        res.status(200).json({
            ok: true,
            contactos,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            ok: true,
            msg: "Error al consultar usuarios por contactar", 
        });
    }
}

export const eliminarContactoUsuarios = async (req: Request, res: Response) => {
    try {
        const id = req.params.id; //busqueda espeficica //

        const eliminarContactoUsuario = await ContactoModel.findByIdAndDelete(id); // actualizar recibe tres parametros id, info que envio y revolución de lo que actualize //
        res.status(200).json({
            ok: true,
            eliminarContactoUsuario, 
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            ok: true,
            msg: "Error al eliminar usuario", 
        });
    }
}
