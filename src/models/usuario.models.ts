import { Model, Schema, model } from "mongoose";

// modelo de la clase principal 

const UsuarioSchema = new Schema ({
    nombre: { type: String, required: true},
    email: { type: String, required: true},
    tipoDocumento: { type: String, required: true},
    numeroDocumento: { type: Number, required: true, unique: true },
    login: {type: String, required: true, unique: true },
    password: {type: String, required: true},
    rol: {type: String, required: true, default: "ADMINISTRADOR"},
    estado: { type: Boolean, required: true, default: true},
    createdAt: { type: Date, default: Date.now() },
    updateAt: { type: Date, default: Date.now() }
});

//model "NOMBRE DE BASE DE DATOS EN MONGOOSE"   será el nombre de la colección en mongoDB - estandar es minuscula 
const UsuarioModel: Model<any> = model("usuario", UsuarioSchema);
export default UsuarioModel; 