import { describe } from 'mocha';
import { expect } from 'chai';
import { getCompanyFleet } from './getCompanyFleet';
import { Aircraft } from '../types';

const {
    COMPANY_APIKEY,
    COMPANY_ID,
} = process.env;

if (!COMPANY_APIKEY) throw new Error('No COMPANY_APIKEY provided');
if (!COMPANY_ID) throw new Error('No COMPANY_ID provided');

const ApiKey: string = COMPANY_APIKEY;
const CompanyId: string = COMPANY_ID;

describe('getCompanyFleet', () => {
    it('should be a function', () => {
        expect(typeof getCompanyFleet).to.equal('function');
    });

    it('should return an array of Aircraft for the given companyId', async () => {
        const fleet:Aircraft[] = await getCompanyFleet(CompanyId, ApiKey);

        expect(fleet).to.be.an('array');

        if (fleet.length > 0) {
            expect(fleet[0]).to.have.any.keys([
                'Id',
                'AircraftTypeId',
                'WorldId',
            ]);
        }

    });

    it('should throw an error if the provided Company ID is invalid', async () => {
        try {
            await getCompanyFleet('invalidCompanyId', ApiKey);
        } catch (e) {
            expect(e.message).to.equal('Invalid Company Id provided');
        }
    });

    it('should throw an error if the provided API Key is invalid', async () => {
        try {
            await getCompanyFleet(CompanyId, 'invalidApiKey');
        } catch (e) {
            expect(e.message).to.equal('Invalid Api Key provided');
        }
    });
});
