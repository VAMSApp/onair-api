import { describe } from 'mocha';
import { expect } from 'chai';
import { getAircraftEconomicDetails } from './getAircraftEconomicDetails';
import { EconomicDetailResponse } from '../types';

const {
    COMPANY_APIKEY,
    AIRCRAFT_ID,
} = process.env;

if (!COMPANY_APIKEY) throw new Error('No COMPANY_APIKEY provided');
if (!AIRCRAFT_ID) throw new Error('No AIRCRAFT_ID provided');

const ApiKey: string = COMPANY_APIKEY;
const AircraftId:string = AIRCRAFT_ID;

describe('getAircraftEconomicDetails', () => {
    it('should be a function', () => {
        expect(typeof getAircraftEconomicDetails).to.equal('function');
    });

    it('should return an object of costs for the given AircraftId', async () => {
        const x:EconomicDetailResponse = await getAircraftEconomicDetails(AircraftId, ApiKey);
        if (!x || x === null) throw new Error('No x returned');

        expect(x).to.be.an('object');
    });

    it('should throw an error if the provided aircraftId is invalid', async () => {
        try {
            await getAircraftEconomicDetails('invalidAircraftId', ApiKey);
        } catch (e) {
            expect(e.message).to.equal('Invalid Aircraft Id provided');
        }
    });

    it('should throw an error if the provided apiKey is invalid', async () => {
        try {
            await getAircraftEconomicDetails(AircraftId, 'invalidApiKey');
        } catch (e) {
            expect(e.message).to.equal('Invalid Api Key provided');
        }
    });
});
