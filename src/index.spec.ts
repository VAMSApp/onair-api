import * as dotenv from 'dotenv';
dotenv.config();
import { describe } from 'mocha';
import { expect } from 'chai';
import OnAirApi from './index';
import {
    AircraftResponse,
    AirportResponse,
    BalanceSheetResponse,
    CashFlowResponse,
    CompanyResponse,
    EmployeesResponse,
    Fbo,
    FbosResponse,
    FleetResponse,
    FlightResponse,
    FlightsResponse,
    IncomeStatementResponse,
    JobsResponse,
    Member,
    Notification,
    EmployeeResponse,
    ShareHolder,
    VARole,
    VirtualAirlineResponse,
    WorkOrder,
} from './types';

const {
    COMPANY_APIKEY,
    COMPANY_ID,
    VIRTUAL_AIRLINE_ID,
} = process.env;

if (!COMPANY_APIKEY) throw new Error('No COMPANY_APIKEY provided');
if (!COMPANY_ID) throw new Error('No COMPANY_ID provided');
if (!VIRTUAL_AIRLINE_ID) throw new Error('No VIRTUAL_AIRLINE_ID provided');

const apiKey: string = COMPANY_APIKEY;
const companyId: string = COMPANY_ID;
const vaId: string = VIRTUAL_AIRLINE_ID;

describe('OnAirApi()', function() {
    it('when instantiated with valid data, it should return an OnAirApi object with the expected methods', async function() {
        if (apiKey !== undefined && companyId !== undefined) {
            try {
                const api: OnAirApi = new OnAirApi({ apiKey, companyId, vaId });
                expect(api).to.be.an('Object');
            } catch (e) {
                console.log(e);

            }

            // expect(api).to.have.keys([
            //     'isValidGuid',
            //     'getCompany',
            //     'getCompanyFleet',
            //     'getCompanyFbos',
            //     'getCompanyFlights',
            //     'getCompanyJobs',
            //     'getCompanyEmployees',
            //     'getCompanyCashFlow',
            //     'getCompanyIncomeStatement',
            //     'getCompanyBalanceSheet',
            //     'getCompanyMissionFlightTracks',
            //     'getCompanyWorkOrders',
            //     'getAircraft',
            //     'getAircraftFlights',
            //     'getAirport',
            //     'getFlight',
            //     'getVirtualAirline',
            //     'getVirtualAirlineMembers',
            //     'getVirtualAirlineShareHolders',
            //     'getVirtualAirlineRoles',
            //     'getVirtualAirlineFlights',
            //     'getVirtualAirlineFleet',
            //     'getVirtualAirlineJobs',
            //     'getVirtualAirlineFbos',
            //     'getVirtualAirlineNotifications',
            //     'getEmployee',
            // ])
        }
    });
});
