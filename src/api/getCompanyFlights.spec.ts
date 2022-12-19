import { describe } from 'mocha';
import { expect } from 'chai';
import { getCompanyFlights } from './getCompanyFlights';
import { Flight } from '../types';

const {
    COMPANY_APIKEY,
    COMPANY_ID,
} = process.env;

if (!COMPANY_APIKEY) throw new Error('No COMPANY_APIKEY provided');
if (!COMPANY_ID) throw new Error('No COMPANY_ID provided');

const ApiKey: string = COMPANY_APIKEY;
const CompanyId: string = COMPANY_ID;

describe('getCompanyFlights', () => {
    it('should be a function', () => {
        expect(typeof getCompanyFlights).to.equal('function');
    });

    it('should return an array of Flights for the given companyId', async () => {
        const flights:Flight[] = await getCompanyFlights(CompanyId, ApiKey);

        expect(flights).to.be.an('array');

        if (flights.length > 0) {
            expect(flights[0]).to.have.any.keys([
                'Id',
                'AircraftAddonId',
                'AircraftId',
                'CompanyId',
                'DepartureAirportId',
                'ArrivalIntendedAirportId',
                'ArrivalAlternateAirportId',
            ])
        }

    });

    it('should throw an error if the provided Company ID is invalid', async () => {
        try {
            await getCompanyFlights('invalidCompanyId', ApiKey);
        } catch (e) {
            expect(e.message).to.equal('Invalid Company Id provided');
        }
    });

    it('should throw an error if the provided API Key is invalid', async () => {
        try {
            await getCompanyFlights(CompanyId, 'invalidApiKey');
        } catch (e) {
            expect(e.message).to.equal('Invalid Api Key provided');
        }
    });
});
