import { describe } from 'mocha';
import { expect } from 'chai';
import { getCompanyJobs } from './getCompanyJobs';
import { Job } from '../types';

const {
    COMPANY_APIKEY,
    COMPANY_ID,
} = process.env;

if (!COMPANY_APIKEY) throw new Error('No COMPANY_APIKEY provided');
if (!COMPANY_ID) throw new Error('No COMPANY_ID provided');

const ApiKey: string = COMPANY_APIKEY;
const CompanyId: string = COMPANY_ID;

describe('getCompanyJobs', () => {
    it('should be a function', () => {
        expect(typeof getCompanyJobs).to.equal('function');
    });

    it('should return an array of pending Jobs for the given companyId', async () => {
        const jobs:Job[] = await getCompanyJobs(CompanyId, ApiKey);

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

    it('should return an array of completed Jobs for the given companyId', async () => {
        const jobs:Job[] = await getCompanyJobs(CompanyId, ApiKey, true);

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

    it('should throw an error if the provided Company ID is invalid', async () => {
        try {
            await getCompanyJobs('invalidCompanyId', ApiKey);
        } catch (e) {
            expect(e.message).to.equal('Invalid Company Id provided');
        }
    });

    it('should throw an error if the provided API Key is invalid', async () => {
        try {
            await getCompanyJobs(CompanyId, 'invalidApiKey');
        } catch (e) {
            expect(e.message).to.equal('Invalid Api Key provided');
        }
    });
});
