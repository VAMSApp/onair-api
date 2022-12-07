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
} from './';

export type IncomeStatementResponse = {
    StartDate: string;
    EndDate: string;
    Content: IncomeStatement | IncomeStatement[] | null;
};

export type BalanceSheetResponse = BalanceSheet | null;
export type VirtualAirlineResponse = VirtualAirline | null;
export type FlightResponse = Flight | null;
export type FlightsResponse = Flight[];
export type AircraftResponse = Aircraft | null;
export type FleetResponse = Aircraft[];
export type AirportResponse = Airport | null;
export type AirportsResponse = Airport[];
export type FboResponse = Fbo | null;
export type FbosResponse = Fbo[];
export type CompanyResponse = Company | null;
export type CompaniesResponse = Company[];
export type MissionFlightTracksResponse = FlightTrack[];
export type JobResponse = Job | null;
export type JobsResponse = Job[];
export type CashFlowResponse = CashFlow | null;
export type MemberResponse = Member | null;
export type MembersResponse = Member[];
export type FlightTrackResponse = FlightTrack | null;
export type FlightTracksResponse = FlightTrack[];
export type NotificationResponse = Notification | null;
export type NotificationsResponse = Notification[];
export type EmployeeResponse = People | null;
export type EmployeesResponse = People[];
export type ShareHolderResponse = ShareHolder | null;
export type ShareHoldersResponse = ShareHolder[];
export type WorkOrderResponse = WorkOrder | null;
export type WorkOrdersResponse = WorkOrder[];
export type VARoleResponse = VARole | null;
export type VARolesResponse = VARole[];

export type GetAircraft = (aircraftId: string, apiKey: string) => Promise<AircraftResponse>;
export type GetAircraftFlights = (aircraftId: string, apiKey: string, page?: number, limit?: number) => Promise<FlightsResponse>;
export type GetAirport = (icao: string, apiKey: string) => Promise<AirportResponse>;
export type GetCompanyFbos = (companyId: string, apiKey: string) => Promise<FbosResponse>;
export type GetCompanyFleet = (companyId: string, apiKey: string) => Promise<FleetResponse>;
export type GetCompanyFlights = (companyId: string, apiKey: string, page?: number, limit?: number) => Promise<FlightsResponse>;
export type GetCompanyJobs = (companyId: string, apiKey: string, completed?: boolean) => Promise<JobsResponse>;
export type GetCompanyEmployees = (companyId: string, apiKey: string) => Promise<EmployeesResponse>;
export type GetCompanyCashFlow = (companyId: string, apiKey: string) => Promise<CashFlowResponse>;
export type GetCompanyIncomeStatement = (companyId: string, apiKey: string, startDate?: string, endDate?: string) => Promise<IncomeStatementResponse>;
export type GetCompanyBalanceSheet = (companyId: string, apiKey: string) => Promise<BalanceSheetResponse>;
export type GetCompanyWorkOrders = (companyId: string, apiKey: string) => Promise<WorkOrdersResponse>;
export type GetCompanyMissionFlightTracks = (companyId: string, apiKey: string) => Promise<MissionFlightTracksResponse>;
export type GetCompany = (companyId: string, apiKey: string) => Promise<CompanyResponse>;
export type GetFlight = (flightId: string, apiKey: string) => Promise<FlightResponse>;
export type GetVirtualAirlineMembers = (vaId: string, apiKey: string) => Promise<MembersResponse>;
export type GetVirtualAirline = (vaId: string, apiKey: string) => Promise<VirtualAirlineResponse>;
export type GetVirtualAirlineShareHolders = (vaId: string, apiKey: string) => Promise<ShareHoldersResponse>;
export type GetVirtualAirlineRoles = (vaId: string, apiKey: string) => Promise<VARolesResponse>;
export type GetVirtualAirlineFlights = (vaId: string, apiKey: string, page?: number|undefined, limit?: number|undefined) => Promise<FlightsResponse>;
export type GetVirtualAirlineFleet = (vaId: string, apiKey: string) => Promise<FleetResponse>;
export type GetVirtualAirlineJobs = (vaId: string, apiKey: string) => Promise<JobsResponse>;
export type GetVirtualAirlineFbos = (vaId: string, apiKey: string) => Promise<FbosResponse>;
export type GetVirtualAirlineNotifications = (vaId: string, apiKey: string) => Promise<NotificationsResponse>;
export type GetVirtualAirlineIncomeStatement = (vaId: string, apiKey: string, startDate?: string, endDate?: string) => Promise<IncomeStatementResponse>;
export type GetEmployee = (employeeId: string, apiKey: string) => Promise<EmployeeResponse>;

export interface IOnAirApi {
    isValidGuid(guid:string): boolean;
    getCompany: (companyId?:string) => Promise<CompanyResponse>;
    getCompanyFleet: (companyId?:string) => Promise<FleetResponse>;
    getCompanyFbos: (companyId?:string) => Promise<FbosResponse>
    getCompanyFlights: (companyId?:string, page?:number, limit?:number) => Promise<FlightsResponse>
    getCompanyJobs: (companyId?:string, completed?:boolean) => Promise<JobsResponse>
    getCompanyEmployees: (companyId?:string) => Promise<EmployeesResponse>
    getCompanyCashFlow: (companyId?:string) => Promise<CashFlowResponse>
    getCompanyIncomeStatement: (companyId?:string, startDate?: string | undefined, endDate?: string | undefined) => Promise<IncomeStatementResponse>
    getCompanyBalanceSheet: (companyId?:string) => Promise<BalanceSheetResponse>
    getCompanyMissionFlightTracks: (companyId?:string) => Promise<MissionFlightTracksResponse>
    getCompanyWorkOrders: (companyId?:string) => Promise<WorkOrdersResponse>
    getAircraft: (aircraftId:string) => Promise<AircraftResponse>
    getAircraftFlights: (aircraftId:string, page?:number, limit?:number) => Promise<FlightsResponse>
    getAirport: (airportCode:string) => Promise<AirportResponse>
    getFlight: (flightId:string) => Promise<FlightResponse>
    getVirtualAirline: (vaId?:string) => Promise<VirtualAirlineResponse>
    getVirtualAirlineMembers: (vaId?:string) => Promise<MembersResponse>
    getVirtualAirlineShareHolders: (vaId?:string) => Promise<ShareHoldersResponse>
    getVirtualAirlineRoles: (vaId?:string) => Promise<VARolesResponse>
    getVirtualAirlineFlights: (vaId?:string, page?:number, limit?:number) => Promise<FlightsResponse>
    getVirtualAirlineFleet: (vaId?:string) => Promise<FleetResponse>
    getVirtualAirlineJobs: (vaId?:string) => Promise<JobsResponse>
    getVirtualAirlineFbos: (vaId?:string) => Promise<FbosResponse>
    getVirtualAirlineNotifications: (vaId?:string) => Promise<NotificationsResponse>
    getVirtualAirlineIncomeStatement: (vaId?:string, startDate?: string | undefined, endDate?: string | undefined) => Promise<IncomeStatementResponse>
    getEmployee: (employeeId:string) => Promise<EmployeeResponse>
}

export interface OnAirApiConfigOptions {
    logLevel: string,
    logConsole?: boolean,
}

export interface OnAirApiConfig {
    apiKey: string,
    companyId?: string | undefined,
    vaId?: string | undefined,
    options?: OnAirApiConfigOptions,
}
