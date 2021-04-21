import { Router } from "express"
import { SettingsController } from "./controllers/SettingsController";

const routes = Router();

/**
 * Tipos de paramentos
 * Params =>  Paramentos de rotas
 * localhost:3333/settings/1
 * 
 * Query Params => Filtros e busca
 * localhost:3333/settings/1?search=algumacoisa
 * 
 * Body params => {
 * }
 */

const settingsController = new SettingsController();

routes.post("/settings", settingsController.create)

export { routes }