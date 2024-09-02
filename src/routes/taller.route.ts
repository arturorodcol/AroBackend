import { Router } from "express";
import { actualizarTaller, consultarTaller, crearTaller, eliminarTaller } from "../controller/taller.controller";
import validateJWT from "../middlewares/validate-jwt";

const router = Router();

router.post("/", validateJWT, crearTaller);
router.get("/", validateJWT, consultarTaller);
router.put("/:id", validateJWT, actualizarTaller);
router.delete("/:id", validateJWT, eliminarTaller );

export default router;
