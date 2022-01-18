import { describe } from 'mocha';
import { expect } from 'chai';
import OnAirApi from '../app';
import { Airport } from '../types/Airport';

const ApiKey: string = process.env.COMPANY_APIKEY;
const CompanyId: string = process.env.COMPANY_ID;
const World: string = process.env.COMPANY_WORLD;


describe('getAirport()', function() {
    it('should return airport details for a given airport ICAO code', async function() {
        const Api: OnAirApi = new OnAirApi(ApiKey, CompanyId, World);
        const airportCode = 'KPHX';

        let actual: Airport = await Api.getAirport(airportCode);
        
        expect(actual.ICAO).equal(airportCode);
    });

    it('should throw an \'Airport Code not provided\' error if no airport ICAO code is given', async function() {
        const Api: OnAirApi = new OnAirApi(ApiKey, CompanyId, World);
        try {
            let actual: Airport = await Api.getAirport(null);
        } 
        catch(err) {
            expect(err.message).equal('Airport ICAO code not provided');
        }
    })
});