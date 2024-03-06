import { describe } from 'mocha';
import { expect } from 'chai';
import { getAircraftAtAirport } from './getAircraftAtAirport';
import { Aircraft } from '../types';

const {
    COMPANY_APIKEY,
} = process.env;

if (!COMPANY_APIKEY) throw new Error('No COMPANY_APIKEY provided');

const ApiKey: string = COMPANY_APIKEY;
const airportICAO = 'KPHX';

describe('getAircraftAtAirport', () => {
    it('should be a function', () => {
        expect(typeof getAircraftAtAirport).to.equal('function');
    });

    it('should return an array of aircraft at the airport for the given ICAO', async () => {
        const x:Aircraft[] = await getAircraftAtAirport(airportICAO, ApiKey);
        if (!x || x === null) throw new Error('No airport returned');

        expect(x).to.be.an('array');
    });

    it('should throw an error if the provided apiKey is invalid', async () => {
        try {
            await getAircraftAtAirport(airportICAO, 'InvalidApiKey');
        } catch (e) {
            expect(e.message).to.equal('Invalid Api Key provided');
        }
    });

});
