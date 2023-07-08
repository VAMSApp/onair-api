import { describe } from 'mocha';
import { expect } from 'chai';
import { getCompanyWorkOrders } from './getCompanyWorkOrders';
import { WorkOrder } from '../types';

const {
    COMPANY_APIKEY,
    COMPANY_ID,
} = process.env;

if (!COMPANY_APIKEY) throw new Error('No COMPANY_APIKEY provided');
if (!COMPANY_ID) throw new Error('No COMPANY_ID provided');

const ApiKey: string = COMPANY_APIKEY;
const CompanyId: string = COMPANY_ID;

describe('getCompanyWorkOrders', () => {
    it('should be a function', () => {
        expect(typeof getCompanyWorkOrders).to.equal('function');
    });

    it('should return an array of WorkOrders for the given companyId', async () => {
        const workOrders:WorkOrder[] = await getCompanyWorkOrders(CompanyId, ApiKey);

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
        }
    });

    it('should throw an error if the provided Company ID is invalid', async () => {
        try {
            await getCompanyWorkOrders('invalidCompanyId', ApiKey);
        } catch (e) {
            expect(e.message).to.equal('Invalid Company Id provided');
        }
    });

    it('should throw an error if the provided API Key is invalid', async () => {
        try {
            await getCompanyWorkOrders(CompanyId, 'invalidApiKey');
        } catch (e) {
            expect(e.message).to.equal('Invalid Api Key provided');
        }
    });
});
