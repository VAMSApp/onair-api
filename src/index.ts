import Api from './api';
import {
    Company,
    Flight,
    Fbo,
    Aircraft,
    Job,
    VirtualAirline,
    Member,
    Airport,
    OnAirApiConfig,
    People,
    ShareHolder,
    VARole,
} from './types';

export * from './types';

export default class OnAirApi {
    // Properties
    private ApiKey: string
    private World: string
    private CompanyId: string | undefined
    private VaId: string | undefined

    // Constructor
    constructor(config: OnAirApiConfig) {
        const {
            apiKey,
            world,
            companyId,
            vaId
        } = config;

        if (!apiKey) throw new Error('No API Key provided');
        if (!world) throw new Error('No World provided');

        this.ApiKey = apiKey;
        this.CompanyId = companyId;
        this.World = world;
        this.VaId = vaId;
    }

    public async getCompany(): Promise<Company> {
        if (!this.CompanyId) throw new Error('No Company ID provided');

        const company: Company = await Api.getCompany(this.CompanyId, this.ApiKey, this.World);
        return company;
    }

    public async getCompanyFleet(): Promise<Aircraft[]> {
        if (!this.CompanyId) throw new Error('No Company ID provided');

        const companyFleet: Aircraft[] = await Api.getCompanyFleet(this.CompanyId, this.ApiKey, this.World);
        return companyFleet;
    }

    public async getCompanyFbos(): Promise<Fbo[]> {
        if (!this.CompanyId) throw new Error('No Company ID provided');

        const companyFbos: Fbo[] = await Api.getCompanyFbos(this.CompanyId, this.ApiKey, this.World);
        return companyFbos;
    }

    public async getCompanyFlights(page = 1, limit = 20): Promise<Flight[]> {
        if (!this.CompanyId) throw new Error('No Company ID provided');

        const companyFlights: Flight[] = await Api.getCompanyFlights(this.CompanyId, this.ApiKey, this.World, page, limit);
        return companyFlights;
    }

    public async getCompanyJobs(): Promise<Job[]> {
        if (!this.CompanyId) throw new Error('No Company ID provided');

        const companyJobs: Job[] = await Api.getCompanyJobs(this.CompanyId, this.ApiKey, this.World);
        return companyJobs;
    }

    public async getCompanyEmployees(): Promise<People[]> {
        if (!this.CompanyId) throw new Error('No Company ID provided');

        const companyEmployees: People[] = await Api.getCompanyEmployees(this.CompanyId, this.ApiKey, this.World);

        return companyEmployees;
    }

    public async getAircraft(aircraftId: string): Promise<Aircraft> {
        if (!aircraftId) throw new Error('Aircraft ID not provided');

        const aircraft: Aircraft = await Api.getAircraft(aircraftId, this.ApiKey, this.World);
        return aircraft;
    }

    public async getAircraftFlights(aircraftId: string, page = 1, limit = 20): Promise<Flight[]> {
        if (!aircraftId) throw new Error('Aircraft ID not provided');

        const flights: Flight[] = await Api.getAircraftFlights(aircraftId, this.ApiKey, this.World, page, limit);
        return flights;
    }

    public async getAirport(airportCode: string): Promise<Airport> {
        if (!airportCode) throw new Error('Airport ICAO code not provided');

        const airport: Airport = await Api.getAirport(airportCode, this.ApiKey, this.World);
        return airport;
    }

    public async getFlight(flightId: string): Promise<Flight> {
        if (!flightId) throw new Error('Flight ID not provided');

        const flight: Flight = await Api.getFlight(flightId, this.ApiKey, this.World);
        return flight;
    }

    public async getVirtualAirline(): Promise<VirtualAirline> {
        if (!this.VaId) throw new Error('VA ID is not provided');

        const virtualAirline: VirtualAirline = await Api.getVirtualAirline(this.VaId, this.ApiKey, this.World);
        return virtualAirline;
    }

    public async getVirtualAirlineMembers(): Promise<Member[]> {
        if (!this.VaId) throw new Error('VA ID is not provided');

        const members: Member[] = await Api.getVirtualAirlineMembers(this.VaId, this.ApiKey, this.World);
        return members;
    }

    public async getVirtualAirlineShareHolders(): Promise<ShareHolder[]> {
        if (!this.VaId) throw new Error('VA ID is not provided');

        const shareholders: ShareHolder[] = await Api.getVirtualAirlineShareHolders(this.VaId, this.ApiKey, this.World);
        return shareholders;
    }

    public async getVirtualAirlineRoles(): Promise<VARole[]> {
        if (!this.VaId) throw new Error('VA ID is not provided');

        const varoles: VARole[] = await Api.getVirtualAirlineRoles(this.VaId, this.ApiKey, this.World);
        return varoles;
    }
}

