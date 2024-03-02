import {
    CompanyResponse,
    CashFlowResponse,
    IncomeStatementResponse,
    BalanceSheetResponse,
    Notification,
    AircraftResponse,
    AirportResponse,
    FlightResponse,
    VirtualAirlineResponse,
    EmployeeResponse,
    ShareHolder,
    Aircraft,
    Fbo,
    Flight,
    FlightTrack,
    Job,
    Member,
    VARole,
    WorkOrder,
    People as Employee,
    MaintenanceCostResponse,
    EconomicDetailResponse,
    AircraftTypeResponse,
} from '../types';

export interface IOnAirApi {
    isValidGuid(guid:string): boolean;
    getCompany: (companyId?:string) => Promise<CompanyResponse>;
    getCompanyFleet: (companyId?:string) => Promise<Aircraft[]>;
    getCompanyFbos: (companyId?:string) => Promise<Fbo[]>
    getCompanyFlights: (companyId?:string, page?:number, limit?:number) => Promise<Flight[]>
    getCompanyJobs: (companyId?:string, completed?:boolean) => Promise<Job[]>
    getCompanyEmployees: (companyId?:string) => Promise<Employee[]>
    getCompanyCashFlow: (companyId?:string) => Promise<CashFlowResponse>
    getCompanyIncomeStatement: (companyId?:string, startDate?: string | undefined, endDate?: string | undefined) => Promise<IncomeStatementResponse>
    getCompanyBalanceSheet: (companyId?:string) => Promise<BalanceSheetResponse>
    getCompanyMissionFlightTracks: (companyId?:string) => Promise<FlightTrack[]>
    getCompanyWorkOrders: (companyId?:string) => Promise<WorkOrder[]>
    getCompanyAircraftWorkOrders: (aircraftId:string, companyId?:string) => Promise<WorkOrder[]>
    getCompanyNotifications: (companyId?:string) => Promise<Notification[]>
    getAircraft: (aircraftId:string) => Promise<AircraftResponse>
    getAircraftType: (aircraftId:string) => Promise<AircraftTypeResponse>
    getAircraftFlights: (aircraftId:string, page?:number, limit?:number) => Promise<Flight[]>
    getAircraftAtAirport: (icao:string) => Promise<AircraftResponse>
    getAircraftMaintenanceCosts: (aircraftId:string) => Promise<MaintenanceCostResponse>
    getAircraftEconomicDetails: (aircraftId:string) => Promise<EconomicDetailResponse>
    getAirport: (airportCode:string) => Promise<AirportResponse>
    getFlight: (flightId:string) => Promise<FlightResponse>
    getVirtualAirline: (vaId?:string) => Promise<VirtualAirlineResponse>
    getVirtualAirlineMembers: (vaId?:string) => Promise<Member[]>
    getVirtualAirlineShareHolders: (vaId?:string) => Promise<ShareHolder[]>
    getVirtualAirlineRoles: (vaId?:string) => Promise<VARole[]>
    getVirtualAirlineFlights: (vaId?:string, page?:number, limit?:number) => Promise<Flight[]>
    getVirtualAirlineFleet: (vaId?:string) => Promise<Aircraft[]>
    getVirtualAirlineJobs: (vaId?:string, completed?:boolean) => Promise<Job[]>
    getVirtualAirlineFbos: (vaId?:string) => Promise<Fbo[]>
    getVirtualAirlineNotifications: (vaId?:string) => Promise<Notification[]>
    getVirtualAirlineIncomeStatement: (vaId?:string, startDate?: string | undefined, endDate?: string | undefined) => Promise<IncomeStatementResponse>
    getVirtualAirlineWorkOrders: (vaId?:string) => Promise<WorkOrder[]>
    getEmployee: (employeeId:string) => Promise<EmployeeResponse>
    getFboJobs: (fboId:string) => Promise<Job[]>
}
