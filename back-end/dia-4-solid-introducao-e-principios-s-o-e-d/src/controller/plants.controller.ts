import { Request, Response, Router } from "express";
import Plants from '../plants';

const plantsModule = new Plants();
const plantsController = Router();

plantsController.get('/', async (req: Request, res: Response) => {
  const plants = await (plantsModule.getPlants());
  res.send(plants);
});

plantsController.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const plant = await (plantsModule.getPlantById(id));
  res.send(plant);
});

export default plantsController;

// GET /plants: retorna todas as plantas;
// GET /plant/:id: retorna uma planta com o id;
// DELETE /plant/:id: deleta uma planta com o id;
// POST /plant/:id: sobrescreve a planta com id;
// POST /plant: cria uma planta nova;
// GET /sunny/:id: retorna uma planta que precisa de sol com o id.