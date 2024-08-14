import { model, Model, Schema } from "mongoose";

export interface ContactoInterface {
    nombre: string;
    telefono: string;
    correo: string;
    descripcion: string;
    detalles: string;
    createdAt: Date;
}

const ContactoSchema = new Schema<ContactoInterface>({
    nombre: { type: String, required: true },
    telefono: { type: String, required: true },
    correo: { type: String, required: true },
    descripcion: { type: String, required: true },
    detalles: { type: String, required: true },
    createdAt: { type: Date, default: Date.now() }
});

const ContactoModel: Model<any> = model("Contacto", ContactoSchema); 
export default ContactoModel; 