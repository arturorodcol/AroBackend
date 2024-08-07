"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connection_1 = require("./database/connection");
const usuario_route_1 = __importDefault(require("./routes/usuario.route"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.apiPaths = {
            usuario: "/api/v1/usuario",
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "3000";
        //Base de datos
        (0, connection_1.dbConnection)();
        //Métodos Iniciales
        this.middlewares();
        //Llamado rutas
        this.routes();
    }
    miPrimeraApi() {
        this.app.get("/", (req, res) => res.status(200).json({ msg: "Infomrmación" }));
    }
    // funcion validar que esta bien antes de que ejecute API
    middlewares() {
        // Lectura del body en formato JSON
        this.app.use(express_1.default.json());
        this.miPrimeraApi();
    }
    routes() {
        this.app.use((0, cors_1.default)());
        this.app.use(this.apiPaths.usuario, usuario_route_1.default);
    }
    //función 
    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en el puerto ", this.port);
        });
    }
}
//importar clase para que sea usada a otros archivos dentro del proyecto
exports.default = Server;
//# sourceMappingURL=server.js.map