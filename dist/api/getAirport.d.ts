import { Airport } from '../types/Airport';
export declare const getAirport: (icao: string, apiKey: string, world: string) => Promise<Airport>;
export default getAirport;
