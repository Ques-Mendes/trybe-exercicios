// ./FuturisticCar.ts
import { IVehicle } from './interfaces/car.interface';

export default class FuturisticCar implements IVehicle {
  drive(): void { console.log('Drive a futuristic car'); }

  fly(): void { console.log('Flying a futuristic car'); }
}