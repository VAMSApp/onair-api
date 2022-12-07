import {
    OnAirApiConfig,
    CompanyResponse,
    FleetResponse,
    FbosResponse,
    FlightsResponse,
    JobsResponse,
    EmployeeResponse,
    CashFlowResponse,
    BalanceSheetResponse,
    IncomeStatementResponse,
    WorkOrdersResponse,
    AirportResponse,
    FlightResponse,
    NotificationsResponse,
    VirtualAirlineResponse,
    MembersResponse,
    ShareHoldersResponse,
    VARolesResponse,
    MissionFlightTracksResponse,
    AircraftResponse,
    IOnAirApi,
    EmployeesResponse,
} from './types';
import { getCompany, getCompanyFleet, getCompanyFbos, getCompanyFlights, getCompanyJobs, getCompanyEmployees, getCompanyCashFlow, getCompanyIncomeStatement, getCompanyBalanceSheet, getCompanyMissionFlightTracks, getCompanyWorkOrders, getAircraft, getAircraftFlights, getAirport, getFlight, getVirtualAirline, getVirtualAirlineMembers, getVirtualAirlineShareHolders, getVirtualAirlineRoles, getVirtualAirlineFlights, getVirtualAirlineFleet, getVirtualAirlineJobs, getVirtualAirlineFbos, getVirtualAirlineNotifications, getEmployee } from './api';
import { isValidGuid } from './utils';
export * from './types';

export class OnAirApi implements IOnAirApi {
    // Properties
    private ApiKey: string
    private CompanyId: string
    private VaId?: string

    // Constructor
    constructor(config: OnAirApiConfig) {
        const {
            apiKey,
            companyId,
            vaId,
        } = config;

        if (!apiKey) throw new Error('No API Key provided');
        if (!this.isValidGuid(apiKey)) throw new Error('Invalid API Key provided');
        if (!companyId) throw new Error('No Company Id provided');
        if (!this.isValidGuid(companyId)) throw new Error('Invalid Company Id provided');
        if (!vaId) throw new Error('No VA ID provided');
        if (vaId && !this.isValidGuid(vaId)) throw new Error('Invalid VA ID provided');

        this.ApiKey = apiKey;
        this.CompanyId = companyId;
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
        this.isValidGuid = this.isValidGuid.bind(this);
    }

    public isValidGuid(guid:string): boolean {
        return isValidGuid(guid);
    }

    public async getCompany(companyId?:string): Promise<CompanyResponse> {
        if (!companyId) companyId = this.CompanyId;
        if (!companyId) throw new Error('No Company Id provided');
        if (!this.isValidGuid(companyId)) throw new Error('Invalid Company Id provided');

        const company:CompanyResponse = await getCompany(companyId, this.ApiKey);
        return company;
    }

    public async getCompanyFleet(companyId?:string): Promise<FleetResponse> {
        if (!companyId) companyId = this.CompanyId;
        if (!companyId) throw new Error('No Company Id provided');
        if (!this.isValidGuid(companyId)) throw new Error('Invalid Company Id provided');

        const companyFleet:FleetResponse = await getCompanyFleet(companyId, this.ApiKey);
        return companyFleet;
    }

    public async getCompanyFbos(companyId?:string): Promise<FbosResponse> {
        if (!companyId) companyId = this.CompanyId;
        if (!companyId) throw new Error('No Company Id provided');
        if (!this.isValidGuid(companyId)) throw new Error('Invalid Company Id provided');

        const companyFbos:FbosResponse = await getCompanyFbos(companyId, this.ApiKey);
        return companyFbos;
    }

    public async getCompanyFlights(companyId?:string, page = 1, limit = 20): Promise<FlightsResponse> {
        if (!companyId) companyId = this.CompanyId;
        if (!companyId) throw new Error('No Company Id provided');
        if (!this.isValidGuid(companyId)) throw new Error('Invalid Company Id provided');

        const companyFlights:FlightsResponse = await getCompanyFlights(companyId, this.ApiKey, page, limit);
        return companyFlights;
    }

    public async getCompanyJobs(companyId?:string, completed = false): Promise<JobsResponse> {
        if (!companyId) companyId = this.CompanyId;
        if (!companyId) throw new Error('No Company Id provided');
        if (!this.isValidGuid(companyId)) throw new Error('Invalid Company Id provided');

        const companyJobs:JobsResponse = await getCompanyJobs(companyId, this.ApiKey, completed);
        return companyJobs;
    }

