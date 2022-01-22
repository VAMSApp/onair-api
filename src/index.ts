import 'dotenv/config'
import Api from './api'
import {
    Company,
    Flight,
    Fbo,
    Aircraft,
    Job,
    VirtualAirline,
    Member,
    Airport, 
} from './types'

export class OnAirApi {
    // Properties
    private ApiKey: string
    private CompanyId: string
    private World: string
    private VaId: string | undefined

    // Constructor
    constructor(apiKey: string, companyId: string, world: string, vaId: string | undefined) {
        if (!apiKey) throw new Error('No API Key provided');
        if(!companyId) throw new Error('No Company ID provided');
        if(!world) throw new Error('No World provided');

        this.ApiKey = apiKey;
        this.CompanyId = companyId;
        this.World = world;
        this.VaId = vaId;
    }

    public async getCompanyDetails(): Promise<Company> {
        let company: Company = await Api.getCompany(this.CompanyId, this.ApiKey, this.World)
        return company;
    }

    public async getCompanyFleet(): Promise<Aircraft[]> {
        let companyFleet: Aircraft[] = await Api.getCompanyFleet(this.CompanyId, this.ApiKey, this.World)
        return companyFleet;
    }
    
    public async getCompanyFbos(): Promise<Fbo[]> {
        let companyFbos: Fbo[] = await Api.getCompanyFbos(this.CompanyId, this.ApiKey, this.World);
        return companyFbos;
    }
    
    public async getCompanyFlights(page: number = 1, limit: number = 100): Promise<Flight[]> {
        let companyFlights: Flight[] = await Api.getCompanyFlights(this.CompanyId, this.ApiKey, this.World, page, limit);
        return companyFlights;
    }
    
    public async getCompanyJobs(): Promise<Job[]> {
        let companyJobs: Job[] = await Api.getCompanyJobs(this.CompanyId, this.ApiKey, this.World);
        return companyJobs;
    }

    public async getAircraft(aircraftId: string): Promise<Aircraft> {
        if (!aircraftId) throw new Error('Aircraft ID not provided');

        let aircraft: Aircraft = await Api.getAircraft(aircraftId, this.ApiKey, this.World);
        return aircraft;
    }

    public async getAircraftFlights(aircraftId: string): Promise<Flight[]> {
        if (!aircraftId) throw new Error('Aircraft ID not provided');

        let flights: Flight[] = await Api.getAircraftFlights(aircraftId, this.ApiKey, this.World);
        return flights;
    }

    public async getAirport(airportCode: string): Promise<Airport> {
        if (!airportCode) throw new Error('Airport ICAO code not provided');

        let airport: Airport = await Api.getAirport(airportCode, this.ApiKey, this.World);
        return airport;
    }
    
    public async getFlight(flightId: string): Promise<Flight> {
        if (!flightId) throw new Error('Flight ID not provided');

        let flight: Flight = await Api.getFlight(flightId, this.ApiKey, this.World);
        return flight;
    }
    
    public async getVirtualAirline(): Promise<VirtualAirline> {
        if (!this.VaId) throw new Error('VA ID is not provided');

        let virtualAirline: VirtualAirline = await Api.getVirtualAirline(this.VaId, this.ApiKey, this.World);
        return virtualAirline;
    }

    public async getVirtualAirlineMembers(): Promise<Member[]> {
        if (!this.VaId) throw new Error('VA ID is not provided');

        let members: Member[] = await Api.getVirtualAirlineMembers(this.VaId, this.ApiKey, this.World);
        return members;
    }
}



export default OnAirApi