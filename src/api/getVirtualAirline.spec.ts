import { describe } from 'mocha';
import { expect } from 'chai';
import { getVirtualAirline } from './getVirtualAirline';
import { VirtualAirlineResponse } from '../types';

const {
    COMPANY_APIKEY,
    VIRTUAL_AIRLINE_ID,
} = process.env;

if (!COMPANY_APIKEY) throw new Error('No COMPANY_APIKEY provided');
if (!VIRTUAL_AIRLINE_ID) throw new Error('No VIRTUAL_AIRLINE_ID provided');

const ApiKey: string = COMPANY_APIKEY;
const VaId: string = VIRTUAL_AIRLINE_ID;

describe('getVirtualAirline', () => {
    it('should be a function', () => {
        expect(typeof getVirtualAirline).to.equal('function');
    });

    it('should return an object containing the details for the given vaId', async () => {
        const va:VirtualAirlineResponse = await getVirtualAirline(VaId, ApiKey);

        expect(va).to.be.an('object');
        expect(va).to.have.any.keys([
            'InitalOwnerEquity',
            'PercentDividendsToDistribute',
            'LastDividendsDistribution',
            'ImageName',
            'ForceAssignJobsToPilots',
            'AutomaticallyAssignJobWhenTaken',
            'AutomaticallyAssignJobWhenLoaded',
            'RestrictEmployeesUsage',
            'RestrictLoadingVAJobsIntoNonVAAircraft',
            'RestrictLoadingNonVAJobsIntoVAAircraft',
            'MemberCount',
            'Id',
            'WorldId',
            'Name',
            'AirlineCode',
            'LastConnection',
            'LastReportDate',
            'Reputation',
            'CreationDate',
            'DifficultyLevel',
            'UTCOffsetinHours',
            'Paused',
            'Level',
            'LevelXP',
            'TransportEmployeeInstant',
            'TransportPlayerInstant',
            'ForceTimeInSimulator',
            'UseSmallAirports',
            'UseOnlyVanillaAirports',
            'EnableSkillTree',
            'CheckrideLevel',
            'EnableLandingPenalities',
            'EnableEmployeesFlightDutyAndSleep',
            'AircraftRentLevel',
            'EnableCargosAndChartersLoadingTime',
            'InSurvival',
            'PayBonusFactor',
            'EnableSimFailures',
            'DisableSeatsConfigCheck',
            'RealisticSimProcedures',
            'TravelTokens',
        ]);
    });

    it('should throw an error if the provided VA ID is invalid', async () => {
        try {
            await getVirtualAirline('invalidVaId', ApiKey);
        } catch (e) {
            expect(e.message).to.equal('Invalid VA Id provided');
        }
    });

    it('should throw an error if the provided API Key is invalid', async () => {
        try {
            await getVirtualAirline(VaId, 'invalidApiKey');
        } catch (e) {
            expect(e.message).to.equal('Invalid Api Key provided');
        }
    });
});
