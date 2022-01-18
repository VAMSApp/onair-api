import { describe } from 'mocha';
import { expect } from 'chai';
import OnAirApi from '../app';
import { Flight } from '../types/Flight';

const ApiKey: string = process.env.COMPANY_APIKEY;
const CompanyId: string = process.env.COMPANY_ID;
const World: string = process.env.COMPANY_WORLD;


describe('getAircraftFlights()', function() {
    
    it('should return an array of flights for a given aircraft ID', async function() {
        const Api: OnAirApi = new OnAirApi(ApiKey, CompanyId, World);
        const aircraftId = '2dc2320f-27cc-4d19-8168-f2df3a105838';
        let actual: Flight[] = await Api.getAircraftFlights(aircraftId);

        expect(actual[0].AircraftId).equal(aircraftId);
    });

    it('should throw an \'Aircraft ID not provided\' error if no aircraftId is given', async function() {
        const Api: OnAirApi = new OnAirApi(ApiKey, CompanyId, World);
        try {
            let actual: Flight[] = await Api.getAircraftFlights(null);
        } 
        catch(err) {
            expect(err.message).equal('Aircraft ID not provided');
        }
    })
    
});