    public async getCompanyEmployees(companyId?:string): Promise<EmployeesResponse> {
        if (!companyId) companyId = this.CompanyId;
        if (!companyId) throw new Error('No Company Id provided');
        if (!this.isValidGuid(companyId)) throw new Error('Invalid Company Id provided');

        const companyEmployees:EmployeesResponse = await getCompanyEmployees(companyId, this.ApiKey);

        return companyEmployees;
    }

    public async getCompanyCashFlow(companyId?:string) {
        if (!companyId) companyId = this.CompanyId;
        if (!companyId) throw new Error('No Company Id provided');
        if (!this.isValidGuid(companyId)) throw new Error('Invalid Company Id provided');

        const cashFlow:CashFlowResponse = await getCompanyCashFlow(companyId, this.ApiKey);

        return cashFlow;
    }

    public async getCompanyIncomeStatement(companyId?:string, startDate?: string | undefined, endDate?: string | undefined):Promise<IncomeStatementResponse> {
        if (!companyId) companyId = this.CompanyId;
        if (!companyId) throw new Error('No Company Id provided');
        if (!this.isValidGuid(companyId)) throw new Error('Invalid Company Id provided');

        if (!startDate) {
            const currentDate = new Date();
            const priorDate = new Date().setDate(currentDate.getDate() - 30);
            startDate = new Date(priorDate).toISOString();
        }

        if (!endDate) {
            endDate = new Date().toISOString();
        }

        const incomeStatement: IncomeStatementResponse = await getCompanyIncomeStatement(startDate, endDate, companyId, this.ApiKey);

        return incomeStatement;
    }

    public async getCompanyBalanceSheet(companyId?:string):Promise<BalanceSheetResponse> {
        if (!companyId) companyId = this.CompanyId;
        if (!companyId) throw new Error('No Company Id provided');
        if (!this.isValidGuid(companyId)) throw new Error('Invalid Company Id provided');

        const balanceSheet: BalanceSheetResponse = await getCompanyBalanceSheet(companyId, this.ApiKey);

        return balanceSheet;
    }

    public async getCompanyMissionFlightTracks(companyId?:string):Promise<MissionFlightTracksResponse> {
        if (!companyId) companyId = this.CompanyId;
        if (!companyId) throw new Error('No Company Id provided');
        if (!this.isValidGuid(companyId)) throw new Error('Invalid Company Id provided');

        const flightTracks: MissionFlightTracksResponse = await getCompanyMissionFlightTracks(companyId, this.ApiKey);

        return flightTracks;
    }

    public async getCompanyWorkOrders(companyId?:string):Promise<WorkOrdersResponse> {
        if (!companyId) companyId = this.CompanyId;
        if (!companyId) throw new Error('No Company Id provided');
        if (!this.isValidGuid(companyId)) throw new Error('Invalid Company Id provided');

        const workOrders: WorkOrdersResponse = await getCompanyWorkOrders(companyId, this.ApiKey);

        return workOrders;
    }

    public async getAircraft(aircraftId:string): Promise<AircraftResponse> {
        if (!aircraftId) throw new Error('Aircraft ID not provided');
        if (!this.isValidGuid(aircraftId)) throw new Error('Invalid Aircraft ID provided');

        const aircraft: AircraftResponse = await getAircraft(aircraftId, this.ApiKey).then((response) => {
            return response;
        });

        return aircraft;
    }

    public async getAircraftFlights(aircraftId:string, page = 1, limit = 20):Promise<FlightsResponse> {
        if (!aircraftId) throw new Error('Aircraft ID not provided');
        if (!this.isValidGuid(aircraftId)) throw new Error('Invalid Aircraft ID provided');

        const flights: FlightsResponse = await getAircraftFlights(aircraftId, this.ApiKey, page, limit);
        return flights;
    }

    public async getAirport(airportCode:string): Promise<AirportResponse> {
        if (!airportCode) throw new Error('Airport ICAO code not provided');

        const airport: AirportResponse = await getAirport(airportCode, this.ApiKey);
        return airport;
    }

