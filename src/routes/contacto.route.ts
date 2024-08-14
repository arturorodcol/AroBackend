import { Router } from "express";
import { contactoUsuario } from "../controller/contacto.controller";

const router = Router();
router.post("/", contactoUsuario);

export default router; 