import { describe } from 'mocha';
import { expect } from 'chai';
import { getCompanyFbos } from './getCompanyFbos';
import { Fbo } from '../types';

const {
    COMPANY_APIKEY,
    COMPANY_ID,
} = process.env;

if (!COMPANY_APIKEY) throw new Error('No COMPANY_APIKEY provided');
if (!COMPANY_ID) throw new Error('No COMPANY_ID provided');

const ApiKey: string = COMPANY_APIKEY;
const CompanyId: string = COMPANY_ID;

describe('getCompanyFbos', () => {
    it('should be a function', () => {
        expect(typeof getCompanyFbos).to.equal('function');
    });

    it('should return an array of Fbo\'s for the given companyId', async () => {
        const fbos:Fbo[] = await getCompanyFbos(CompanyId, ApiKey);

        expect(fbos).to.be.an('array');

        if (fbos.length > 0) {
            expect(fbos[0]).to.have.keys([
                'Id',
                'AirportId',
                'Name',
            ])
        }

    });

    it('should throw an error if the provided Company ID is invalid', async () => {
        try {
            await getCompanyFbos('invalidCompanyId', ApiKey);
        } catch (e) {
            expect(e.message).to.equal('Invalid Company Id provided');
        }
    });

    it('should throw an error if the provided API Key is invalid', async () => {
        try {
            await getCompanyFbos(CompanyId, 'invalidApiKey');
        } catch (e) {
            expect(e.message).to.equal('Invalid Api Key provided');
        }
    });
});
