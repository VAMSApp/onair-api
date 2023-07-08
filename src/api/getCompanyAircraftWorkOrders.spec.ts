import { describe } from 'mocha';
import { expect } from 'chai';
import { getCompanyAircraftWorkOrders } from './getCompanyAircraftWorkOrders';
import { WorkOrder } from '../types';

const {
    COMPANY_APIKEY,
    COMPANY_ID,
    AIRCRAFT_ID,
} = process.env;

if (!COMPANY_APIKEY) throw new Error('No COMPANY_APIKEY provided');
if (!COMPANY_ID) throw new Error('No COMPANY_ID provided');
if (!AIRCRAFT_ID) throw new Error('No AIRCRAFT_ID provided');

const ApiKey: string = COMPANY_APIKEY;
const CompanyId: string = COMPANY_ID;
const AircraftId: string = AIRCRAFT_ID;

describe('getCompanyAircraftWorkOrders', () => {
    it('should be a function', () => {
        expect(typeof getCompanyAircraftWorkOrders).to.equal('function');
    });

    it('should return an array of WorkOrders for the given companyId', async () => {
        const workOrders:WorkOrder[] = await getCompanyAircraftWorkOrders(CompanyId, AircraftId, ApiKey);

        expect(workOrders).to.be.an('array');

        if (workOrders.length > 0) {
            expect(workOrders[0]).to.have.any.keys([
                'Id',
                'AircraftId',
                'CompanyId',
                'StartDate',
                'Name',
                'Crews',
                'DepartureAirportId',
                'Status',
            ]);

            expect(workOrders[0].AircraftId).to.equal(AircraftId);
            expect(workOrders[0].CompanyId).to.equal(CompanyId);
        }
    });

    it('should throw an error if the provided Company ID is invalid', async () => {
        try {
            await getCompanyAircraftWorkOrders('invalidCompanyId', AircraftId, ApiKey);
        } catch (e) {
            expect(e.message).to.equal('Invalid Company ID format provided');
        }
    });

    it('should throw an error if the provided Aircraft ID is invalid', async () => {
        try {
            await getCompanyAircraftWorkOrders(CompanyId, 'invalidAircraftId', ApiKey);
        } catch (e) {
            expect(e.message).to.equal('Invalid Aircraft ID format provided');
        }
    });

    it('should throw an error if the provided API Key is invalid', async () => {
        try {
            await getCompanyAircraftWorkOrders(CompanyId, AircraftId, 'invalidApiKey');
        } catch (e) {
            expect(e.message).to.equal('Invalid Api Key format provided');
        }
    });
});
