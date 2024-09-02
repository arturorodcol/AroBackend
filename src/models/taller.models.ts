import { model, Model, Schema } from "mongoose";

//Puedo mejorar este componente al crear interfaces //revisar video 27

const TallerSchema = new Schema ({
    nombre : { type: String, required: true },
	descripcion: { type: String, required: true },
	precio:  { type: Number, required: true },
	comentarios: { type: String, required: true },
	fecha:{ type: String, required: true },
	hora: { type:String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const TallerModel: Model<any> = model("Taller", TallerSchema);
export default TallerModel; 