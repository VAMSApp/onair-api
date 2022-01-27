import { describe } from 'mocha';
import { expect } from 'chai';
import OnAirApi from './index';
import { Aircraft, Airport, Company, Fbo, Flight, Job, Member, People, VirtualAirline, } from './types';

const apiKey: string | undefined = process.env.COMPANY_APIKEY;
const companyId: string | undefined = process.env.COMPANY_ID;
const world: string | undefined = process.env.COMPANY_WORLD;
const vaId: string | undefined = process.env.VIRTUAL_AIRLINE_ID;

describe('OnAirApi()', function() {
    it('when instantiated with valid data, it should return an OnAirApi object', async function() {
        if (apiKey !== undefined && companyId !== undefined && world !== undefined) {
            const api: OnAirApi = new OnAirApi({ apiKey, world, companyId, vaId });

            expect(api).to.be.an('Object');
        }
    });

    describe('getAircraft()', function () {
        it('when getAircraft() is queried with valid data, it should return a Aircraft object', async function() {
            if (apiKey !== undefined && companyId !== undefined && world !== undefined) {
                const api: OnAirApi = new OnAirApi({ apiKey, world, companyId, vaId });
                const aircraftId = 'd8a921a5-4774-4530-b75e-14b41545cabc';

                const aircraft: Aircraft = await api.getAircraft(aircraftId);

                expect(aircraft).to.be.an('Object');
                expect(aircraft.Id).to.equal(aircraftId);
            }
        });
    });

    describe('getAircraftFlights()', function () {
        it('when getAircraftFlights() is queried with valid data, it should return an Aircrafts flights array', async function() {
            if (apiKey !== undefined && companyId !== undefined && world !== undefined) {
                const api: OnAirApi = new OnAirApi({ apiKey, world, companyId, vaId });
                const aircraftId = 'd8a921a5-4774-4530-b75e-14b41545cabc';

                const flights: Flight[] = await api.getAircraftFlights(aircraftId);

                expect(flights).to.be.an('Array');
                expect(flights[0].AircraftId).to.equal(aircraftId);
            }
        });
    });

    describe('getAirport()', function() {
        it('when getAirport() is queried with valid data, it should return a valid Airport object', async function() {
            if (apiKey !== undefined && companyId !== undefined && world !== undefined) {
                const api: OnAirApi = new OnAirApi({ apiKey, world, companyId, vaId });
                const airportCode = 'KLAX';

                const airport: Airport = await api.getAirport(airportCode);

                expect(airport).to.be.an('Object');
                expect(airport.ICAO).to.equal(airportCode);
            }
        });
    });

    describe('getCompanyFbos()', function() {
        it('when getCompanyFbos() is queried with valid data, it should return an Array of Fbo Objects', async function() {
            if (apiKey !== undefined && companyId !== undefined && world !== undefined) {
                const api: OnAirApi = new OnAirApi({ apiKey, world, companyId, vaId });

                const fbos: Fbo[] = await api.getCompanyFbos();

                expect(fbos).to.be.an('Array');
            }
        });
    });

    describe('getCompanyFleet()', function() {
        it('when getCompanyFleet() is queried with valid data, it should return an Array of Aircraft Objects', async function() {
            if (apiKey !== undefined && companyId !== undefined && world !== undefined) {
                const api: OnAirApi = new OnAirApi({ apiKey, world, companyId, vaId });

                const aircraft: Aircraft[] = await api.getCompanyFleet();

                expect(aircraft).to.be.an('Array');
            }
        });
    });

    describe('getCompanyFlights()', function() {
        it('when getCompanyFlights() is queried with valid data, it should return an Array of Flight objects', async function() {
            if (apiKey !== undefined && companyId !== undefined && world !== undefined) {
                const api: OnAirApi = new OnAirApi({ apiKey, world, companyId, vaId });

                const flights: Flight[] = await api.getCompanyFlights();

                expect(flights).to.be.an('Array');
            }
        });
    });

    describe('getCompanyJobs()', function() {
        it('when getCompanyJobs() is queried with valid data, it should return an Array of pending Jobs', async function() {
            if (apiKey !== undefined && companyId !== undefined && world !== undefined) {
                const api: OnAirApi = new OnAirApi({ apiKey, world, companyId, vaId });

                const jobs: Job[] = await api.getCompanyJobs();

                expect(jobs).to.be.an('Array');
            }
        });
    });

    describe('getCompanyEmployees()', function() {
        it('when getCompanyEmployees() is queried with valid data, it should return an Array of pending Jobs', async function() {
            if (apiKey !== undefined && companyId !== undefined && world !== undefined) {
                const api: OnAirApi = new OnAirApi({ apiKey, world, companyId, vaId });

                const employees: People[] = await api.getCompanyEmployees();

                expect(employees).to.be.an('Array');
            }
        });
    });

    describe('getCompany()', function() {
        it('when getCompany() is queried with valid data, it should return a Company Object', async function() {
            if (apiKey !== undefined && companyId !== undefined && world !== undefined) {
                const api: OnAirApi = new OnAirApi({ apiKey, world, companyId, vaId });

                const company: Company = await api.getCompany();

                expect(company).to.be.an('Object');
            }
        });
    });

    describe.skip('getFlight()', function() {
        it('when getFlight() is queried with valid data, it should return a Flight Object', async function() {
            if (apiKey !== undefined && companyId !== undefined && world !== undefined) {
                const api: OnAirApi = new OnAirApi({ apiKey, world, companyId, vaId });
                const flightId = 'd8a921a5-4774-4530-b75e-14b41545cabc';

                const flight: Flight = await api.getFlight(flightId);

                expect(flight).to.be.an('Object');
                expect(flight.Id).to.equal(flightId);
            }
        });
    });

    describe('getVirtualAirlineMembers()', function() {
        it('when getVirtualAirlineMembers() is queried with valid data, it should return an Array of Members in a VirtualAirline', async function() {
            if (apiKey !== undefined && companyId !== undefined && world !== undefined) {
                const api: OnAirApi = new OnAirApi({ apiKey, world, companyId, vaId });

                const members: Member[] = await api.getVirtualAirlineMembers();

                expect(members).to.be.an('Array');
            }
        });
    });

    describe('getVirtualAirline()', function() {
        it('when getVirtualAirline() is queried with valid data, it should return a VirtualAirline Object', async function() {
            if (apiKey !== undefined && companyId !== undefined && world !== undefined) {
                const api: OnAirApi = new OnAirApi({ apiKey, world, companyId, vaId });

                const va: VirtualAirline = await api.getVirtualAirline();

                expect(va).to.be.an('Object');
            }
        });
    });

});
