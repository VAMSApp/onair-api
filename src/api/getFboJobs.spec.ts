import { describe } from 'mocha';
import { expect } from 'chai';
import { getFboJobs } from './getFboJobs';
import { Job } from '../types';

const {
    COMPANY_APIKEY,
    COMPANY_ID,
    FBO_ID,
} = process.env;

if (!COMPANY_APIKEY) throw new Error('No COMPANY_APIKEY provided');
if (!COMPANY_ID) throw new Error('No COMPANY_ID provided');
if (!FBO_ID) throw new Error('No FBO_ID provided');

const ApiKey:string = COMPANY_APIKEY;
const FboId:string = FBO_ID;

describe.only('getFboJobs', () => {
    it('should be a function', () => {
        expect(typeof getFboJobs).to.equal('function');
    });

    it('should return an array of pending Jobs for the given FBO Id', async () => {
        const jobs:Job[] = await getFboJobs(FboId, ApiKey);

        expect(jobs).to.be.an('array');

        if (jobs.length > 0) {
            expect(jobs[0]).to.have.any.keys([
                'Id',
                'WorldId',
                'Cargos',
                'Charters',
                'MissionTypeId',
                'MainAirportId',
                'BaseAirportId',
                'ValuePerLbsPerDistance',
                'IsGoodValue',
                'MaxDistance',
                'TotalDistance',
                'MainAirportHeading',
                'Description',
                'Pay',
                'Penality',
                'ReputationImpact',
                'CompanyId',
                'CreationDate',
                'TakenDate',
                'TotalCargoTransported',
                'TotalPaxTransported',
                'Category',
                'State',
                'XP',
                'SkillPoint',
                'MinCompanyReput',
                'Hash',
                'RealPay',
                'RealPenality',
                'CanAccess',
                'IsLastMinute',
                'IsFavorited',
            ]);
        }
    });

    it('should throw an error if the provided FBO ID is invalid', async () => {
        try {
            await getFboJobs('InvalidFBOId', ApiKey);
        } catch (e) {
            expect(e.message).to.equal('Invalid FBO Id provided');
        }
    });

    it('should throw an error if the provided API Key is invalid', async () => {
        try {
            await getFboJobs(FboId, 'invalidApiKey');
        } catch (e) {
            expect(e.message).to.equal('Invalid Api Key provided');
        }
    });
});
