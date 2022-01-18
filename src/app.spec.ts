import { describe } from 'mocha';
import { expect } from 'chai';
import OnAirApi from './app';

const ApiKey: string = process.env.COMPANY_APIKEY;
const CompanyId: string = process.env.COMPANY_ID;
const World: string = process.env.COMPANY_WORLD;


describe('OnAirApi()', function() {
    it('when instantiated with valid data, it should return an OnAirApi object', async function() {
        const Api: OnAirApi = new OnAirApi(ApiKey, CompanyId, World);
        expect(Api).to.be.an('Object');
    });
    
    it('when instantiated with no ApiKey, it should throw an error', async function() {
        try {
            const Api: OnAirApi = new OnAirApi(undefined, CompanyId, World);
        }
        catch(error: any) {
            expect(error.message).equal('No API Key provided');
        }

    });

    it('when instantiated with no CompanyID, it should throw an error', async function() {
        try {
            const Api: OnAirApi = new OnAirApi(ApiKey, null, World);
        }
        catch(error: any) {
            expect(error.message).equal('No Company ID provided');
        }

    });

    it('when instantiated with no World, it should throw an error', async function() {
        try {
            const Api: OnAirApi = new OnAirApi(ApiKey, CompanyId, undefined);
        }
        catch(error: any) {
            expect(error.message).equal('No World provided');
        }

    });

})