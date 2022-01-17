import { describe } from 'mocha';
import { expect } from 'chai';
import OnAirApi from './app';
import { Company } from './types/Company';
import { Aircraft } from './types/Aircraft';

const ApiKey: string = process.env.COMPANY_APIKEY;
const CompanyId: string = process.env.COMPANY_ID;
const World: string = process.env.COMPANY_WORLD;


describe('OnAirApi()', function() {
    it('when instantiated with valid data, it should return an OnAirApi object', async function() {
        const Api: OnAirApi = new OnAirApi(ApiKey, CompanyId, World);
        expect(Api).to.be.an('Object');
    });
    
    it('when instantiated with no ApiKey, it should throw an error', async function() {
        try {
            const Api: OnAirApi = new OnAirApi(undefined, CompanyId, World);
        }
        catch(error: any) {
            expect(error.message).equal('No API Key provided');
        }

    });

    it('when instantiated with no CompanyID, it should throw an error', async function() {
        try {
            const Api: OnAirApi = new OnAirApi(ApiKey, null, World);
        }
        catch(error: any) {
            expect(error.message).equal('No Company ID provided');
        }

    });

    it('when instantiated with no World, it should throw an error', async function() {
        try {
            const Api: OnAirApi = new OnAirApi(ApiKey, CompanyId, undefined);
        }
        catch(error: any) {
            expect(error.message).equal('No World provided');
        }

    });

    it('getCompanyDetails() should return company details', async function() {        
        const Api: OnAirApi = new OnAirApi(ApiKey, CompanyId, World);

        let actual: Company = await Api.getCompanyDetails();

        expect(actual.Id).equal(CompanyId);
    })

    it('getCompanyFleet() should return matching company details', async function() {        
        const Api: OnAirApi = new OnAirApi(ApiKey, CompanyId, World);

        let actual: Aircraft[] = await Api.getCompanyFleet();
        // console.log(actual);
        expect(actual).to.be.an('array');
        expect(actual[0]['CompanyId']).equal(CompanyId);
        // expect(actual.Id).equal(CompanyId);
        // expect(true);
    })

    it('getCompanyFbos() should matching company FBOs');
    it('getCompanyFlights() should matching company Flights');
    it('getAircraft() should matching aircraft details');
    it('getAircraftFlights() should matching aircraft flights');
    it('getAirport() should matching airport details');
    it('getFlight() should matching flight details');
})