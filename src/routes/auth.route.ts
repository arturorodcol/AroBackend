import { Router } from "express";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validate-fields";
import { login } from "../controller/auth.controller";

const router = Router();

router.post("/",
    [
        check("login", "El login es obligatorio").not().isEmpty(),
        check("password", "La contraseña es obligatoria").not().isEmpty(),
        validateFields,
    ],
    login);

export default router;
 