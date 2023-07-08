import { describe } from 'mocha';
import { expect } from 'chai';
import { getCompanyBalanceSheet } from './getCompanyBalanceSheet';
import { BalanceSheetResponse } from '../types';

const {
    COMPANY_APIKEY,
    COMPANY_ID,
} = process.env;

if (!COMPANY_APIKEY) throw new Error('No COMPANY_APIKEY provided');
if (!COMPANY_ID) throw new Error('No COMPANY_ID provided');

const ApiKey: string = COMPANY_APIKEY;
const CompanyId: string = COMPANY_ID;

describe('getCompanyBalanceSheet', () => {
    it('should be a function', () => {
        expect(typeof getCompanyBalanceSheet).to.equal('function');
    });

    it('should return a matching BalanceSheet for the given companyId', async () => {
        const BalanceSheet:BalanceSheetResponse = await getCompanyBalanceSheet(CompanyId, ApiKey);
        if (!BalanceSheet || BalanceSheet === null) throw new Error('No BalanceSheet returned');

        expect(BalanceSheet).to.be.an('object');
        expect(BalanceSheet).to.have.any.keys(['ASSAccounts','LIAAccounts','ASSAmount','LIAAmount','DeltaBalance',]);

    });

    it('should throw an error if the provided Company ID is invalid', async () => {
        try {
            await getCompanyBalanceSheet('invalidCompanyId', ApiKey);
        } catch (e) {
            expect(e.message).to.equal('Invalid Company Id provided');
        }
    });

    it('should throw an error if the provided API Key is invalid', async () => {
        try {
            await getCompanyBalanceSheet(CompanyId, 'invalidApiKey');
        } catch (e) {
            expect(e.message).to.equal('Invalid Api Key provided');
        }
    });
});
