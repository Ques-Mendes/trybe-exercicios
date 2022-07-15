import { Request, Response, Router } from "express";
import Plants from '../plants';

const plantsModule = new Plants();
const plantsController = Router();

// GET /plants: retorna todas as plantas;
plantsController.get('/', async (req: Request, res: Response) => {
  const plants = await (plantsModule.getPlants());
  res.send(plants);
});

// GET /plant/:id: retorna uma planta com o id;
plantsController.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const plant = await (plantsModule.getPlantById(id));
  res.send(plant);
});

// DELETE /plant/:id: deleta uma planta com o id;
plantsController.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const plant = await (plantsModule.removePlantById(id));
  res.send(plant);
});

// POST /plant/:id: sobrescreve a planta com id;
plantsController.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const newPlant = req.body;
  const plant = await (plantsModule.editPlant(id, newPlant));
  res.send(plant);
});

// POST /plant: cria uma planta nova;
plantsController.post('/', async (req: Request, res: Response) => {
  const newPlant = req.body;
  const plant = await (plantsModule.savePlant(newPlant));
  res.send(plant);
});

// GET /sunny/:id: retorna uma planta que precisa de sol com o id.
// getPlantsThatNeedsSunWithId

export default plantsController;






