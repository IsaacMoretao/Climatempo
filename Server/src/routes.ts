import { Router } from "express";

import { FindAllCityController } from "./modules/previsoes/useCases/ListCidades/FindCityController";
import { FindOsascoController } from "./modules/previsoes/useCases/ListPrevisionsOsasco/FindOsascoController";
import { FindAllAvailableController } from "./modules/previsoes/useCases/ListPrevisionsSaoPaulo/FindPrevisionController"

const routes = Router();

const findAllAvailableController = new FindAllAvailableController();
const findAllCityController = new FindAllCityController();
const findOsascoController = new FindOsascoController();

// <!-- <GET /> --> //

routes.get('/find/SaoPaulo', findAllAvailableController.handle);
routes.get('/find/Osasco', findOsascoController.handle);
routes.get('/', findAllCityController.handle);

export { routes }