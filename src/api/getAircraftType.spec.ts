import { describe } from 'mocha';
import { expect } from 'chai';
import { getAircraftType } from './getAircraftType';
import { AircraftTypeResponse } from '../types';

const {
    COMPANY_APIKEY,
    AIRCRAFT_TYPE_ID,
} = process.env;

if (!COMPANY_APIKEY) throw new Error('No COMPANY_APIKEY provided');
if (!AIRCRAFT_TYPE_ID) throw new Error('No AIRCRAFT_TYPE_ID provided');

const ApiKey: string = COMPANY_APIKEY;
const AircraftTypeId:string = AIRCRAFT_TYPE_ID;

describe.only('getAircraftType', () => {
    it('should be a function', () => {
        expect(typeof getAircraftType).to.equal('function');
    });

    it('should return a matching aircraft for the given AircraftId', async () => {
        const x:AircraftTypeResponse = await getAircraftType(AircraftTypeId, ApiKey);
        if (!x || x === null) throw new Error('No aircraft type returned');

        expect(x).to.be.an('object');
        expect(x.Id).to.be.a('string');
    });

    it('should throw an error if the provided aircraftId is invalid', async () => {
        try {
            await getAircraftType('invalidAircraftId', ApiKey);
        } catch (e) {
            expect(e.message).to.equal('Invalid Aircraft Id provided');
        }
    });

    it('should throw an error if the provided apiKey is invalid', async () => {
        try {
            await getAircraftType(AircraftTypeId, 'invalidApiKey');
        } catch (e) {
            expect(e.message).to.equal('Invalid Api Key provided');
        }
    });
});
