import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import UsuarioModel from "../models/usuario.models";
import generateJWT from "../helpers/jwt";
import { CustomRequest } from "../middlewares/validate-jwt";

export const login = async (req: Request, res: Response) => {
    const { login: loginUser, password } = req.body;
  
    try {
      // Verificar el login
      const usuario = await UsuarioModel.findOne({ login: loginUser });
  
      if (!usuario) {
        return res.status(401).json({
          ok: false,
          msg: "Las credenciales no válidas",
        });
      }
  
      // Verificar el password
      const validarPassword = bcrypt.compareSync(password, usuario.password);
      if (!validarPassword) {
        return res.status(401).json({
          ok: false,
          msg: "Las credenciales no válidas",
        });
      }
  
      // generar Token ///
      const token = await generateJWT(usuario._id, usuario.login);
  
      res.status(200).json({
        ok: true,
        usuario: usuario,
        token,
      });
    } catch (error) {
      res.status(400).json({
        ok: false,
        error,
        msg: "Hable con el administrador",
      });
    }
  };

export const renewToken = async (req: CustomRequest, res: Response) => {
  const id = req._id;

  try {
    if (typeof id === "undefined") {
      throw new Error("No existe un id");
    }

    const usuario = await UsuarioModel.findById(id);

    // Generar el Token
    const token = await generateJWT(id.toString());

    res.json({
      ok: true,
      token,
      usuario,
    });
  } catch (error) {
    console.error(error);
    res.status(401).json({
      ok: false,
      error,
      msg: "Hable con el administrador",
    });
  }
};




// https://mongoosejs.com/docs/tutorials/findoneandupdate.html
/* Para implementar actualización de la contraseña revisar esta documentación */