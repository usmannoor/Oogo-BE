import { Request, Response } from 'express';
import { Repository } from 'typeorm';

import { Car } from '../entity/Car';
import carsData from '../../cars.json';
import dataSource from '../config/ormConfig'
import { ICar } from '../interface/car';
import { getCars, getSearchData } from '../services/car';

/**
 * Loads all cars from the database.
 */
export async function getAllCars(request: Request, response: Response) {
  try {
    const carResult: ICar[] = await getCars();
    response.send(carResult);
  } catch ( e ) {
    response.status(400).send(e);
  }
}

/**
 * Get car names using search
 */
export async function getSearchedCar(request: Request, response: Response) {
  try {
    const carResult: ICar[] = await getSearchData(request);
    response.send(carResult);
  } catch ( e ) {
    response.status(400).send(e);
  }
}

/**
 * Insert cars.
 */
export async function insertCars(request: Request, response: Response) {
  try {
    // get a car repository to perform operations with car
    const carRepository: Repository<Car> = dataSource.getRepository(Car);

    // bulk insert multiple cars
    await carRepository
      .createQueryBuilder()
      .insert()
      .into(Car)
      .values(carsData)
      .execute();

    response.status(200).send('Cars inserted successfully');
  } catch ( e ) {
    response.status(400).send(e);
  }
}
