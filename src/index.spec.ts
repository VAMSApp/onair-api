import { describe } from 'mocha';
import { expect } from 'chai';
import OnAirApi from './index';
import {
    Aircraft,
    Airport,
    BalanceSheet,
    CashFlow,
    Company,
    Fbo,
    Flight,
    IncomeStatement,
    Job,
    Member,
    Notification,
    People,
    ShareHolder,
    VARole,
    VirtualAirline,
    WorkOrder,
} from './types';

const apiKey: string | undefined = process.env.COMPANY_APIKEY;
const companyId: string | undefined = process.env.COMPANY_ID;
const vaId: string | undefined = process.env.VIRTUAL_AIRLINE_ID;

describe('OnAirApi()', function() {
    it('when instantiated with valid data, it should return an OnAirApi object', async function() {
        if (apiKey !== undefined && companyId !== undefined) {
            const api: OnAirApi = new OnAirApi({ apiKey, companyId, vaId });

            expect(api).to.be.an('Object');
        }
    });

    describe('getAircraft()', function () {
        it('when getAircraft() is queried with valid data, it should return a Aircraft object', async function() {
            if (apiKey !== undefined && companyId !== undefined) {
                const api: OnAirApi = new OnAirApi({ apiKey, companyId, vaId });
                const aircraftId = 'd8a921a5-4774-4530-b75e-14b41545cabc';

                const aircraft: Aircraft = await api.getAircraft(aircraftId);

                expect(aircraft).to.be.an('Object');
                expect(aircraft.Id).to.equal(aircraftId);
            }
        });
    });

    describe('getAircraftFlights()', function () {
        it('when getAircraftFlights() is queried with valid data, it should return an Aircrafts flights array', async function() {
            if (apiKey !== undefined && companyId !== undefined) {
                const api: OnAirApi = new OnAirApi({ apiKey, companyId, vaId });
                const aircraftId = 'd8a921a5-4774-4530-b75e-14b41545cabc';

                const flights: Flight[] = await api.getAircraftFlights(aircraftId);

                expect(flights).to.be.an('Array');
                expect(flights[0].AircraftId).to.equal(aircraftId);
            }
        });
    });

    describe('getAirport()', function() {
        it('when getAirport() is queried with valid data, it should return a valid Airport object', async function() {
            if (apiKey !== undefined && companyId !== undefined) {
                const api: OnAirApi = new OnAirApi({ apiKey, companyId, vaId });
                const airportCode = 'KLAX';

                const airport: Airport = await api.getAirport(airportCode);

                expect(airport).to.be.an('Object');
                expect(airport.ICAO).to.equal(airportCode);
            }
        });
    });

    describe('getCompanyFbos()', function() {
        it('when getCompanyFbos() is queried with valid data, it should return an Array of Fbo Objects', async function() {
            if (apiKey !== undefined && companyId !== undefined) {
                const api: OnAirApi = new OnAirApi({ apiKey, companyId, vaId });

                const fbos: Fbo[] = await api.getCompanyFbos();

                expect(fbos).to.be.an('Array');
            }
        });
    });

    describe('getCompanyFleet()', function() {
        it('when getCompanyFleet() is queried with valid data, it should return an Array of Aircraft Objects', async function() {
            if (apiKey !== undefined && companyId !== undefined) {
                const api: OnAirApi = new OnAirApi({ apiKey, companyId, vaId });

                const aircraft: Aircraft[] = await api.getCompanyFleet();

                expect(aircraft).to.be.an('Array');
            }
        });
    });

    describe('getCompanyFlights()', function() {
        it('when getCompanyFlights() is queried with valid data, it should return an Array of Flight objects', async function() {
            if (apiKey !== undefined && companyId !== undefined) {
                const api: OnAirApi = new OnAirApi({ apiKey, companyId, vaId });

                const flights: Flight[] = await api.getCompanyFlights();

                expect(flights).to.be.an('Array');
            }
        });
    });

    describe('getCompanyJobs()', function() {
        it('when getCompanyJobs() is queried with valid data, it should return an Array of pending Jobs', async function() {
            if (apiKey !== undefined && companyId !== undefined) {
                const api: OnAirApi = new OnAirApi({ apiKey, companyId, vaId });

                const jobs: Job[] = await api.getCompanyJobs();

                expect(jobs).to.be.an('Array');
            }
        });

        it('when getCompanyJobs() is queried with valid data, passing the companyId as the first argument and true as the second argument, it should return an Array of completed Jobs for the provided companyId', async function() {
            if (apiKey !== undefined && companyId !== undefined) {
                const api: OnAirApi = new OnAirApi({ apiKey, companyId, vaId });

                const jobs: Job[] = await api.getCompanyJobs(companyId, true);

                expect(jobs).to.be.an('Array');
            }
        });
    });

    describe('getCompanyEmployees()', function() {
        it('when getCompanyEmployees() is queried with valid data, it should return an Array of pending Jobs', async function() {
            if (apiKey !== undefined && companyId !== undefined) {
                const api: OnAirApi = new OnAirApi({ apiKey, companyId, vaId });

                const employees: People[] = await api.getCompanyEmployees();

                expect(employees).to.be.an('Array');
            }
        });
    });

    describe('getCompanyCashFlow()', function() {
        it('when getCompanyCashFlow() is queried with valid data, it should return an object of the companie\'s cash flow.', async function() {
            if (apiKey !== undefined && companyId !== undefined) {
                const api: OnAirApi = new OnAirApi({ apiKey, companyId, vaId });

                const cashflow: CashFlow = await api.getCompanyCashFlow();

                expect(cashflow).to.be.an('Object');
            }
        });
    });

    describe('getCompanyIncomeStatement()', function() {
        it('when queried providing a startDate and endDate, it should return an object of the company\'s income statement.', async function() {
            if (apiKey !== undefined && companyId !== undefined) {
                const api: OnAirApi = new OnAirApi({ apiKey, companyId, vaId });

                const currentDate = new Date();
                const currentDateStr = currentDate.toISOString();
                const priorDate = new Date().setDate(currentDate.getDate() - 30);

                const priorDateStr = new Date(priorDate).toISOString();

                const incomestatement: IncomeStatement = await api.getCompanyIncomeStatement(priorDateStr, currentDateStr);

                expect(incomestatement).to.be.an('Object');
            }
        });

        it('when queried without providing a startDate or an endDate, it should return an object of the company\'s current income statement within the last 30 days.', async function () {
            if (apiKey !== undefined && companyId !== undefined) {
                const api: OnAirApi = new OnAirApi({ apiKey, companyId, vaId });

                const incomestatement: IncomeStatement = await api.getCompanyIncomeStatement();

                expect(incomestatement).to.be.an('Object');
            }
        });
    });

    describe('getCompanyBalanceSheet()', function() {
        it('when getCompanyBalanceSheet() is queried with valid data, it should return an object of the company\'s current balance sheet.', async function() {
            if (apiKey !== undefined && companyId !== undefined) {
                const api: OnAirApi = new OnAirApi({ apiKey, companyId, vaId });

                const balancesheet: BalanceSheet = await api.getCompanyBalanceSheet();

                expect(balancesheet).to.be.an('Object');
            }
        });
    });

    describe('getCompanyWorkOrders()', function() {
        it('when getCompanyWorkOrders() is queried with valid data, it should return an object of the work orders.', async function() {
            if (apiKey !== undefined && companyId !== undefined) {
                const api: OnAirApi = new OnAirApi({ apiKey, companyId, vaId });

                const companyWorkOrders: WorkOrder[] = await api.getCompanyWorkOrders();

                expect(companyWorkOrders).to.be.an('Array');
            }
        });
    });

    describe('getCompany()', function() {
        it('when getCompany() is queried with valid data, it should return a Company Object', async function() {
            if (apiKey !== undefined && companyId !== undefined) {
                const api: OnAirApi = new OnAirApi({ apiKey, companyId, vaId });

                const company: Company = await api.getCompany();

                expect(company).to.be.an('Object');
            }
        });
    });

    describe('getFlight()', function() {
        it('when getFlight() is queried with valid data, it should return a Flight Object', async function() {
            if (apiKey !== undefined && companyId !== undefined) {
                const api: OnAirApi = new OnAirApi({ apiKey, companyId, vaId });
                const flightId = 'f0017707-825d-497f-b820-0404bb40132c';

                const flight: Flight = await api.getFlight(flightId);

                expect(flight).to.be.an('Object');
                expect(flight.Id).to.equal(flightId);
            }
        });
    });

    describe('getVirtualAirlineMembers()', function() {
        it('when getVirtualAirlineMembers() is queried with valid data, it should return an Array of Members in a VirtualAirline', async function() {
            if (apiKey !== undefined && companyId !== undefined) {
                const api: OnAirApi = new OnAirApi({ apiKey, companyId, vaId });

                const members: Member[] = await api.getVirtualAirlineMembers();

                expect(members).to.be.an('Array');
            }
        });
    });

    describe('getVirtualAirline()', function() {
        it('when getVirtualAirline() is queried with valid data, it should return a VirtualAirline Object', async function() {
            if (apiKey !== undefined && companyId !== undefined) {
                const api: OnAirApi = new OnAirApi({ apiKey, companyId, vaId });

                const va: VirtualAirline = await api.getVirtualAirline();

                expect(va).to.be.an('Object');
            }
        });
    });

    describe('getVirtualAirlineShareHolders()', function() {
        it('when getVirtualAirlineShareHolders() is queried with valid data, it should return a ShareHolder Array', async function() {
            if (apiKey !== undefined && companyId !== undefined) {
                const api: OnAirApi = new OnAirApi({ apiKey, companyId, vaId });

                const shareholders: ShareHolder[] = await api.getVirtualAirlineShareHolders();

                expect(shareholders).to.be.an('Array');
            }
        });
    });

    describe('getVirtualAirlineRoles()', function() {
        it('when getVirtualAirlineRoles() is queried with valid data, it should return a Role Array', async function() {
            if (apiKey !== undefined && companyId !== undefined) {
                const api: OnAirApi = new OnAirApi({ apiKey, companyId, vaId });

                const varoles: VARole[] = await api.getVirtualAirlineRoles();

                expect(varoles).to.be.an('Array');
            }
        });
    });

    describe('getVirtualAirlineFlights()', function() {
        it('when getVirtualAirlineFlights() is queried with valid data, it should return a Flights Array', async function() {
            if (apiKey !== undefined && companyId !== undefined) {
                const api: OnAirApi = new OnAirApi({ apiKey, companyId, vaId });

                const vaflights: Flight[] = await api.getVirtualAirlineFlights();

                expect(vaflights).to.be.an('Array');
                expect(vaflights.length).to.be.above(2);
            }
        });
    });

    describe('getVirtualAirlineJobs()', function() {
        it('when getVirtualAirlineJobs() is queried with valid data, it should return a Job Array', async function() {
            if (apiKey !== undefined && companyId !== undefined) {
                const api: OnAirApi = new OnAirApi({ apiKey, companyId, vaId });

                const vaJobs: Job[] = await api.getVirtualAirlineJobs();

                expect(vaJobs).to.be.an('Array');
                expect(vaJobs.length).to.be.above(2);
            }
        });
    });

    describe('getVirtualAirlineFbos()', function() {
        it('when getVirtualAirlineFbos() is queried with valid data, it should return an Array of Fbo Objects', async function() {
            if (apiKey !== undefined && companyId !== undefined && vaId !== undefined) {
                const api: OnAirApi = new OnAirApi({ apiKey, companyId, vaId });

                const fbos: Fbo[] = await api.getVirtualAirlineFbos();

                expect(fbos).to.be.an('Array');
            }
        });
    });

    describe('getVirtualAirlineNotifications()', function() {
        it('when getVirtualAirlineNotifications() is queried with valid data, it should return an Array of Notification Objects', async function() {
            if (apiKey !== undefined && companyId !== undefined && vaId !== undefined) {
                const api: OnAirApi = new OnAirApi({ apiKey, companyId, vaId });

                const notifications: Notification[] = await api.getVirtualAirlineNotifications();

                expect(notifications).to.be.an('Array')
                expect(notifications[0]).to.be.an('Object').that.has.all.keys(
                    'Id',
                    'PeopleId',
                    'CompanyId',
                    'IsRead',
                    'IsNotification',
                    'ZuluEventTime',
                    'Category',
                    'Action',
                    'Description',
                    'Amount',
                    'AccountId',
                );
            }
        });
    });

    describe('getEmployee()', function () {
        it('when getEmployee() is queried with valid data, it should return an employees details within a People object', async function() {
            if (apiKey !== undefined && companyId !== undefined) {
                const api: OnAirApi = new OnAirApi({ apiKey, companyId, vaId });
                const personId = '596b6c2e-4ac7-44e9-b1d4-a4299030cb04';

                const employee: People = await api.getEmployee(personId);

                expect(employee).to.be.an('Object');
                expect(employee.Id).to.equal(personId);
            }
        });
    });
});
