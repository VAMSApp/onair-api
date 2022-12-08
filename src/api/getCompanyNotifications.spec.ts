import { describe } from 'mocha';
import { expect } from 'chai';
import { getCompanyNotifications } from './getCompanyNotifications';
import { Notification, } from '../types';

const {
    COMPANY_APIKEY,
    COMPANY_ID,
} = process.env;

if (!COMPANY_APIKEY) throw new Error('No COMPANY_APIKEY provided');
if (!COMPANY_ID) throw new Error('No COMPANY_ID provided');

const ApiKey: string = COMPANY_APIKEY;
const CompanyId: string = COMPANY_ID;

describe('getCompanyNotifications', () => {
    it('should be a function', () => {
        expect(typeof getCompanyNotifications).to.equal('function');
    });

    it('should return an array of the notification\'s for the given vaId', async () => {
        const x:Notification[] = await getCompanyNotifications(CompanyId, ApiKey);

        expect(x).to.be.an('array');
        if (x.length > 0) {
            expect(x[0].Id).to.be.a('string');
        }
    });

    it('should throw an error if the provided Company Id is invalid', async () => {
        try {
            await getCompanyNotifications('invalidCompanyId', ApiKey);
        } catch (e) {
            expect(e.message).to.equal('Invalid Company Id provided');
        }
    });

    it('should throw an error if the provided API Key is invalid', async () => {
        try {
            await getCompanyNotifications(CompanyId, 'invalidApiKey');
        } catch (e) {
            expect(e.message).to.equal('Invalid Api Key provided');
        }
    });
});
