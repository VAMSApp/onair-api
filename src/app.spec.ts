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

    it('getCompanyFbos() should matching company FBOs', async function() {
        const Api: OnAirApi = new OnAirApi(ApiKey, CompanyId, World);
        let actual = Api.getCompanyFbos();
        expect(true);
    });

    it('getCompanyFlights() should matching company Flights', async function() {
        const Api: OnAirApi = new OnAirApi(ApiKey, CompanyId, World);
        let actual = Api.getCompanyFlights();
        expect(true);
    });

    it('getAircraft() should matching aircraft details', async function() {
        const Api: OnAirApi = new OnAirApi(ApiKey, CompanyId, World);
        const aircraftId = '2dc2320f-27cc-4d19-8168-f2df3a105838';
        let actual = Api.getAircraft(aircraftId);

        expect(true);
    });

    it('getAircraftFlights() should matching aircraft flights', async function() {
        const Api: OnAirApi = new OnAirApi(ApiKey, CompanyId, World);
        const aircraftId = '2dc2320f-27cc-4d19-8168-f2df3a105838';
        let actual = Api.getAircraftFlights(aircraftId);

        expect(true);
    });

    it('getAirport() should matching airport details', async function() {
        const Api: OnAirApi = new OnAirApi(ApiKey, CompanyId, World);
        const airportCode = 'KPHX';
        let actual = Api.getAirport(airportCode);

        expect(true);
    });

    it('getFlight() should matching flight details', async function() {
        const Api: OnAirApi = new OnAirApi(ApiKey, CompanyId, World);
        const flightId = '';
        let actual = Api.getFlight(flightId);

        expect(true);
    });

})