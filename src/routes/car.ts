import { Router } from 'express';
import { getAllCars, getSearchedCar, insertCars } from '../controller/car';

const router = Router();

router
  .get('/', getAllCars)
  .get('/:search', getSearchedCar)
  .post('/', insertCars);

export default router;
