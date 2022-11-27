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
    Notification,
} from './types';
import { uuid4 } from './utils';
export * from './types';

export class OnAirApi {
    // Properties
    private ApiKey: string
    private CompanyId: string
    private VaId?: string

    // Constructor
    constructor(config: OnAirApiConfig) {
        const {
            apiKey,
            companyId,
            vaId
        } = config;

        if (!apiKey) throw new Error('No API Key provided');
        if (!apiKey.match(uuid4)) throw new Error('Invalid API Key provided');
        this.ApiKey = apiKey;

        if (!companyId) throw new Error('No Company ID provided');
        if (!companyId.match(uuid4)) throw new Error('Invalid Company ID provided');
        this.CompanyId = companyId;

        if (vaId && !vaId.match(uuid4)) throw new Error('Invalid VA ID provided');
        this.VaId = (vaId) ? vaId : undefined;


        this.getCompany = this.getCompany.bind(this);
        this.getCompanyFleet = this.getCompanyFleet.bind(this);
        this.getCompanyFbos = this.getCompanyFbos.bind(this);
        this.getCompanyFlights = this.getCompanyFlights.bind(this);
        this.getCompanyJobs = this.getCompanyJobs.bind(this);
        this.getCompanyEmployees = this.getCompanyEmployees.bind(this);
        this.getCompanyCashFlow = this.getCompanyCashFlow.bind(this);
        this.getCompanyIncomeStatement = this.getCompanyIncomeStatement.bind(this);
        this.getCompanyBalanceSheet = this.getCompanyBalanceSheet.bind(this);
        this.getCompanyMissionFlightTracks = this.getCompanyMissionFlightTracks.bind(this);
        this.getCompanyWorkOrders = this.getCompanyWorkOrders.bind(this);
        this.getAircraft = this.getAircraft.bind(this);
        this.getAircraftFlights = this.getAircraftFlights.bind(this);
        this.getAirport = this.getAirport.bind(this);
        this.getFlight = this.getFlight.bind(this);
        this.getVirtualAirline = this.getVirtualAirline.bind(this);
        this.getVirtualAirlineMembers = this.getVirtualAirlineMembers.bind(this);
        this.getVirtualAirlineShareHolders = this.getVirtualAirlineShareHolders.bind(this);
        this.getVirtualAirlineRoles = this.getVirtualAirlineRoles.bind(this);
        this.getVirtualAirlineFlights = this.getVirtualAirlineFlights.bind(this);
        this.getVirtualAirlineFleet = this.getVirtualAirlineFleet.bind(this);
        this.getVirtualAirlineJobs = this.getVirtualAirlineJobs.bind(this);
        this.getVirtualAirlineFbos = this.getVirtualAirlineFbos.bind(this);
        this.getVirtualAirlineNotifications = this.getVirtualAirlineNotifications.bind(this);
        this.getEmployee = this.getEmployee.bind(this);
    }

    public async getCompany(companyId:string = this.CompanyId): Promise<Company> {
        if (!companyId) throw new Error('No Company ID provided');

        const company: Company = await Api.getCompany(companyId, this.ApiKey);
        return company;
    }

    public async getCompanyFleet(companyId:string = this.CompanyId): Promise<Aircraft[]> {
        if (!companyId) throw new Error('No Company ID provided');

        const companyFleet: Aircraft[] = await Api.getCompanyFleet(companyId, this.ApiKey);
        return companyFleet;
    }

    public async getCompanyFbos(companyId:string = this.CompanyId): Promise<Fbo[]> {
        if (!companyId) throw new Error('No Company ID provided');

        const companyFbos: Fbo[] = await Api.getCompanyFbos(companyId, this.ApiKey);
        return companyFbos;
    }

    public async getCompanyFlights(companyId:string = this.CompanyId, page = 1, limit = 20): Promise<Flight[]> {
        if (!companyId) throw new Error('No Company ID provided');

        const companyFlights: Flight[] = await Api.getCompanyFlights(companyId, this.ApiKey, page, limit);
        return companyFlights;
    }

    public async getCompanyJobs(companyId:string = this.CompanyId, completed = false): Promise<Job[]> {
        if (!companyId) throw new Error('No Company ID provided');

        const companyJobs: Job[] = await Api.getCompanyJobs(companyId, this.ApiKey, completed);
        return companyJobs;
    }

    public async getCompanyEmployees(companyId:string = this.CompanyId): Promise<People[]> {
        if (!companyId) throw new Error('No Company ID provided');

        const companyEmployees: People[] = await Api.getCompanyEmployees(companyId, this.ApiKey);

        return companyEmployees;
    }

    public async getCompanyCashFlow(companyId:string = this.CompanyId): Promise<CashFlow> {
        if (!companyId) throw new Error('No Company ID provided');

        const cashFlow: CashFlow = await Api.getCompanyCashFlow(companyId, this.ApiKey);

        return cashFlow;
    }

