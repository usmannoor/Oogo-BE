import { Request } from 'express';
import { Like, Repository } from 'typeorm';

import { Car } from '../entity/Car';
import { ICar } from '../interface/car';
import cacheLocal from '../utils/cache_api';
import dataSource from '../config/ormConfig';

export async function getCars(): Promise<ICar[]> {
  try {
    // get a car repository to perform operations with car
    const carRepository: Repository<Car> = dataSource.getRepository(Car);

    // cache car data as it will remain the same
    let cacheCarData: ICar[] = cacheLocal.get<ICar[]>('all');
    if (!cacheCarData) {
      cacheCarData = await carRepository.find();
      if (!cacheCarData) {
        throw new Error(`No cars found`)
      }
      cacheLocal.set('all', cacheCarData)
    }

    // return cars
    return cacheCarData;
  } catch ( e ) {
    throw new Error(e);
  }
}

export async function getSearchData(request: Request): Promise<ICar[]> {
  try {
    // get a car repository to perform operations with car
    const carRepository: Repository<Car> = dataSource.getRepository(Car);
    const { search } = request.params;

    // cache car data as it will remain the same
    let cacheCarData: ICar[] = cacheLocal.get<ICar[]>(search);
    if (!cacheCarData) {
      cacheCarData = await carRepository.findBy({
        MakeName: Like(`%${search}%`),
      });
      if (!cacheCarData) {
        throw new Error(`Search not found`)
      }
      cacheLocal.set(search, cacheCarData)
    }

    // return cars
    return cacheCarData;
  } catch ( e ) {
    throw new Error(e);
  }
}