import { describe } from 'mocha';
import { expect } from 'chai';
import OnAirApi from '../app';
import { Company } from '../types/Company';
import { Fbo } from '../types/Fbo';

const ApiKey: string = process.env.COMPANY_APIKEY;
const CompanyId: string = process.env.COMPANY_ID;
const World: string = process.env.COMPANY_WORLD;


describe('getCompanyFbos()', function() {
    it('should return matching company FBOs', async function() {
        const Api: OnAirApi = new OnAirApi(ApiKey, CompanyId, World);
        let actual: Fbo[] = await Api.getCompanyFbos();

        expect(actual[0]['CompanyId']).equal(CompanyId);
    });
});