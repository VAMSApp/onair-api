import { describe } from 'mocha';
import { expect } from 'chai';
import { getVirtualAirlineWorkOrders } from './getVirtualAirlineWorkOrders';
import { WorkOrder } from '../types';

const {
    COMPANY_APIKEY,
    VIRTUAL_AIRLINE_ID,
} = process.env;

if (!COMPANY_APIKEY) throw new Error('No COMPANY_APIKEY provided');
if (!VIRTUAL_AIRLINE_ID) throw new Error('No VIRTUAL_AIRLINE_ID provided');

const ApiKey: string = COMPANY_APIKEY;
const VirtualAirlineId: string = VIRTUAL_AIRLINE_ID;

describe('getVirtualAirlineWorkOrders', () => {
    it('should be a function', () => {
        expect(typeof getVirtualAirlineWorkOrders).to.equal('function');
    });

    it('should return an array of WorkOrders for the given virtualAirlineId', async () => {
        const workOrders:WorkOrder[] = await getVirtualAirlineWorkOrders(VirtualAirlineId, ApiKey);

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

    it('should throw an error if the provided Virtual Airline ID is invalid', async () => {
        try {
            await getVirtualAirlineWorkOrders('invalidVirtualAirlineId', ApiKey);
        } catch (e) {
            expect(e.message).to.equal('Invalid Virtual Airline Id provided');
        }
    });

    it('should throw an error if the provided API Key is invalid', async () => {
        try {
            await getVirtualAirlineWorkOrders(VirtualAirlineId, 'invalidApiKey');
        } catch (e) {
            expect(e.message).to.equal('Invalid Api Key provided');
        }
    });
});
