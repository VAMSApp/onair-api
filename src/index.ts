import {
    OnAirApiConfig,
    CompanyResponse,
    EmployeeResponse,
    CashFlowResponse,
    BalanceSheetResponse,
    IncomeStatementResponse,
    AirportResponse,
    FlightResponse,
    VirtualAirlineResponse,
    AircraftResponse,
    Notification,
    Aircraft,
    People as Employee,
    Fbo,
    Flight,
    FlightTrack,
    Job,
    Member,
    ShareHolder,
    VARole,
    WorkOrder,
    AircraftTypeResponse,
    MaintenanceCostResponse,
    EconomicDetailResponse,
    CompanyDashboardResponse,
} from './types';

import {
    IOnAirApi,
} from './interfaces';

import {
    getCompany,
    getCompanyDashboard,
    getCompanyFleet,
    getCompanyFbos,
    getCompanyFlights,
    getCompanyJobs,
    getCompanyEmployees,
    getCompanyCashFlow,
    getCompanyIncomeStatement,
    getCompanyBalanceSheet,
    getCompanyMissionFlightTracks,
    getCompanyWorkOrders,
    getCompanyAircraftWorkOrders,
    getCompanyNotifications,
    getAircraft,
    getAircraftType,
    getAircraftMaintenanceCosts,
    getAircraftEconomicDetails,
    getAircraftFlights,
    getAircraftAtAirport,
    getAirport,
    getFlight,
    getVirtualAirline,
    getVirtualAirlineMembers,
    getVirtualAirlineShareHolders,
    getVirtualAirlineRoles,
    getVirtualAirlineFlights,
    getVirtualAirlineFleet,
    getVirtualAirlineJobs,
    getVirtualAirlineFbos,
    getVirtualAirlineNotifications,
    getVirtualAirlineIncomeStatement,
    getVirtualAirlineWorkOrders,
    getEmployee,
    getFboJobs,
} from './api';
import { isValidGuid } from './utils';
export * from './types';
export * from './interfaces';

export class OnAirApi implements IOnAirApi {
    // Properties
    private ApiKey: string
    private CompanyId: string
    private VaId?: string|undefined

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

        if (vaId && this.isValidGuid(vaId)) {
            this.VaId = vaId;
            this.getVirtualAirline = this.getVirtualAirline.bind(this);
            this.getVirtualAirlineMembers = this.getVirtualAirlineMembers.bind(this);
            this.getVirtualAirlineShareHolders = this.getVirtualAirlineShareHolders.bind(this);
            this.getVirtualAirlineRoles = this.getVirtualAirlineRoles.bind(this);
            this.getVirtualAirlineFlights = this.getVirtualAirlineFlights.bind(this);
            this.getVirtualAirlineFleet = this.getVirtualAirlineFleet.bind(this);
            this.getVirtualAirlineJobs = this.getVirtualAirlineJobs.bind(this);
            this.getVirtualAirlineFbos = this.getVirtualAirlineFbos.bind(this);
            this.getVirtualAirlineNotifications = this.getVirtualAirlineNotifications.bind(this);
            this.getVirtualAirlineIncomeStatement = this.getVirtualAirlineIncomeStatement.bind(this);
            this.getVirtualAirlineWorkOrders = this.getVirtualAirlineWorkOrders.bind(this);
        }

        this.ApiKey = apiKey;
        this.CompanyId = companyId;

        this.getCompany = this.getCompany.bind(this);
        this.getCompanyDashboard = this.getCompanyDashboard.bind(this);
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
        this.getCompanyAircraftWorkOrders = this.getCompanyAircraftWorkOrders.bind(this);
        this.getCompanyNotifications = this.getCompanyNotifications.bind(this);
        this.getAircraft = this.getAircraft.bind(this);
        this.getAircraftMaintenanceCosts = this.getAircraftMaintenanceCosts.bind(this);
        this.getAircraftEconomicDetails = this.getAircraftEconomicDetails.bind(this);
        this.getAircraftFlights = this.getAircraftFlights.bind(this);
        this.getAircraftAtAirport = this.getAircraftAtAirport.bind(this);
        this.getAirport = this.getAirport.bind(this);
        this.getFlight = this.getFlight.bind(this);
        this.getFboJobs = this.getFboJobs.bind(this);

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

