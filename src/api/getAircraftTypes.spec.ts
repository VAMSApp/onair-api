import { describe } from 'mocha';
import { expect } from 'chai';
import { getAircraftTypes } from './getAircraftTypes';
import { AircraftType } from '../types';

const {
    COMPANY_APIKEY,
    AIRCRAFT_TYPE_ID,
} = process.env;

if (!COMPANY_APIKEY) throw new Error('No COMPANY_APIKEY provided');
if (!AIRCRAFT_TYPE_ID) throw new Error('No AIRCRAFT_TYPE_ID provided');

const ApiKey: string = COMPANY_APIKEY;
const AircraftTypeId:string = AIRCRAFT_TYPE_ID;

describe('getAircraftTypes', () => {
    it('should be a function', () => {
        expect(typeof getAircraftTypes).to.equal('function');
    });

    it('should return the details of an Aircraft Type for the given aircraftTypeId', async () => {
        const aircraftTypes:AircraftType|AircraftType[]|null = await getAircraftTypes(AircraftTypeId, ApiKey);
        if (!aircraftTypes || aircraftTypes === null) throw new Error('No aircraftTypes returned');

        expect(aircraftTypes).to.be.an('Object');
    });

    it('should throw an error if the provided aircraftTypeId is invalid', async () => {
        try {
            await getAircraftTypes('invalidAircraftTypeId', ApiKey);
        } catch (e) {
            expect(e.message).to.equal('Invalid Aircraft Type Id provided');
        }
    });

    it('should throw an error if the provided apiKey is invalid', async () => {
        try {
            await getAircraftTypes(AircraftTypeId, 'invalidApiKey');
        } catch (e) {
            expect(e.message).to.equal('Invalid Api Key provided');
        }
    });

});
