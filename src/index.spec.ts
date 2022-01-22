import { describe } from 'mocha';
import { expect } from 'chai';
import OnAirApi from './index';
import { Aircraft, Airport, Api, Company, Fbo, Flight, Job, Member, VirtualAirline, } from './types';

const ApiKey: string | undefined = process.env.COMPANY_APIKEY;
const CompanyId: string | undefined = process.env.COMPANY_ID;
const World: string | undefined = process.env.COMPANY_WORLD;
const VaId: string | undefined = process.env.VIRTUAL_AIRLINE_ID;

describe('OnAirApi()', function() {
    it('when instantiated with valid data, it should return an OnAirApi object', async function() {
        if (ApiKey !== undefined && CompanyId !== undefined && World !== undefined) {
            const api: OnAirApi = new OnAirApi(ApiKey, CompanyId, World, VaId);
            
            expect(api).to.be.an('Object');
        }
    });

    describe('getAircraft()', function () {
        it('when getAircraft() is queried with valid data, it should return a Aircraft object', async function() {
            if (ApiKey !== undefined && CompanyId !== undefined && World !== undefined) {
                const api: OnAirApi = new OnAirApi(ApiKey, CompanyId, World, VaId);
                const aircraftId: string = 'd8a921a5-4774-4530-b75e-14b41545cabc';
                
                let aircraft: Aircraft = await api.getAircraft(aircraftId);
                
                expect(aircraft).to.be.an('Object');
                expect(aircraft.Id).to.equal(aircraftId);
            }
        });
    })

    describe('getAircraftFlights()', function () {
        it('when getAircraftFlights() is queried with valid data, it should return an Aircrafts flights array', async function() {
            if (ApiKey !== undefined && CompanyId !== undefined && World !== undefined) {
                const api: OnAirApi = new OnAirApi(ApiKey, CompanyId, World, VaId);
                const aircraftId: string = 'd8a921a5-4774-4530-b75e-14b41545cabc';
                
                let flights: Flight[] = await api.getAircraftFlights(aircraftId);
                
                expect(flights).to.be.an('Object');
                expect(flights[0].AircraftId).to.equal(aircraftId);
            }
        });
    })

    describe('getAirport()', function() {
        it('when getAirport() is queried with valid data, it should return a valid Airport object', async function() {
            if (ApiKey !== undefined && CompanyId !== undefined && World !== undefined) {
                const api: OnAirApi = new OnAirApi(ApiKey, CompanyId, World, VaId);
                const airportCode: string = 'KLAX';
                
                let airport: Airport = await api.getAirport(airportCode);
                
                expect(airport).to.be.an('Object');
                expect(airport.ICAO).to.equal(airportCode);
            }
        });
    });

    describe('getCompanyFbos()', function() {
        it('when getCompanyFbos() is queried with valid data, it should return an Array of Fbo Objects', async function() {
            if (ApiKey !== undefined && CompanyId !== undefined && World !== undefined) {
                const api: OnAirApi = new OnAirApi(ApiKey, CompanyId, World, VaId);
                
                let fbos: Fbo[] = await api.getCompanyFbos();
                
                expect(fbos).to.be.an('Object');
            }
        });
    });

    describe('getCompanyFleet()', function() {
        it('when getCompanyFleet() is queried with valid data, it should return an Array of Aircraft Objects', async function() {
            if (ApiKey !== undefined && CompanyId !== undefined && World !== undefined) {
                const api: OnAirApi = new OnAirApi(ApiKey, CompanyId, World, VaId);
                
                let aircraft: Aircraft[] = await api.getCompanyFleet();
                
                expect(aircraft).to.be.an('Object');
            }
        });
    });

    describe('getCompanyFlights()', function() {
        it('when getCompanyFlights() is queried with valid data, it should return an Array of Flight objects', async function() {
            if (ApiKey !== undefined && CompanyId !== undefined && World !== undefined) {
                const api: OnAirApi = new OnAirApi(ApiKey, CompanyId, World, VaId);
                
                let flights: Flight[] = await api.getCompanyFlights();
                
                expect(flights).to.be.an('Object');
            }
        });
    });

    describe('getCompanyJobs()', function() {
        it('when getCompanyJobs() is queried with valid data, it should return an Array of pending Jobs', async function() {
            if (ApiKey !== undefined && CompanyId !== undefined && World !== undefined) {
                    const api: OnAirApi = new OnAirApi(ApiKey, CompanyId, World, VaId);
                    
                    let jobs: Job[] = await api.getCompanyJobs();
                    
                    expect(jobs).to.be.an('Object');
                }
        });
    });

    describe('getCompanyDetails()', function() {
        it('when getCompanyDetails() is queried with valid data, it should return a Company Object', async function() {
            if (ApiKey !== undefined && CompanyId !== undefined && World !== undefined) {
                    const api: OnAirApi = new OnAirApi(ApiKey, CompanyId, World, VaId);
                    
                    let company: Company = await api.getCompanyDetails();
                    
                    expect(company).to.be.an('Object');
                }
        });
    });

    describe('getFlight()', function() {
        it('when getFlight() is queried with valid data, it should return a Flight Object', async function() {
            if (ApiKey !== undefined && CompanyId !== undefined && World !== undefined) {
                    const api: OnAirApi = new OnAirApi(ApiKey, CompanyId, World, VaId);
                    const flightId: string = 'd8a921a5-4774-4530-b75e-14b41545cabc';
                    
                    let flight: Flight = await api.getFlight(flightId);
                    
                    expect(flight).to.be.an('Object');
                    expect(flight.Id).to.equal(flightId);
                }
        });
    });

    describe('getVirtualAirlineMembers()', function() {
        it('when getVirtualAirlineMembers() is queried with valid data, it should return an Array of Members in a VirtualAirline', async function() {
            if (ApiKey !== undefined && CompanyId !== undefined && World !== undefined) {
                    const api: OnAirApi = new OnAirApi(ApiKey, CompanyId, World, VaId);
                    
                    let members: Member[] = await api.getVirtualAirlineMembers();
                    
                    expect(members).to.be.an('Object');
                }
        });
    });

    describe('getVirtualAirline()', function() {
        it('when getVirtualAirline() is queried with valid data, it should return a VirtualAirline Object', async function() {
            if (ApiKey !== undefined && CompanyId !== undefined && World !== undefined) {
                    const api: OnAirApi = new OnAirApi(ApiKey, CompanyId, World, VaId);
                    
                    let va: VirtualAirline = await api.getVirtualAirline();
                    
                    expect(va).to.be.an('Object');
                }
        });
    });

})
