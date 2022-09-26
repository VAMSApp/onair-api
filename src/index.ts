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
    CashFlow,
    IncomeStatement,
    BalanceSheet,
    FlightTrack,
    WorkOrder,
} from './types';

export * from './types';

export class OnAirApi {
    // Properties
    private ApiKey: string
    private CompanyId: string | undefined
    private VaId: string | undefined

    // Constructor
    constructor(config: OnAirApiConfig) {
        const {
            apiKey,
            companyId,
            vaId
        } = config;

        if (!apiKey) throw new Error('No API Key provided');

        this.ApiKey = apiKey;
        this.CompanyId = companyId;
        this.VaId = vaId;
    }

    public async getCompany(): Promise<Company> {
        if (!this.CompanyId) throw new Error('No Company ID provided');

        const company: Company = await Api.getCompany(this.CompanyId, this.ApiKey);
        return company;
    }

    public async getCompanyFleet(): Promise<Aircraft[]> {
        if (!this.CompanyId) throw new Error('No Company ID provided');

        const companyFleet: Aircraft[] = await Api.getCompanyFleet(this.CompanyId, this.ApiKey);
        return companyFleet;
    }

    public async getCompanyFbos(): Promise<Fbo[]> {
        if (!this.CompanyId) throw new Error('No Company ID provided');

        const companyFbos: Fbo[] = await Api.getCompanyFbos(this.CompanyId, this.ApiKey);
        return companyFbos;
    }

    public async getCompanyFlights(page = 1, limit = 20): Promise<Flight[]> {
        if (!this.CompanyId) throw new Error('No Company ID provided');

        const companyFlights: Flight[] = await Api.getCompanyFlights(this.CompanyId, this.ApiKey, page, limit);
        return companyFlights;
    }

    public async getCompanyJobs(completed = false): Promise<Job[]> {
        if (!this.CompanyId) throw new Error('No Company ID provided');

        const companyJobs: Job[] = await Api.getCompanyJobs(this.CompanyId, this.ApiKey, completed);
        return companyJobs;
    }

    public async getCompanyEmployees(): Promise<People[]> {
        if (!this.CompanyId) throw new Error('No Company ID provided');

        const companyEmployees: People[] = await Api.getCompanyEmployees(this.CompanyId, this.ApiKey);

        return companyEmployees;
    }

    public async getCompanyCashFlow(): Promise<CashFlow> {
        if (!this.CompanyId) throw new Error('No Company ID provided');

        const cashFlow: CashFlow = await Api.getCompanyCashFlow(this.CompanyId, this.ApiKey);

        return cashFlow;
    }

    public async getCompanyIncomeStatement(startDate?: string | undefined, endDate?: string | undefined): Promise<IncomeStatement> {
        if (!this.CompanyId) throw new Error('No Company ID provided');

        if (!startDate) {
            const currentDate = new Date();
            const priorDate = new Date().setDate(currentDate.getDate() - 30);
            startDate = new Date(priorDate).toISOString();
        }

        if (!endDate) {
            endDate = new Date().toISOString();
        }

        const incomeStatement: IncomeStatement = await Api.getCompanyIncomeStatement(startDate, endDate, this.CompanyId, this.ApiKey);

        return incomeStatement;
    }

    public async getCompanyBalanceSheet(): Promise<BalanceSheet> {
        if (!this.CompanyId) throw new Error('No Company ID provided');

        const balanceSheet: BalanceSheet = await Api.getCompanyBalanceSheet(this.CompanyId, this.ApiKey);

        return balanceSheet;
    }

    public async getCompanyMissionFlightTracks(): Promise<FlightTrack[]> {
        if (!this.CompanyId) throw new Error('No Company ID provided');

        const flightTracks: FlightTrack[] = await Api.getCompanyMissionFlightTracks(this.CompanyId, this.ApiKey);

        return flightTracks;
    }

    public async getCompanyWorkOrders(): Promise<WorkOrder[]> {
        if (!this.CompanyId) throw new Error('No Company ID provided');

        const workOrders: WorkOrder[] = await Api.getCompanyWorkOrders(this.CompanyId, this.ApiKey);

        return workOrders;
    }

    public async getAircraft(aircraftId: string): Promise<Aircraft> {
        if (!aircraftId) throw new Error('Aircraft ID not provided');

        const aircraft: Aircraft = await Api.getAircraft(aircraftId, this.ApiKey);
        return aircraft;
    }

    public async getAircraftFlights(aircraftId: string, page = 1, limit = 20): Promise<Flight[]> {
        if (!aircraftId) throw new Error('Aircraft ID not provided');

        const flights: Flight[] = await Api.getAircraftFlights(aircraftId, this.ApiKey, page, limit);
        return flights;
    }

    public async getAirport(airportCode: string): Promise<Airport> {
        if (!airportCode) throw new Error('Airport ICAO code not provided');

        const airport: Airport = await Api.getAirport(airportCode, this.ApiKey);
        return airport;
    }

    public async getFlight(flightId: string): Promise<Flight> {
        if (!flightId) throw new Error('Flight ID not provided');

        const flight: Flight = await Api.getFlight(flightId, this.ApiKey);
        return flight;
    }

    public async getVirtualAirline(): Promise<VirtualAirline> {
        if (!this.VaId) throw new Error('VA ID is not provided');

        const virtualAirline: VirtualAirline = await Api.getVirtualAirline(this.VaId, this.ApiKey);
        return virtualAirline;
    }

    public async getVirtualAirlineMembers(): Promise<Member[]> {
        if (!this.VaId) throw new Error('VA ID is not provided');

        const members: Member[] = await Api.getVirtualAirlineMembers(this.VaId, this.ApiKey);
        return members;
    }

    public async getVirtualAirlineShareHolders(): Promise<ShareHolder[]> {
        if (!this.VaId) throw new Error('VA ID is not provided');

        const shareholders: ShareHolder[] = await Api.getVirtualAirlineShareHolders(this.VaId, this.ApiKey);
        return shareholders;
    }

    public async getVirtualAirlineRoles(): Promise<VARole[]> {
        if (!this.VaId) throw new Error('VA ID is not provided');

        const varoles: VARole[] = await Api.getVirtualAirlineRoles(this.VaId, this.ApiKey);
        return varoles;
    }

    public async getVirtualAirlineFlights(): Promise<Flight[]> {
        if (!this.VaId) throw new Error('VA ID is not provided');

        const vaflights: Flight[] = await Api.getVirtualAirlineFlights(this.VaId, this.ApiKey);
        return vaflights;
    }

    public async getVirtualAirlineFleet(): Promise<Aircraft[]> {
        if (!this.VaId) throw new Error('VA ID is not provided');

        const vaFleet: Aircraft[] = await Api.getVirtualAirlineFleet(this.VaId, this.ApiKey);
        return vaFleet;
    }

    public async getVirtualAirlineJobs(): Promise<Job[]> {
        if (!this.VaId) throw new Error('VA ID is not provided');

        const vaFleet: Job[] = await Api.getVirtualAirlineJobs(this.VaId, this.ApiKey);
        return vaFleet;
    }

    public async getEmployee(employeeId: string): Promise<People> {
        if (!employeeId) throw new Error('Employee ID is not provided');

        const employee: People = await Api.getEmployee(employeeId, this.ApiKey);
        return employee;
    }
}

export default OnAirApi;
