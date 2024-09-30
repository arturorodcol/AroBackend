import { Router } from "express";
import { crearUsuario, eliminarUsuarios, getUnUsuario, getUsuarios } from "../controller/usuario.controller";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validate-fields";
import validateJWT from "../middlewares/validate-jwt";

const router = Router();

router.post(
    "/",
    // [
    //     check("nombre", "El nombre es obligatorio").not().isEmpty(),
    //     check("tipoDocumento", "El tipo de documento es obligatorio").not().isEmpty(),
    //     check("numeroDocumento", "El numero de documento es obligatorio").not().isEmpty(),
    //     check("email", "El correo es obligatorio").not().isEmpty().isEmail(),
    //     check("login", "El login para el usuario es obligatorio").not().isEmpty(),
    //     check("password", "La contraseña es obligatoria").not().isEmpty(),
    //     // validateFields,
    // ],
    crearUsuario);
    //validacion
router.get("/", 
    getUsuarios);
router.get("/:id", 
    validateJWT, 
    getUnUsuario);
router.delete("/:id", 
    validateJWT, 
    eliminarUsuarios);

export default router;
