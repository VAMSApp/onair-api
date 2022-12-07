import { describe } from 'mocha';
import { expect } from 'chai';
import { getCompanyCashFlow } from './getCompanyCashFlow';
import { CashFlowResponse } from '../types';

const {
    COMPANY_APIKEY,
    COMPANY_ID,
} = process.env;

if (!COMPANY_APIKEY) throw new Error('No COMPANY_APIKEY provided');
if (!COMPANY_ID) throw new Error('No COMPANY_ID provided');

const ApiKey: string = COMPANY_APIKEY;
const CompanyId: string = COMPANY_ID;

describe('getCompanyCashFlow', () => {
    it('should be a function', () => {
        expect(typeof getCompanyCashFlow).to.equal('function');
    });

    it('should return a matching CashFlow for the given companyId', async () => {
        const CashFlow:CashFlowResponse = await getCompanyCashFlow(CompanyId, ApiKey);
        if (!CashFlow || CashFlow === null) throw new Error('No CashFlow returned');

        expect(CashFlow).to.be.an('object');
        expect(CashFlow).to.have.any.keys([
            'Entries',
            'CompanyCurrentCash',
            'LastReportAmount',
            'LastReportDate',
        ])

    });

    it('should throw an error if the provided Company ID is invalid', async () => {
        try {
            await getCompanyCashFlow('invalidCompanyId', ApiKey);
        } catch (e) {
            expect(e.message).to.equal('Invalid Company Id provided');
        }
    });

    it('should throw an error if the provided API Key is invalid', async () => {
        try {
            await getCompanyCashFlow(CompanyId, 'invalidApiKey');
        } catch (e) {
            expect(e.message).to.equal('Invalid Api Key provided');
        }
    });
});
