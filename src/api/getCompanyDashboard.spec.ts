import { describe } from 'mocha';
import { expect } from 'chai';
import { getCompanyDashboard } from './getCompanyDashboard';
import { CompanyDashboardResponse } from '../types';

const {
    COMPANY_APIKEY,
    COMPANY_ID,
} = process.env;

if (!COMPANY_APIKEY) throw new Error('No COMPANY_APIKEY provided');
if (!COMPANY_ID) throw new Error('No COMPANY_ID provided');

const ApiKey: string = COMPANY_APIKEY;
const CompanyId: string = COMPANY_ID;

describe.only('getCompanyDashboard', () => {
    it('should be a function', () => {
        expect(typeof getCompanyDashboard).to.equal('function');
    });

    it('should return a matching Company Dashboard for the given companyId', async () => {
        const company:CompanyDashboardResponse = await getCompanyDashboard(CompanyId, ApiKey);
        if (!company || company === null) throw new Error('No company returned');

        expect(company).to.be.an('object');
        expect(company).to.contain.keys([
            'Cash',
            'ShareCapital',
            'Value',
            'Incomes1week',
            'Incomes2weeks',
            'IncomesGlobal',
            'NumberOfCompletedMissions',
            'NumberOfActivesMissions',
            'NumberOfActiveAircrafts',
            'NumberOfAircrafts',
            'NumberOfEmployees',
            'NumberOfFBOs',
            'ReturnOnAssets',
            'DebtRatio',
            'Assets',
            'Loans',
            'Level',
            'XP',
            'XPNeeded',
        ]);
    });

    it('should throw an error if the provided companyId is invalid', async () => {
        try {
            await getCompanyDashboard('invalidCompanyId', ApiKey);
        } catch (e) {
            expect(e.message).to.equal('Invalid Company Id provided');
        }
    });

    it('should throw an error if the provided apiKey is invalid', async () => {
        try {
            await getCompanyDashboard(CompanyId, 'invalidApiKey');
        } catch (e) {
            expect(e.message).to.equal('Invalid Api Key provided');
        }
    });
});
