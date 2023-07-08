import { describe } from 'mocha';
import { expect } from 'chai';
import { getAirport } from './getAirport';
import { AirportResponse } from '../types';

const {
    COMPANY_APIKEY,
} = process.env;

if (!COMPANY_APIKEY) throw new Error('No COMPANY_APIKEY provided');

const ApiKey: string = COMPANY_APIKEY;

describe('getAirport', () => {
    it('should be a function', () => {
        expect(typeof getAirport).to.equal('function');
    });

    it('should return a matching Airport for the given Airport ICAO', async () => {
        const airport:AirportResponse = await getAirport('KLOV', ApiKey);
        if (!airport || airport === null) throw new Error('No airport returned');

        expect(airport).to.be.an('object');
        expect(airport.Id).to.be.a('string');
    });

    it('should throw an error if the provided apiKey is invalid', async () => {
        try {
            await getAirport('KLOV', 'InvalidApiKey');
        } catch (e) {
            expect(e.message).to.equal('Invalid Api Key provided');
        }
    });

});
