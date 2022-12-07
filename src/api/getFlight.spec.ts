import { describe } from 'mocha';
import { expect } from 'chai';
import { getFlight } from './getFlight';
import { FlightResponse } from '../types';

const {
    COMPANY_APIKEY,
    FLIGHT_ID,
} = process.env;

if (!COMPANY_APIKEY) throw new Error('No COMPANY_APIKEY provided');
if (!FLIGHT_ID) throw new Error('No FLIGHT_ID provided');

const ApiKey: string = COMPANY_APIKEY;
const FlightId: string = FLIGHT_ID;

describe('getFlight', () => {
    it('should be a function', () => {
        expect(typeof getFlight).to.equal('function');
    });

    it('should return an object containing the Flight details for the given flightId', async () => {
        const flight:FlightResponse = await getFlight(FlightId, ApiKey);

        expect(flight).to.be.an('object');
        expect(flight).to.have.any.keys([
            'Id',
            'AircraftAddonId',
            'AircraftId',
            'CompanyId',
            'DepartureAirportId',
            'ArrivalIntendedAirportId',
            'ArrivalAlternateAirportId',
            'ArrivalActualAirportId',
            'Registered',
            'Category',
            'ResultComments',
            'StartTime',
            'EndTime',
            'EngineOnTime',
            'EngineOffTime',
            'AirborneTime',
            'LandedTime',
            'IntendedFlightLevel',
            'Passengers',
        ]);
    });

    it('should throw an error if the provided Flight ID is invalid', async () => {
        try {
            await getFlight('invalidFlightId', ApiKey);
        } catch (e) {
            expect(e.message).to.equal('Invalid Flight Id provided');
        }
    });

    it('should throw an error if the provided API Key is invalid', async () => {
        try {
            await getFlight(FlightId, 'invalidApiKey');
        } catch (e) {
            expect(e.message).to.equal('Invalid Api Key provided');
        }
    });
});
