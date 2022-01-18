import { describe } from 'mocha';
import { expect } from 'chai';
import OnAirApi from '../app';
import { Company } from '../types/Company';

const ApiKey: string = process.env.COMPANY_APIKEY;
const CompanyId: string = process.env.COMPANY_ID;
const World: string = process.env.COMPANY_WORLD;


describe('getCompanyDetails()', function() {
    it('should return company details', async function() {        
        const Api: OnAirApi = new OnAirApi(ApiKey, CompanyId, World);

        let actual: Company = await Api.getCompanyDetails();

        expect(actual.Id).equal(CompanyId);
    });
});