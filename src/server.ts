import express from "express";

import "./database";

const app = express();

import { routes } from "./routes"

/**
 * GET = Buscas
 * Post = Criação
 * Put = Alteração
 * Delete = Deletar
 * Patch = Alterar uma informação específica
 */

app.use(express.json())

app.use(routes);

app.listen(3333, () => { console.log("Server is runnig on port 3333") });