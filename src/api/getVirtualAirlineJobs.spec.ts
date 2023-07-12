import { describe } from 'mocha';
import { expect } from 'chai';
import { getVirtualAirlineJobs } from './getVirtualAirlineJobs';
import { Job, } from '../types';

const {
    COMPANY_APIKEY,
    VIRTUAL_AIRLINE_ID,
} = process.env;

if (!COMPANY_APIKEY) throw new Error('No COMPANY_APIKEY provided');
if (!VIRTUAL_AIRLINE_ID) throw new Error('No VIRTUAL_AIRLINE_ID provided');

const ApiKey: string = COMPANY_APIKEY;
const VaId: string = VIRTUAL_AIRLINE_ID;

describe.only('getVirtualAirlineJobs', () => {
    it('should be a function', () => {
        expect(typeof getVirtualAirlineJobs).to.equal('function');
    });

    it('should return an array of Job\'s that are currently pending for the given vaId', async () => {
        const x:Job[] = await getVirtualAirlineJobs(VaId, ApiKey);

        expect(x).to.be.an('array');
        if (x.length > 0) {
            expect(x[0]).to.have.any.keys([
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

    it('should return an array of Job\'s that are currently completed for the given vaId', async () => {
        const x:Job[] = await getVirtualAirlineJobs(VaId, ApiKey, true);

        expect(x).to.be.an('array');expect(x).to.be.an('array');

        if (x.length > 0) {
            expect(x[0]).to.have.any.keys([
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


    it('should throw an error if the provided VA ID is invalid', async () => {
        try {
            await getVirtualAirlineJobs('invalidVaId', ApiKey);
        } catch (e) {
            expect(e.message).to.equal('Invalid VA Id provided');
        }
    });

    it('should throw an error if the provided API Key is invalid', async () => {
        try {
            await getVirtualAirlineJobs(VaId, 'invalidApiKey');
        } catch (e) {
            expect(e.message).to.equal('Invalid Api Key provided');
        }
    });
});
