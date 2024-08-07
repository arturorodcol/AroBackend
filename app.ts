import dotenv from 'dotenv';
import Server from "./src/server";

//conexión con .env o variables de enterno
dotenv.config();

const server = new Server();
server.listen();
