import { IShipLocation } from './iship-location';

export interface IShip {
    locations:Array<IShipLocation>;
    type:String;
}
