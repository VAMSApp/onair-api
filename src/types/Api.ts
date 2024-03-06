/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    VirtualAirline,
    Flight,
    Aircraft,
    Airport,
    Fbo,
    Company,
    Job,
    BalanceSheet,
    CashFlow,
    IncomeStatement,
    Member,
    Notification,
    People,
    ShareHolder,
    WorkOrder,
    VARole,
    FlightTrack,
    AircraftType,
    AircraftClass,
    AircraftEngine,
    MaintenanceCost,
    EconomicDetail,
    CompanyDashboard,
} from './';

export type IncomeStatementResponse = {
    StartDate: string;
    EndDate: string;
    Content: IncomeStatement | IncomeStatement[] | null;
};

export type BalanceSheetResponse = BalanceSheet | null;
export type VirtualAirlineResponse = VirtualAirline | null;
export type FlightResponse = Flight | null;
export type AircraftResponse = Aircraft|null;
export type AircraftEngineResponse = AircraftEngine|null;
export type MaintenanceCostResponse = MaintenanceCost|null;
export type EconomicDetailResponse = EconomicDetail|null;
export type AircraftTypeResponse = AircraftType|null;
export type AircraftClassResponse = AircraftClass;
export type AirportResponse = Airport|null;
export type FboResponse = Fbo|null;
export type CompanyResponse = Company|null;
export type CompanyDashboardResponse = CompanyDashboard|null;
export type JobResponse = Job|null;
export type CashFlowResponse = CashFlow|null;
export type MemberResponse = Member|null;
export type FlightTrackResponse = FlightTrack|null;
export type NotificationResponse = Notification|null;
export type EmployeeResponse = People|null;
export type ShareHolderResponse = ShareHolder|null;
export type WorkOrderResponse = WorkOrder|null;
export type VARoleResponse = VARole|null;

export type GetAircraft = (aircraftId: string, apiKey: string) => Promise<AircraftResponse>;
export type GetAircraftMaintenanceCosts = (aircraftId: string, apiKey: string) => Promise<MaintenanceCostResponse>;
export type GetAircraftEconomicDetails = (aircraftId: string, apiKey: string) => Promise<EconomicDetailResponse>;
export type GetAircraftType = (aircraftTypeId: string, apiKey: string) => Promise<AircraftTypeResponse>;
export type GetAircraftFlights = (aircraftId: string, apiKey: string, page?: number, limit?: number) => Promise<Flight[]>;
export type GetAirport = (icao: string, apiKey: string) => Promise<AirportResponse>;
export type GetAircraftAtAirport = (icao: string, apiKey: string) => Promise<Aircraft[]>;
export type GetCompanyFbos = (companyId: string, apiKey: string) => Promise<Fbo[]>;
export type GetCompanyFleet = (companyId: string, apiKey: string) => Promise<Aircraft[]>;
export type GetCompanyFlights = (companyId: string, apiKey: string, page?: number, limit?: number) => Promise<Flight[]>;
export type GetCompanyJobs = (companyId: string, apiKey: string, completed?: boolean) => Promise<Job[]>;
export type GetCompanyEmployees = (companyId: string, apiKey: string) => Promise<People[]>;
export type GetCompanyCashFlow = (companyId: string, apiKey: string) => Promise<CashFlowResponse>;
export type GetCompanyIncomeStatement = (companyId: string, apiKey: string, startDate?: string, endDate?: string) => Promise<IncomeStatementResponse>;
export type GetCompanyBalanceSheet = (companyId: string, apiKey: string) => Promise<BalanceSheetResponse>;
export type GetCompanyWorkOrders = (companyId: string, apiKey: string) => Promise<WorkOrder[]>;
export type GetCompanyMissionFlightTracks = (companyId: string, apiKey: string) => Promise<FlightTrack[]>;
export type GetCompany = (companyId: string, apiKey: string) => Promise<CompanyResponse>;
export type GetCompanyDashboard = (companyId: string, apiKey: string) => Promise<CompanyDashboardResponse>;
export type GetCompanyNotifications = (vaId: string, apiKey: string) => Promise<Notification[]>;
export type GetFlight = (flightId: string, apiKey: string) => Promise<FlightResponse>;
export type GetVirtualAirlineMembers = (vaId: string, apiKey: string) => Promise<Member[]>;
export type GetVirtualAirline = (vaId: string, apiKey: string) => Promise<VirtualAirlineResponse>;
export type GetVirtualAirlineShareHolders = (vaId: string, apiKey: string) => Promise<ShareHolder[]>;
export type GetVirtualAirlineRoles = (vaId: string, apiKey: string) => Promise<VARole[]>;
export type GetVirtualAirlineFlights = (vaId: string, apiKey: string, page?: number|undefined, limit?: number|undefined) => Promise<Flight[]>;
export type GetVirtualAirlineFleet = (vaId: string, apiKey: string) => Promise<Aircraft[]>;
export type GetVirtualAirlineJobs = (vaId: string, apiKey: string, showCompleted?:boolean) => Promise<Job[]>;
export type GetVirtualAirlineFbos = (vaId: string, apiKey: string) => Promise<Fbo[]>;
export type GetVirtualAirlineNotifications = (vaId: string, apiKey: string) => Promise<Notification[]>;
export type GetVirtualAirlineIncomeStatement = (vaId: string, apiKey: string, startDate?: string, endDate?: string) => Promise<IncomeStatementResponse>;
export type GetVirtualAirlineWorkOrders = (companyId: string, apiKey: string) => Promise<WorkOrder[]>;
export type GetEmployee = (employeeId: string, apiKey: string) => Promise<EmployeeResponse>;
export type GetCompanyAircraftWorkOrders = (companyId: string, aircraftId: string, apiKey: string) => Promise<WorkOrder[]>;
export type GetFboJobs = (fboId: string, apiKey: string) => Promise<Job[]>;

export type OnAirApiConfigOptions = {
    logLevel: string,
    logConsole?: boolean,
}

export type OnAirApiConfig = {
    apiKey: string,
    companyId?: string | undefined,
    vaId?: string | undefined,
    options?: OnAirApiConfigOptions,
}

export type QueryOptions = {
    startIndex?: number;
    limit?: number;
    page?: number;
};
