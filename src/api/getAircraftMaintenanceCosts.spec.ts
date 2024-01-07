import { describe } from 'mocha';
import { expect } from 'chai';
import { getAircraftMaintenanceCosts } from './getAircraftMaintenanceCosts';
import { MaintenanceCost } from '../types';

const {
    COMPANY_APIKEY,
    AIRCRAFT_ID,
} = process.env;

if (!COMPANY_APIKEY) throw new Error('No COMPANY_APIKEY provided');
if (!AIRCRAFT_ID) throw new Error('No AIRCRAFT_ID provided');

const ApiKey: string = COMPANY_APIKEY;
const AircraftId:string = AIRCRAFT_ID;

describe('getAircraftMaintenanceCosts', () => {
    it('should be a function', () => {
        expect(typeof getAircraftMaintenanceCosts).to.equal('function');
    });

    it('should return an object of costs for the given AircraftId', async () => {
        const x:MaintenanceCost|null = await getAircraftMaintenanceCosts(AircraftId, ApiKey);
        if (!x || x === null) throw new Error('No x returned');

        expect(x).to.be.an('object');
    });

    it('should throw an error if the provided aircraftId is invalid', async () => {
        try {
            await getAircraftMaintenanceCosts('invalidAircraftId', ApiKey);
        } catch (e) {
            expect(e.message).to.equal('Invalid Aircraft Id provided');
        }
    });

    it('should throw an error if the provided apiKey is invalid', async () => {
        try {
            await getAircraftMaintenanceCosts(AircraftId, 'invalidApiKey');
        } catch (e) {
            expect(e.message).to.equal('Invalid Api Key provided');
        }
    });
});
