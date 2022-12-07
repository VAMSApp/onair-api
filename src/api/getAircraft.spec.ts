import { describe } from 'mocha';
import { expect } from 'chai';
import { getAircraft } from './getAircraft';
import { AircraftResponse } from '../types';

const {
    COMPANY_APIKEY,
    AIRCRAFT_ID,
} = process.env;

if (!COMPANY_APIKEY) throw new Error('No COMPANY_APIKEY provided');
if (!AIRCRAFT_ID) throw new Error('No AIRCRAFT_ID provided');

const ApiKey: string = COMPANY_APIKEY;
const AircraftId:string = AIRCRAFT_ID;

describe('getAircraft', () => {
    it('should be a function', () => {
        expect(typeof getAircraft).to.equal('function');
    });

    it('should return a matching aircraft for the given AircraftId', async () => {
        const aircraft:AircraftResponse = await getAircraft(AircraftId, ApiKey);
        if (!aircraft || aircraft === null) throw new Error('No aircraft returned');

        expect(aircraft).to.be.an('object');
        expect(aircraft.Id).to.be.a('string');
        expect(aircraft.Id).to.equal(AircraftId);
    });

    it('should throw an error if the provided aircraftId is invalid', async () => {
        try {
            await getAircraft('invalidAircraftId', ApiKey);
        } catch (e) {
            expect(e.message).to.equal('Invalid Aircraft Id provided');
        }
    });

    it('should throw an error if the provided apiKey is invalid', async () => {
        try {
            await getAircraft(AircraftId, 'invalidApiKey');
        } catch (e) {
            expect(e.message).to.equal('Invalid Api Key provided');
        }
    });
});
