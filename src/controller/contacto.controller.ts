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
