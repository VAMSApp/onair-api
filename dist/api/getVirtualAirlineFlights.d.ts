import { Flight } from '../types';
export declare const getVirtualAirlineFlights: (vaId: string, apiKey: string, page?: number, limit?: number) => Promise<Flight[]>;
