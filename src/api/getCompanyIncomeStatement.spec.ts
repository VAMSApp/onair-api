import { describe } from 'mocha';
import { expect } from 'chai';
import { getCompanyIncomeStatement } from './getCompanyIncomeStatement';
import { IncomeStatementResponse } from '../types';

const {
    COMPANY_APIKEY,
    COMPANY_ID,
} = process.env;

if (!COMPANY_APIKEY) throw new Error('No COMPANY_APIKEY provided');
if (!COMPANY_ID) throw new Error('No COMPANY_ID provided');

const ApiKey: string = COMPANY_APIKEY;
const CompanyId: string = COMPANY_ID;

describe('getCompanyIncomeStatement', () => {
    it('should be a function', () => {
        expect(typeof getCompanyIncomeStatement).to.equal('function');
    });

    it('if no startDate or endDate is provided, by default it should return an IncomeStatement for the last 30 days for the given companyId', async () => {
        const StartDateStr = undefined;
        const EndDateStr = undefined;
        const incomeStatement:IncomeStatementResponse = await getCompanyIncomeStatement(CompanyId, ApiKey, StartDateStr, EndDateStr);

        expect(incomeStatement).to.be.an('object');
        expect(incomeStatement.Content).to.contain.keys([
            'REVAccounts',
            'EXPAccounts',
            'REVAmount',
            'EXPAmount',
            'NetIncomeAmount',
        ]);
    });

    it('if the startDate is provided, and no endDate is provided, by default it should return an IncomeStatement for the 30 days prior to the startDate for the given companyId', async () => {
        const StartDateStr = '2022-10-01T00:00:00';
        const EndDateStr = undefined;
        const incomeStatement:IncomeStatementResponse = await getCompanyIncomeStatement(CompanyId, ApiKey, StartDateStr, EndDateStr);

        expect(incomeStatement).to.be.an('object');
        expect(incomeStatement.Content).to.contain.keys([
            'REVAccounts',
            'EXPAccounts',
            'REVAmount',
            'EXPAmount',
            'NetIncomeAmount',
        ]);
    });

    it('if the startDate is not provided but the endDate is provided, by default it should return an IncomeStatement for the 30 days ahead of the endDate for the given companyId', async () => {
        const StartDateStr = undefined;
        const EndDateStr = '2022-10-01T00:00:00';
        const incomeStatement:IncomeStatementResponse = await getCompanyIncomeStatement(CompanyId, ApiKey, StartDateStr, EndDateStr);

        expect(incomeStatement).to.be.an('object');
        expect(incomeStatement.Content).to.contain.keys([
            'REVAccounts',
            'EXPAccounts',
            'REVAmount',
            'EXPAmount',
            'NetIncomeAmount',
        ]);
    });

    it('should throw an error if the provided Company ID is invalid', async () => {
        try {
            await getCompanyIncomeStatement('invalidCompanyId', ApiKey);
        } catch (e) {
            expect(e.message).to.equal('Invalid Company Id provided');
        }
    });

    it('should throw an error if the provided API Key is invalid', async () => {
        try {
            await getCompanyIncomeStatement(CompanyId, 'invalidApiKey');
        } catch (e) {
            expect(e.message).to.equal('Invalid Api Key provided');
        }
    });
});
