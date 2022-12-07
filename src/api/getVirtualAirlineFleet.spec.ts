import { describe } from 'mocha';
import { expect } from 'chai';
import { getVirtualAirlineFleet } from './getVirtualAirlineFleet';
import { FleetResponse, } from '../types';

const {
    COMPANY_APIKEY,
    VIRTUAL_AIRLINE_ID,
} = process.env;

if (!COMPANY_APIKEY) throw new Error('No COMPANY_APIKEY provided');
if (!VIRTUAL_AIRLINE_ID) throw new Error('No VIRTUAL_AIRLINE_ID provided');

const ApiKey: string = COMPANY_APIKEY;
const VaId: string = VIRTUAL_AIRLINE_ID;

describe('getVirtualAirlineFleet', () => {
    it('should be a function', () => {
        expect(typeof getVirtualAirlineFleet).to.equal('function');
    });

    it('should return an array of Aircraft\'s that are owned by the given vaId', async () => {
        const x:FleetResponse = await getVirtualAirlineFleet(VaId, ApiKey);

        expect(x).to.be.an('array');
        if (x.length > 0) {
            expect(x[0].Id).to.be.a('string');
        }
    });

    it('should throw an error if the provided VA ID is invalid', async () => {
        try {
            await getVirtualAirlineFleet('invalidVaId', ApiKey);
        } catch (e) {
            expect(e.message).to.equal('Invalid VA Id provided');
        }
    });

    it('should throw an error if the provided API Key is invalid', async () => {
        try {
            await getVirtualAirlineFleet(VaId, 'invalidApiKey');
        } catch (e) {
            expect(e.message).to.equal('Invalid Api Key provided');
        }
    });
});
