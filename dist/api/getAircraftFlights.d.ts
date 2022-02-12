import { Flight } from '../types';
export declare const getAircraftFlights: (aircraftId: string, apiKey: string, page?: number, limit?: number) => Promise<Flight[]>;
