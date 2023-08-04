import { describe } from 'mocha';
import { expect } from 'chai';
import { getVirtualAirlineFlights } from './getVirtualAirlineFlights';
import { Flight, } from '../types';

const {
    COMPANY_APIKEY,
    VIRTUAL_AIRLINE_ID,
} = process.env;

if (!COMPANY_APIKEY) throw new Error('No COMPANY_APIKEY provided');
if (!VIRTUAL_AIRLINE_ID) throw new Error('No VIRTUAL_AIRLINE_ID provided');

const ApiKey: string = COMPANY_APIKEY;
const VaId: string = VIRTUAL_AIRLINE_ID;

describe('getVirtualAirlineFlights', () => {
    it('should be a function', () => {
        expect(typeof getVirtualAirlineFlights).to.equal('function');
    });

    it('should return an array of completed Flight\'s by the given vaId', async () => {
        const x:Flight[] = await getVirtualAirlineFlights(VaId, ApiKey);

        expect(x).to.be.an('array');
        if (x.length > 0) {
            expect(x[0].Id).to.be.a('string');
        }
    });

    it('should return an array with one Flight by the given vaId', async () => {
        const x:Flight[] = await getVirtualAirlineFlights(VaId, ApiKey, undefined, 1);

        expect(x).to.be.an('array');
        if (x.length > 0) {
            expect(x[0].Id).to.be.a('string');
        }

        expect(x.length).to.equal(1);
    });

    it('should return an array of Flight\'s by the given vaId and page', async () => {
        const x:Flight[] = await getVirtualAirlineFlights(VaId, ApiKey, 2);

        expect(x).to.be.an('array');
        if (x.length > 0) {
            expect(x[0].Id).to.be.a('string');
        }

    });
    
    it('should throw an error if the provided VA ID is invalid', async () => {
        try {
            await getVirtualAirlineFlights('invalidVaId', ApiKey);
        } catch (e) {
            expect(e.message).to.equal('Invalid VA Id provided');
        }
    });

    it('should throw an error if the provided API Key is invalid', async () => {
        try {
            await getVirtualAirlineFlights(VaId, 'invalidApiKey');
        } catch (e) {
            expect(e.message).to.equal('Invalid Api Key provided');
        }
    });
});