    public async getCompanyIncomeStatement(companyId:string = this.CompanyId, startDate?: string | undefined, endDate?: string | undefined): Promise<IncomeStatement> {
        if (!companyId) throw new Error('No Company ID provided');

        if (!startDate) {
            const currentDate = new Date();
            const priorDate = new Date().setDate(currentDate.getDate() - 30);
            startDate = new Date(priorDate).toISOString();
        }

        if (!endDate) {
            endDate = new Date().toISOString();
        }

        const incomeStatement: IncomeStatement = await Api.getCompanyIncomeStatement(startDate, endDate, companyId, this.ApiKey);

        return incomeStatement;
    }

    public async getCompanyBalanceSheet(companyId:string = this.CompanyId): Promise<BalanceSheet> {
        if (!companyId) throw new Error('No Company ID provided');

        const balanceSheet: BalanceSheet = await Api.getCompanyBalanceSheet(companyId, this.ApiKey);

        return balanceSheet;
    }

    public async getCompanyMissionFlightTracks(companyId:string = this.CompanyId): Promise<FlightTrack[]> {
        if (!companyId) throw new Error('No Company ID provided');

        const flightTracks: FlightTrack[] = await Api.getCompanyMissionFlightTracks(companyId, this.ApiKey);

        return flightTracks;
    }

    public async getCompanyWorkOrders(companyId:string = this.CompanyId): Promise<WorkOrder[]> {
        if (!companyId) throw new Error('No Company ID provided');

        const workOrders: WorkOrder[] = await Api.getCompanyWorkOrders(companyId, this.ApiKey);

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

    public async getVirtualAirline(vaId?:string): Promise<VirtualAirline> {
        if (!vaId || !this.VaId) throw new Error('VA ID is not provided');

        const virtualAirline: VirtualAirline = await Api.getVirtualAirline(vaId || this.VaId, this.ApiKey);
        return virtualAirline;
    }

    public async getVirtualAirlineMembers(vaId?:string): Promise<Member[]> {
        if (!vaId || !this.VaId) throw new Error('VA ID is not provided');

        const members: Member[] = await Api.getVirtualAirlineMembers(vaId || this.VaId, this.ApiKey);
        return members;
    }

    public async getVirtualAirlineShareHolders(vaId?:string): Promise<ShareHolder[]> {
        if (!vaId || !this.VaId) throw new Error('VA ID is not provided');

        const shareholders: ShareHolder[] = await Api.getVirtualAirlineShareHolders(vaId || this.VaId, this.ApiKey);
        return shareholders;
    }

    public async getVirtualAirlineRoles(vaId?:string): Promise<VARole[]> {
        if (!vaId || !this.VaId) throw new Error('VA ID is not provided');

        const varoles: VARole[] = await Api.getVirtualAirlineRoles(vaId || this.VaId, this.ApiKey);
        return varoles;
    }

    public async getVirtualAirlineFlights(vaId?:string, page = 1, limit = 20): Promise<Flight[]> {
        if (!this.VaId) throw new Error('VA ID is not provided');

        const vaflights: Flight[] = await Api.getVirtualAirlineFlights(vaId || this.VaId, this.ApiKey, page, limit);
        return vaflights;
    }

    public async getVirtualAirlineFleet(vaId?:string): Promise<Aircraft[]> {
        if (!vaId || !this.VaId) throw new Error('VA ID is not provided');

        const vaFleet: Aircraft[] = await Api.getVirtualAirlineFleet(vaId || this.VaId, this.ApiKey);
        return vaFleet;
    }

    public async getVirtualAirlineJobs(vaId?:string): Promise<Job[]> {
        if (!vaId || !this.VaId) throw new Error('VA ID is not provided');

        const vaFleet: Job[] = await Api.getVirtualAirlineJobs(vaId || this.VaId, this.ApiKey);
        return vaFleet;
    }

    public async getVirtualAirlineFbos(vaId?:string): Promise<Fbo[]> {
        if (!vaId || !this.VaId) throw new Error('VA ID is not provided');

        const vaFbos: Fbo[] = await Api.getVirtualAirlineFbos(vaId || this.VaId, this.ApiKey);
        return vaFbos;
    }

    public async getVirtualAirlineNotifications(vaId?:string): Promise<Notification[]> {
        vaId = vaId || this.VaId
        if (!vaId) throw new Error('VA ID is not provided');

        const vaNotiifcations: Notification[] = await Api.getVirtualAirlineNotifications(vaId, this.ApiKey);
        return vaNotiifcations;
    }

    public async getEmployee(employeeId: string): Promise<People> {
        if (!employeeId) throw new Error('Employee ID is not provided');

        const employee: People = await Api.getEmployee(employeeId, this.ApiKey);
        return employee;
    }
}

export default OnAirApi;