    public async getFlight(flightId:string): Promise<FlightResponse> {
        if (!flightId) throw new Error('Flight ID not provided');
        if (!this.isValidGuid(flightId)) throw new Error('Invalid Flight ID provided');

        const flight: FlightResponse = await getFlight(flightId, this.ApiKey);
        return flight;
    }

    public async getVirtualAirline(vaId?:string): Promise<VirtualAirlineResponse> {
        vaId = vaId || this.VaId;
        if (!vaId) throw new Error('VA ID is not provided');
        if (!this.isValidGuid(vaId)) throw new Error('Invalid VA ID provided');

        const virtualAirline: VirtualAirlineResponse = await getVirtualAirline(vaId, this.ApiKey);
        return virtualAirline;
    }

    public async getVirtualAirlineMembers(vaId?:string): Promise<MembersResponse> {
        vaId = vaId || this.VaId;
        if (!vaId) throw new Error('VA ID is not provided');
        if (!this.isValidGuid(vaId)) throw new Error('Invalid VA ID provided');

        const members: MembersResponse = await getVirtualAirlineMembers(vaId, this.ApiKey);
        return members;
    }

    public async getVirtualAirlineShareHolders(vaId?:string): Promise<ShareHoldersResponse> {
        vaId = vaId || this.VaId;
        if (!vaId) throw new Error('VA ID is not provided');
        if (!this.isValidGuid(vaId)) throw new Error('Invalid VA ID provided');

        const shareholders: ShareHoldersResponse = await getVirtualAirlineShareHolders(vaId, this.ApiKey);
        return shareholders;
    }

    public async getVirtualAirlineRoles(vaId?:string): Promise<VARolesResponse> {
        vaId = vaId || this.VaId;
        if (!vaId) throw new Error('VA ID is not provided');
        if (!this.isValidGuid(vaId)) throw new Error('Invalid VA ID provided');

        const varoles: VARolesResponse = await getVirtualAirlineRoles(vaId, this.ApiKey);
        return varoles;
    }

    public async getVirtualAirlineFlights(vaId?:string, page = 1, limit = 20): Promise<FlightsResponse> {
        vaId = vaId || this.VaId;
        if (!vaId) throw new Error('VA ID is not provided');
        if (!this.isValidGuid(vaId)) throw new Error('Invalid VA ID provided');

        const vaflights: FlightsResponse = await getVirtualAirlineFlights(vaId, this.ApiKey, page, limit);
        return vaflights;
    }

    public async getVirtualAirlineFleet(vaId?:string): Promise<FleetResponse> {
        vaId = vaId || this.VaId;
        if (!vaId) throw new Error('VA ID is not provided');
        if (!this.isValidGuid(vaId)) throw new Error('Invalid VA ID provided');

        const vaFleet: FleetResponse = await getVirtualAirlineFleet(vaId, this.ApiKey);
        return vaFleet;
    }

    public async getVirtualAirlineJobs(vaId?:string): Promise<JobsResponse> {
        vaId = vaId || this.VaId;
        if (!vaId) throw new Error('VA ID is not provided');
        if (!this.isValidGuid(vaId)) throw new Error('Invalid VA ID provided');

        const vaJobs: JobsResponse = await getVirtualAirlineJobs(vaId, this.ApiKey);
        return vaJobs;
    }

    public async getVirtualAirlineFbos(vaId?:string): Promise<FbosResponse> {
        vaId = vaId || this.VaId;
        if (!vaId) throw new Error('VA ID is not provided');
        if (!this.isValidGuid(vaId)) throw new Error('Invalid VA ID provided');

        const vaFbos: FbosResponse = await getVirtualAirlineFbos(vaId, this.ApiKey);
        return vaFbos;
    }

    public async getVirtualAirlineNotifications(vaId?:string): Promise<NotificationsResponse> {
        vaId = vaId || this.VaId;
        if (!vaId) throw new Error('VA ID is not provided');
        if (!this.isValidGuid(vaId)) throw new Error('Invalid VA ID provided');

        const vaNotiifcations: NotificationsResponse = await getVirtualAirlineNotifications(vaId, this.ApiKey);
        return vaNotiifcations;
    }

    public async getEmployee(employeeId:string): Promise<EmployeeResponse> {
        if (!employeeId) throw new Error('Employee ID is not provided');

        const employee: EmployeeResponse = await getEmployee(employeeId, this.ApiKey);
        return employee;
    }

}

export default OnAirApi;
