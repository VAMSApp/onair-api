import { describe } from 'mocha';
import { expect } from 'chai';
import { getCompanyEmployees } from './getCompanyEmployees';
import { People as Employee } from '../types';

const {
    COMPANY_APIKEY,
    COMPANY_ID,
} = process.env;

if (!COMPANY_APIKEY) throw new Error('No COMPANY_APIKEY provided');
if (!COMPANY_ID) throw new Error('No COMPANY_ID provided');

const ApiKey: string = COMPANY_APIKEY;
const CompanyId: string = COMPANY_ID;

describe('getCompanyEmployees', () => {
    it('should be a function', () => {
        expect(typeof getCompanyEmployees).to.equal('function');
    });

    it('should return an array of Employees for the given companyId', async () => {
        const Employees:Employee[] = await getCompanyEmployees(CompanyId, ApiKey);

        expect(Employees).to.be.an('array');
        expect(Employees[0]).to.have.any.keys([
            'Id',
            'Pseudo',
        ]);

    });

    it('should throw an error if the provided Company ID is invalid', async () => {
        try {
            await getCompanyEmployees('invalidCompanyId', ApiKey);
        } catch (e) {
            expect(e.message).to.equal('Invalid Company Id provided');
        }
    });

    it('should throw an error if the provided API Key is invalid', async () => {
        try {
            await getCompanyEmployees(CompanyId, 'invalidApiKey');
        } catch (e) {
            expect(e.message).to.equal('Invalid Api Key provided');
        }
    });
});
