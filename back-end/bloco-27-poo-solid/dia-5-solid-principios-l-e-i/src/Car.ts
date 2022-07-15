import { IVehicleDrive } from "./interfaces/car.interface";

export default class Car implements IVehicleDrive {
  drive(): void {
    console.log('regular car');    
  }
};
