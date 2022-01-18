import 'dotenv/config';
import { Aircraft } from './types/Aircraft';
import { Company } from './types/Company';
import { Flight } from './types/Flight';
import { Fbo } from './types/Fbo';
export declare class OnAirApi {
    private apiKey;
    private companyId;
    private world;
    constructor(_apiKey: string, _companyId: string, _world: string);
    getCompanyDetails(): Promise<Company>;
    getCompanyFleet(): Promise<Aircraft[]>;
    getCompanyFbos(): Promise<Fbo[]>;
    getCompanyFlights(page?: number, limit?: number): Promise<Flight[]>;
    getAircraft(aircraftId: string): Promise<Aircraft>;
    getAircraftFlights(aircraftId: string): Promise<Flight[]>;
    getAirport(airportCode: string): Promise<any>;
    getFlight(flightId: string): Promise<Flight>;
}
export default OnAirApi;
