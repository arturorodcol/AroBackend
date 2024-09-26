import express, { Application, Request, Response } from "express";
import { dbConnection } from "./database/connection";
import usuarioRoutes from "./routes/usuario.route";
import contactoRoutes from "./routes/contacto.route";
import tallerRoutes from "./routes/taller.route"; 
import authRoutes from "./routes/auth.route"; 
import cors from "cors";

class Server {
    private app: Application;
    private port: string;
    private apiPaths = {
        usuario: "/api/v1/usuario",
        contacto: "/api/v1/contacto",
        taller: "/api/v1/taller",
        auth: "/api/v1/auth",
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || "3000";
        //Base de datos
        dbConnection();
        //Métodos Iniciales
        this.middlewares();
        //Llamado rutas
        this.routes();
    }

    miPrimeraApi() {
        this.app.get("/", (req: Request, res: Response) => 
        res.status(200).json({ msg: "Infomrmación" }));
    }

    // funcion validar que esta bien antes de que ejecute API
    middlewares() {
        //permiso para consumir API desde dominio especifico
        this.app.use(cors())
        // Lectura del body en formato JSON
        this.app.use(express.json()); 
        this.miPrimeraApi();
    }

    routes(): void{
        this.app.use(cors());
        this.app.use(this.apiPaths.usuario, usuarioRoutes);
        this.app.use(this.apiPaths.contacto, contactoRoutes);
        this.app.use(this.apiPaths.taller, tallerRoutes);
        this.app.use(this.apiPaths.auth, authRoutes);
    }

    //función 
    listen(): void{
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en el puerto ", this.port);
        })
    }
}

//importar clase para que sea usada a otros archivos dentro del proyecto
export default Server; 