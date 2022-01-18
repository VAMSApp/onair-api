import { describe } from 'mocha';
import { expect } from 'chai';
import OnAirApi from '../app';
import { Company } from '../types/Company';
import { Aircraft } from '../types/Aircraft';

const ApiKey: string = process.env.COMPANY_APIKEY;
const CompanyId: string = process.env.COMPANY_ID;
const World: string = process.env.COMPANY_WORLD;


describe('getCompanyFleet()', function() {
    it('should return matching company fleet details', async function() {        
        const Api: OnAirApi = new OnAirApi(ApiKey, CompanyId, World);

        let actual: Aircraft[] = await Api.getCompanyFleet();
        
        expect(actual).to.be.an('array');
        expect(actual[0]['CompanyId']).equal(CompanyId);
    })
});