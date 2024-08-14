import { Router } from "express";
import { crearUsuario, eliminarUsuarios, getUnUsuario, getUsuarios } from "../controller/usuario.controller";

const router = Router();

router.post("/", crearUsuario);
router.get("/", getUsuarios);
router.get("/:id", getUnUsuario);
router.delete("/:id", eliminarUsuarios);

export default router;
