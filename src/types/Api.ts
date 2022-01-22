import { Aircraft, Flight, Airport, Fbo, Company, Job, Member, VirtualAirline, } from ".";

export interface Api {
    getAircraftFlights: Promise<Flight[]>,
    getAircraft: Promise<Aircraft>,
    getAirport: Promise<Airport>,
    getCompanyFbos: Promise<Fbo[]>,
    getCompanyFleet: Promise<Aircraft[]>,
    getCompanyFlights: Promise<Flight[]>,
    getCompanyJobs: Promise<Job[]>,
    getCompany: Promise<Company>,
    getFlight: Promise<Flight[]>,
    getVirtualAirlineMembers: Promise<Member[]>,
    getVirtualAirline: Promise<VirtualAirline>,
}