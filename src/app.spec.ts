import { describe } from 'mocha';
import { expect } from 'chai';
import OnAirApi from './app';
import { Company } from './types/Company';

const ApiKey: string = process.env.COMPANY_APIKEY;
const CompanyId: string = process.env.COMPANY_ID;
const World: string = process.env.COMPANY_WORLD;


describe('OnAirApi()', function() {
    it('when instantiated with valid data, it should return an OnAirApi object', async function() {
        const Api: OnAirApi = new OnAirApi(ApiKey, CompanyId, World);
        expect(Api).to.be.an('Object');
    });
    
    it('when instantiated with invalid data, it should throw an error');

    it('getCompanyDetails() should return company details', async function() {        
        const Api: OnAirApi = new OnAirApi(ApiKey, CompanyId, World);

        let actual = await Api.getCompanyDetails();

        expect(actual.Id).equal(CompanyId);
    })

    it('getCompanyFleet() should return matching company details', async function() {        
        const Api: OnAirApi = new OnAirApi(ApiKey, CompanyId, World);

        let actual = await Api.getCompanyFleet();
        // console.log(actual);
        expect(actual).to.be.an('array');
        expect(actual[0]['CompanyId']).equal(CompanyId);
        // expect(actual.Id).equal(CompanyId);
        // expect(true);
    })
})