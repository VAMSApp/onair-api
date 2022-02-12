import { Flight } from '../types';
export declare const getCompanyFlights: (companyId: string, apiKey: string, page?: number, limit?: number) => Promise<Flight[]>;
