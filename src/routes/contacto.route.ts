import { Router } from "express";
import { contactoUsuario, eliminarContactoUsuarios, revisarContactoUsuarios } from "../controller/contacto.controller";

const router = Router();

router.post("/", contactoUsuario);
router.get("/", revisarContactoUsuarios);
router.delete("/:id", eliminarContactoUsuarios);

export default router; 