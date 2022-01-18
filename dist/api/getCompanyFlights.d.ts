import { Flight } from '../types/Flight';
export declare const getCompanyFlights: (companyId: string, apiKey: string, world: string, page?: number, limit?: number) => Promise<Flight[]>;
export default getCompanyFlights;
