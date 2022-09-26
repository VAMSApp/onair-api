/* eslint-disable @typescript-eslint/no-explicit-any */
//import { Aircraft, Flight, Airport, Fbo, Company, Job, Member, VirtualAirline, } from ".";

export interface Api {
    getAircraftFlights: any,
    getAircraft: any,
    getAirport: any,
    getCompanyFbos: any,
    getCompanyFleet: any,
    getCompanyFlights: any,
    getCompanyJobs: any,
    getCompanyEmployees: any,
    getCompanyCashFlow: any,
    getCompanyIncomeStatement: any,
    getCompanyBalanceSheet: any,
    getCompanyMissionFlightTracks: any,
    getCompanyWorkOrders: any,
    getCompany: any,
    getFlight: any,
    getVirtualAirlineMembers: any,
    getVirtualAirline: any,
    getVirtualAirlineShareHolders: any,
    getVirtualAirlineRoles: any,
    getVirtualAirlineFlights: any,
    getVirtualAirlineFleet: any,
    getVirtualAirlineJobs: any,
    getEmployee: any,
}

export interface OnAirApiConfig {
    apiKey: string,
    companyId?: string | undefined,
    vaId?: string | undefined,
}
