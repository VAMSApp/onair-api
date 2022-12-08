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
    FboResponse,
    FbosResponse,
    FleetResponse,
    FlightResponse,
    FlightsResponse,
    IncomeStatementResponse,
    JobResponse,
    JobsResponse,
    MemberResponse,
    MembersResponse,
    NotificationResponse,
    NotificationsResponse,
    EmployeeResponse,
    ShareHolder,
    VARoleResponse,
    VARolesResponse,
    VirtualAirlineResponse,
    WorkOrderResponse,
    WorkOrdersResponse,
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
    it('when instantiated with valid data, it should return an OnAirApi object with the expected properties', async function() {
        if (apiKey !== undefined && companyId !== undefined) {
            try {
                const api: OnAirApi = new OnAirApi({ apiKey, companyId, vaId });
                expect(api).to.be.an('Object');
                expect(api).to.have.keys([
                    'ApiKey',
                    'CompanyId',
                    'VaId',
                    'getAircraft',
                    'getAircraftFlights',
                    'getAirport',
                    'getCompany',
                    'getCompanyBalanceSheet',
                    'getCompanyCashFlow',
                    'getCompanyEmployees',
                    'getCompanyFbos',
                    'getCompanyFleet',
                    'getCompanyFlights',
                    'getCompanyIncomeStatement',
                    'getCompanyJobs',
                    'getCompanyMissionFlightTracks',
                    'getCompanyWorkOrders',
                    'getCompanyNotifications',
                    'getEmployee',
                    'getFlight',
                    'getVirtualAirline',
                    'getVirtualAirlineFbos',
                    'getVirtualAirlineFleet',
                    'getVirtualAirlineFlights',
                    'getVirtualAirlineIncomeStatement',
                    'getVirtualAirlineJobs',
                    'getVirtualAirlineMembers',
                    'getVirtualAirlineNotifications',
                    'getVirtualAirlineRoles',
                    'getVirtualAirlineShareHolders',
                    'isValidGuid',
                ])
            } catch (e) {
                console.log(e);

            }
        }
    });

    it('when instantiated with invalid data, it should throw an error', async function() {
        try {
            const api: OnAirApi = new OnAirApi({ apiKey: '', companyId: '', vaId: '' });
        } catch (e) {
            expect(e).to.be.an('Error');
        }
    });


});
