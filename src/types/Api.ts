import { Aircraft, Flight, Airport, Fbo, Company, Job, Member, VirtualAirline, } from ".";

export interface Api {
    getAircraftFlights: any,
    getAircraft: any,
    getAirport: any,
    getCompanyFbos: any,
    getCompanyFleet: any,
    getCompanyFlights: any,
    getCompanyJobs: any,
    getCompany: any,
    getFlight: any,
    getVirtualAirlineMembers: any,
    getVirtualAirline: any,
}