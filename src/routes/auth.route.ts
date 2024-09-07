import { Router } from "express";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validate-fields";
import { login, renewToken } from "../controller/auth.controller";
import validateJWT from "../middlewares/validate-jwt";

const router = Router();

router.post("/",
    [
        check("login", "El login es obligatorio").not().isEmpty(),
        check("password", "La contraseña es obligatoria").not().isEmpty(),
        validateFields,
    ],
    login);

router.get("/", validateJWT, renewToken);

export default router;
 