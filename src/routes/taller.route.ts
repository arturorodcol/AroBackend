import { Router } from "express";
import { actualizarTaller, consultarTaller, crearTaller, eliminarTaller } from "../controller/taller.controller";

const router = Router();

router.post("/", crearTaller);
router.get("/", consultarTaller);
router.put("/:id", actualizarTaller);
router.delete("/:id",eliminarTaller );

export default router;
