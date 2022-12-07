import { describe } from 'mocha';
import { expect } from 'chai';
import { getAircraftFlights } from './getAircraftFlights';
import { FlightsResponse } from '../types';

const {
    COMPANY_APIKEY,
    AIRCRAFT_ID,
} = process.env;

if (!COMPANY_APIKEY) throw new Error('No COMPANY_APIKEY provided');
if (!AIRCRAFT_ID) throw new Error('No AIRCRAFT_ID provided');

const ApiKey: string = COMPANY_APIKEY;
const AircraftId:string = AIRCRAFT_ID;

describe('getAircraftFlights', () => {
    it('should be a function', () => {
        expect(typeof getAircraftFlights).to.equal('function');
    });

    it('should return an array of flights for the given aircraftId', async () => {
        const flights:FlightsResponse = await getAircraftFlights(AircraftId, ApiKey);
        if (!flights || flights === null) throw new Error('No flights returned');

        expect(flights).to.be.an('array');
        expect(flights[0]).to.be.an('object');
    });

    it('should throw an error if the provided aircraftId is invalid', async () => {
        try {
            await getAircraftFlights('invalidAircraftId', ApiKey);
        } catch (e) {
            expect(e.message).to.equal('Invalid Aircraft Id provided');
        }
    });

    it('should throw an error if the provided apiKey is invalid', async () => {
        try {
            await getAircraftFlights(AircraftId, 'invalidApiKey');
        } catch (e) {
            expect(e.message).to.equal('Invalid Api Key provided');
        }
    });

});
