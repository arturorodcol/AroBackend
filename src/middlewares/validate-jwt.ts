import { NextFunction, Request, Response } from "express";
const jwt = require("jsonwebtoken");

//Puedo aprovechar esta interface para poder implementar en otras lineas del codigo, por ejemplo, para registrar el ID del usuario que registra un taller
export interface CustomRequest extends Request{
    _id?: number;
}

const validateJWT = (req: CustomRequest, res: Response, next: NextFunction) => {
    const token = req.header("x-token");
    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: "No hay token en la petición",
        });
    }
    try {
        const { _id } = jwt.verify(token, process.env.JWT_SECRET);
        req._id = _id; 
        next(); 
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: "Token no válido",
        });
    }
};

export default validateJWT;