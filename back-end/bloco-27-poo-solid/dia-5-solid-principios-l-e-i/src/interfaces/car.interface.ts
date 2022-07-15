export interface IVehicleDrive {
  drive(): void;
}

export interface IAirPlane {
    fly(): void;
}

export interface IVehicle extends IVehicleDrive, IAirPlane {};