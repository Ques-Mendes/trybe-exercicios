import { IAirPlane } from "./interfaces/car.interface";

export default class AirPlane implements IAirPlane {
  fly(): void {
    console.log('airplane');    
  }
};