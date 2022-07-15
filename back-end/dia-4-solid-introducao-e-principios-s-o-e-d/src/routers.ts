import { Router } from "express";
import plantsController from './controller/plants.controller';

const routers = Router();
routers.use('/plants', plantsController);

export default routers;