    public async getCompanyDashboard(companyId?:string): Promise<CompanyDashboardResponse> {
        if (!companyId) companyId = this.CompanyId;
        if (!companyId) throw new Error('No Company Id provided');
        if (!this.isValidGuid(companyId)) throw new Error('Invalid Company Id provided');

        const company:CompanyDashboardResponse = await getCompanyDashboard(companyId, this.ApiKey);
        return company;
    }

    public async getCompanyFleet(companyId?:string): Promise<Aircraft[]> {
        if (!companyId) companyId = this.CompanyId;
        if (!companyId) throw new Error('No Company Id provided');
        if (!this.isValidGuid(companyId)) throw new Error('Invalid Company Id provided');

        const companyFleet:Aircraft[] = await getCompanyFleet(companyId, this.ApiKey);
        return companyFleet;
    }

    public async getCompanyFbos(companyId?:string): Promise<Fbo[]> {
        if (!companyId) companyId = this.CompanyId;
        if (!companyId) throw new Error('No Company Id provided');
        if (!this.isValidGuid(companyId)) throw new Error('Invalid Company Id provided');

        const companyFbos:Fbo[] = await getCompanyFbos(companyId, this.ApiKey);
        return companyFbos;
    }

    public async getCompanyFlights(companyId?:string, page = 1, limit?:number): Promise<Flight[]> {
        if (!companyId) companyId = this.CompanyId;
        if (!companyId) throw new Error('No Company Id provided');
        if (!this.isValidGuid(companyId)) throw new Error('Invalid Company Id provided');

        const companyFlights:Flight[] = await getCompanyFlights(companyId, this.ApiKey, page, limit);
        return companyFlights;
    }

    public async getCompanyJobs(companyId?:string, completed = false): Promise<Job[]> {
        if (!companyId) companyId = this.CompanyId;
        if (!companyId) throw new Error('No Company Id provided');
        if (!this.isValidGuid(companyId)) throw new Error('Invalid Company Id provided');

        const companyJobs:Job[] = await getCompanyJobs(companyId, this.ApiKey, completed);
        return companyJobs;
    }

