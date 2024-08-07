import express, { Application, Request, Response } from "express";
import { dbConnection } from "./database/connection";
import usuarioRoutes from "./routes/usuario.route";
import cors from "cors";

class Server {
    private app: Application;
    private port: string;
    private apiPaths = {
        usuario: "/api/v1/usuario",
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
        // Lectura del body en formato JSON
        this.app.use(express.json()); 
        this.miPrimeraApi();
    }

    routes(): void{
        this.app.use(cors());
        this.app.use(this.apiPaths.usuario, usuarioRoutes);
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