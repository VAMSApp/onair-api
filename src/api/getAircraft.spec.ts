import { describe } from 'mocha';
import { expect } from 'chai';
import OnAirApi from '../app';
import { Aircraft } from '../types/Aircraft';

const ApiKey: string = process.env.COMPANY_APIKEY;
const CompanyId: string = process.env.COMPANY_ID;
const World: string = process.env.COMPANY_WORLD;


describe('getAircraft()', function() {

    it('should return details for a given aircraft ID', async function() {
        const Api: OnAirApi = new OnAirApi(ApiKey, CompanyId, World);
        const aircraftId = '2dc2320f-27cc-4d19-8168-f2df3a105838';
        let actual: Aircraft = await Api.getAircraft(aircraftId);
        
        expect(actual.Id).equal(aircraftId);
    });

    it('should throw an \'Aircraft ID not provided\' error if no aircraftId is given', async function() {
        const Api: OnAirApi = new OnAirApi(ApiKey, CompanyId, World);
        try {
            let actual: Aircraft = await Api.getAircraft(null);
        } 
        catch(err) {
            expect(err.message).equal('Aircraft ID not provided');
        }
    })

})