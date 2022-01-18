import { Flight } from '../types/Flight';
export declare const getAircraftFlights: (aircraftId: string, apiKey: string, world: string, page?: number, limit?: number) => Promise<Flight[]>;
export default getAircraftFlights;
