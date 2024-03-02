import { describe } from 'mocha';
import { expect } from 'chai';
import { getCompany } from './getCompany';
import { CompanyResponse } from '../types';

const {
    COMPANY_APIKEY,
    COMPANY_ID,
} = process.env;

if (!COMPANY_APIKEY) throw new Error('No COMPANY_APIKEY provided');
if (!COMPANY_ID) throw new Error('No COMPANY_ID provided');

const ApiKey: string = COMPANY_APIKEY;
const CompanyId: string = COMPANY_ID;

describe('getCompany', () => {
    it('should be a function', () => {
        expect(typeof getCompany).to.equal('function');
    });

    it('should return a matching Company for the given companyId, with expected fields', async () => {
        const company:CompanyResponse = await getCompany(CompanyId, ApiKey);
        if (!company || company === null) throw new Error('No company returned');

        expect(company).to.be.an('object');
        expect(company).to.contain.keys([
            'LastSwapDate',
            'SkillTreeResetCount',
            'IndustryPoints',
            'TotalIndustryPoints',
            'TotalContractsCompleted',
            'TotalContractsEarnedCredits',
            'CompanyType',
        ]);

        expect(company.Id).to.be.a('string');
        expect(company.Id).to.equal(CompanyId);
    });

    it('should throw an error if the provided companyId is invalid', async () => {
        try {
            await getCompany('invalidCompanyId', ApiKey);
        } catch (e) {
            expect(e.message).to.equal('Invalid Company Id provided');
        }
    });

    it('should throw an error if the provided apiKey is invalid', async () => {
        try {
            await getCompany(CompanyId, 'invalidApiKey');
        } catch (e) {
            expect(e.message).to.equal('Invalid Api Key provided');
        }
    });
});
