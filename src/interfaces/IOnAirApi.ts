import { CompanyResponse, FleetResponse, FbosResponse, FlightsResponse, JobsResponse, EmployeesResponse, CashFlowResponse, IncomeStatementResponse, BalanceSheetResponse, MissionFlightTracksResponse, WorkOrdersResponse, Notification, AircraftResponse, AirportResponse, FlightResponse, VirtualAirlineResponse, MembersResponse, ShareHoldersResponse, VARolesResponse, EmployeeResponse } from "../types";

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
    getCompanyNotifications: (companyId?:string) => Promise<Notification[]>
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
    getVirtualAirlineNotifications: (vaId?:string) => Promise<Notification[]>
    getVirtualAirlineIncomeStatement: (vaId?:string, startDate?: string | undefined, endDate?: string | undefined) => Promise<IncomeStatementResponse>
    getEmployee: (employeeId:string) => Promise<EmployeeResponse>
}
