import { describe } from 'mocha';
import { expect } from 'chai';
import { getCompanyMissionFlightTracks } from './getCompanyMissionFlightTracks';
import { FlightTrack } from '../types';

const {
    COMPANY_APIKEY,
    COMPANY_ID,
} = process.env;

if (!COMPANY_APIKEY) throw new Error('No COMPANY_APIKEY provided');
if (!COMPANY_ID) throw new Error('No COMPANY_ID provided');

const ApiKey: string = COMPANY_APIKEY;
const CompanyId: string = COMPANY_ID;

describe('getCompanyMissionFlightTracks', () => {
    it('should be a function', () => {
        expect(typeof getCompanyMissionFlightTracks).to.equal('function');
    });

    it('should return an array of FlightTracks for the given companyId', async () => {
        const jobs:FlightTrack[] = await getCompanyMissionFlightTracks(CompanyId, ApiKey);

        expect(jobs).to.be.an('array');

        if (jobs.length > 0) {
            expect(jobs[0]).to.have.any.keys([
                'Id',
                'MissionId',
                'FlightId',
            ]);
        }
    });

    it('should throw an error if the provided Company ID is invalid', async () => {
        try {
            await getCompanyMissionFlightTracks('invalidCompanyId', ApiKey);
        } catch (e) {
            expect(e.message).to.equal('Invalid Company Id provided');
        }
    });

    it('should throw an error if the provided API Key is invalid', async () => {
        try {
            await getCompanyMissionFlightTracks(CompanyId, 'invalidApiKey');
        } catch (e) {
            expect(e.message).to.equal('Invalid Api Key provided');
        }
    });
});
