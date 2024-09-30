import { Router } from "express";
import { actualizarTaller, consultarTaller, crearTaller, eliminarTaller } from "../controller/taller.controller";
import validateJWT from "../middlewares/validate-jwt";
import { check } from "express-validator";

const router = Router();

router.post("/", 
    // validateJWT, 
    [
        check("nombre", "El nombre es obligatorio").not().isEmpty(),
        check("descripcion", "La descripción es obligatoria").not().isEmpty(),
        check("precio", "El precio es obligatorio").not().isEmpty()
    ],
    crearTaller);
router.get("/", 
    // validateJWT, 
    consultarTaller);
router.put("/:id", 
    // validateJWT, 
    actualizarTaller);
router.delete("/:id", 
    // validateJWT, 
    eliminarTaller );

export default router;