    public async getCompanyEmployees(companyId?:string): Promise<Employee[]> {
        if (!companyId) companyId = this.CompanyId;
        if (!companyId) throw new Error('No Company Id provided');
        if (!this.isValidGuid(companyId)) throw new Error('Invalid Company Id provided');

        const companyEmployees:Employee[] = await getCompanyEmployees(companyId, this.ApiKey);

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

    public async getCompanyMissionFlightTracks(companyId?:string):Promise<FlightTrack[]> {
        if (!companyId) companyId = this.CompanyId;
        if (!companyId) throw new Error('No Company Id provided');
        if (!this.isValidGuid(companyId)) throw new Error('Invalid Company Id provided');

        const flightTracks: FlightTrack[] = await getCompanyMissionFlightTracks(companyId, this.ApiKey);

        return flightTracks;
    }

    public async getCompanyWorkOrders(companyId?:string):Promise<WorkOrder[]> {
        if (!companyId) companyId = this.CompanyId;
        if (!companyId) throw new Error('No Company Id provided');
        if (!this.isValidGuid(companyId)) throw new Error('Invalid Company Id provided');

        const workOrders: WorkOrder[] = await getCompanyWorkOrders(companyId, this.ApiKey);

        return workOrders;
    }

    public async getCompanyAircraftWorkOrders(aircraftId: string, companyId?:string):Promise<WorkOrder[]> {
        if (!aircraftId) throw new Error('No Aircraft Id provided');
        if (!this.isValidGuid(aircraftId)) throw new Error('Invalid Aircraft Id provided');

        if (!companyId) companyId = this.CompanyId;
        if (!companyId) throw new Error('No Company Id provided');
        if (!this.isValidGuid(companyId)) throw new Error('Invalid Company Id provided');

        const workOrders: WorkOrder[] = await getCompanyAircraftWorkOrders(companyId, aircraftId, this.ApiKey);

        return workOrders;
    }

    public async getCompanyNotifications(companyId?:string): Promise<Notification[]> {
        companyId = companyId || this.CompanyId;
        if (!companyId) throw new Error('VA ID is not provided');
        if (!this.isValidGuid(companyId)) throw new Error('Invalid VA ID provided');

        const x: Notification[] = await getCompanyNotifications(companyId, this.ApiKey);
        return x;
    }

    public async getAircraft(aircraftId:string): Promise<AircraftResponse> {
        if (!aircraftId) throw new Error('Aircraft ID not provided');
        if (!this.isValidGuid(aircraftId)) throw new Error('Invalid Aircraft ID provided');

        const aircraft: AircraftResponse = await getAircraft(aircraftId, this.ApiKey).then((response) => {
            return response;
        });

        return aircraft;
    }

    public async getAircraftType(aircraftTypeId:string): Promise<AircraftTypeResponse> {
        if (!aircraftTypeId) throw new Error('Aircraft ID not provided');
        if (!this.isValidGuid(aircraftTypeId)) throw new Error('Invalid Aircraft ID provided');

        const x: AircraftTypeResponse = await getAircraftType(aircraftTypeId, this.ApiKey).then((response) => {
            return response;
        });

        return x;
    }

    public async getAircraftMaintenanceCosts(aircraftId:string): Promise<MaintenanceCostResponse> {
        if (!aircraftId) throw new Error('Aircraft ID not provided');
        if (!this.isValidGuid(aircraftId)) throw new Error('Invalid Aircraft ID provided');

        const x: MaintenanceCostResponse = await getAircraftMaintenanceCosts(aircraftId, this.ApiKey).then((response) => {
            return response;
        });

        return x;
    }

    public async getAircraftEconomicDetails(aircraftId:string): Promise<EconomicDetailResponse> {
        if (!aircraftId) throw new Error('Aircraft ID not provided');
        if (!this.isValidGuid(aircraftId)) throw new Error('Invalid Aircraft ID provided');

        const x: EconomicDetailResponse = await getAircraftEconomicDetails(aircraftId, this.ApiKey).then((response) => {
            return response;
        });

        return x;
    }

    public async getAircraftFlights(aircraftId:string, page = 1, limit?:number):Promise<Flight[]> {
        if (!aircraftId) throw new Error('Aircraft ID not provided');
        if (!this.isValidGuid(aircraftId)) throw new Error('Invalid Aircraft ID provided');

        const flights: Flight[] = await getAircraftFlights(aircraftId, this.ApiKey, page, limit);
        return flights;
    }

    public async getAircraftAtAirport(icao:string):Promise<Aircraft[]> {
        if (!icao) throw new Error('Airport ICAO is not provided');

        const aircraft: Aircraft[] = await getAircraftAtAirport(icao, this.ApiKey);
        return aircraft;
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

    public async getVirtualAirlineMembers(vaId?:string): Promise<Member[]> {
        vaId = vaId || this.VaId;
        if (!vaId) throw new Error('VA ID is not provided');
        if (!this.isValidGuid(vaId)) throw new Error('Invalid VA ID provided');

        const members: Member[] = await getVirtualAirlineMembers(vaId, this.ApiKey);
        return members;
    }

    public async getVirtualAirlineShareHolders(vaId?:string): Promise<ShareHolder[]> {
        vaId = vaId || this.VaId;
        if (!vaId) throw new Error('VA ID is not provided');
        if (!this.isValidGuid(vaId)) throw new Error('Invalid VA ID provided');

        const shareholders: ShareHolder[] = await getVirtualAirlineShareHolders(vaId, this.ApiKey);
        return shareholders;
    }

    public async getVirtualAirlineRoles(vaId?:string): Promise<VARole[]> {
        vaId = vaId || this.VaId;
        if (!vaId) throw new Error('VA ID is not provided');
        if (!this.isValidGuid(vaId)) throw new Error('Invalid VA ID provided');

        const varoles: VARole[] = await getVirtualAirlineRoles(vaId, this.ApiKey);
        return varoles;
    }

    public async getVirtualAirlineFlights(vaId?:string, page = 1, limit?:number): Promise<Flight[]> {
        vaId = vaId || this.VaId;
        if (!vaId) throw new Error('VA ID is not provided');
        if (!this.isValidGuid(vaId)) throw new Error('Invalid VA ID provided');

        const vaflights: Flight[] = await getVirtualAirlineFlights(vaId, this.ApiKey, page, limit);
        return vaflights;
    }

    public async getVirtualAirlineFleet(vaId?:string): Promise<Aircraft[]> {
        vaId = vaId || this.VaId;
        if (!vaId) throw new Error('VA ID is not provided');
        if (!this.isValidGuid(vaId)) throw new Error('Invalid VA ID provided');

        const vaFleet: Aircraft[] = await getVirtualAirlineFleet(vaId, this.ApiKey);
        return vaFleet;
    }

    public async getVirtualAirlineJobs(vaId?:string, completed = false): Promise<Job[]> {
        vaId = vaId || this.VaId;
        if (!vaId) throw new Error('VA ID is not provided');
        if (!this.isValidGuid(vaId)) throw new Error('Invalid VA ID provided');

        const vaJobs: Job[] = await getVirtualAirlineJobs(vaId, this.ApiKey, completed);
        return vaJobs;
    }

    public async getVirtualAirlineFbos(vaId?:string): Promise<Fbo[]> {
        vaId = vaId || this.VaId;
        if (!vaId) throw new Error('VA ID is not provided');
        if (!this.isValidGuid(vaId)) throw new Error('Invalid VA ID provided');

        const vaFbos: Fbo[] = await getVirtualAirlineFbos(vaId, this.ApiKey);
        return vaFbos;
    }

    public async getVirtualAirlineNotifications(vaId?:string): Promise<Notification[]> {
        vaId = vaId || this.VaId;
        if (!vaId) throw new Error('VA ID is not provided');
        if (!this.isValidGuid(vaId)) throw new Error('Invalid VA ID provided');

        const vaNotifications: Notification[] = await getVirtualAirlineNotifications(vaId, this.ApiKey);
        return vaNotifications;
    }

    public async getVirtualAirlineIncomeStatement(vaId?:string, startDate?: string | undefined, endDate?: string | undefined):Promise<IncomeStatementResponse> {
        if (!vaId) vaId = this.VaId;
        if (!vaId) throw new Error('No VA Id provided');
        if (!this.isValidGuid(vaId)) throw new Error('Invalid VA Id provided');

        if (!startDate) {
            const currentDate = new Date();
            const priorDate = new Date().setDate(currentDate.getDate() - 30);
            startDate = new Date(priorDate).toISOString();
        }

        if (!endDate) {
            endDate = new Date().toISOString();
        }

        const incomeStatement: IncomeStatementResponse = await getVirtualAirlineIncomeStatement(vaId, this.ApiKey);

        return incomeStatement;
    }

    public async getVirtualAirlineWorkOrders(virtualAirlineId?:string):Promise<WorkOrder[]> {
        if (!virtualAirlineId) virtualAirlineId = this.VaId;
        if (!virtualAirlineId) throw new Error('No Virtual Airline Id provided');
        if (!this.isValidGuid(virtualAirlineId)) throw new Error('Invalid Virtual Airline Id provided');

        const workOrders: WorkOrder[] = await getVirtualAirlineWorkOrders(virtualAirlineId, this.ApiKey);

        return workOrders;
    }

    public async getEmployee(employeeId:string): Promise<EmployeeResponse> {
        if (!employeeId) throw new Error('Employee ID is not provided');

        const employee: EmployeeResponse = await getEmployee(employeeId, this.ApiKey);
        return employee;
    }

    public async getFboJobs(fboId:string): Promise<Job[]> {
        if (!fboId) throw new Error('FBO ID is not provided');

        const fboJobs: Job[] = await getFboJobs(fboId, this.ApiKey);
        return fboJobs;
    }

}

export default OnAirApi;
