import { describe } from 'mocha';
import { expect } from 'chai';
import OnAirApi from '../app';
import { Company } from '../types/Company';
import { Flight } from '../types/Flight';

const ApiKey: string = process.env.COMPANY_APIKEY;
const CompanyId: string = process.env.COMPANY_ID;
const World: string = process.env.COMPANY_WORLD;


describe('getCompanyFlights()', function() {
    
    /**
     * skipping this test as the API endpoint is
     * currently returning an empty array for all
     * flights for any given companyId.
     * Until that is resolved, this will be skipped
     */
    it.skip('should return matching company Flights', async function() {
        const Api: OnAirApi = new OnAirApi(ApiKey, CompanyId, World);
        let actual: Flight[] = await Api.getCompanyFlights();
        console.log(actual);
        expect(actual[0]['CompanyId']).equal(CompanyId);
    });
});