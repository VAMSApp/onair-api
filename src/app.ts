import 'dotenv/config'
import { Aircraft, AircraftType, } from './types/Aircraft'
import { Company, } from './types/Company'
import Api from './api/index'
import { Flight } from './types/Flight'
import { Fbo } from './types/Fbo'

export class OnAirApi {
    // Properties
    private apiKey = null
    private companyId = null
    private world = null
    
    // Constructor
    constructor(_apiKey: string, _companyId: string, _world: string) {
        if (!_apiKey) throw new Error('No API Key provided');
        if(!_companyId) throw new Error('No Company ID provided');
        if(!_world) throw new Error('No World provided');
        
        this.apiKey = _apiKey;
        this.companyId = _companyId;
        this.world = _world;
    }

    // // Accessors
    // get apiKey() {
    //     return this.apiKey;
    // }

    // get companyId() {
    //     return this.companyId;
    // }

    // get world() {
    //     return this.world;
    // }

    // set world(w) {
    //     this.world = w;
    // }

    // set apiKey(key) {
    //     this.apiKey = key;
    // }

    // set companyId(id) {
    //     this.companyId = id;
    // }

    public async getCompanyDetails() {
        let company: Company = await Api.getCompany(this.companyId, this.apiKey, this.world)
        return company;
    }

    public async getCompanyFleet() {
        let companyFleet: Aircraft[] = await Api.getCompanyFleet(this.companyId, this.apiKey, this.world)
        return companyFleet;
    }
    
    public async getCompanyFbos() {
        let companyFbos: Fbo[] = await Api.getCompanyFbos(this.companyId, this.apiKey, this.world);
        return companyFbos;
    }
    
    public async getCompanyFlights(page: number = null, limit: number = 100) {
        let companyFlights: Flight[] = await Api.getCompanyFlights(this.companyId, this.apiKey, this.world, page, limit);
        return companyFlights;
    }
    
    public async getAircraft(aircraftId: string) {
        if (!aircraftId) throw new Error('Aircraft ID not provided');

        let aircraft: Aircraft = await Api.getAircraft(aircraftId, this.apiKey, this.world);
        return aircraft;
    }

    public async getAircraftFlights(aircraftId: string) {
        if (!aircraftId) throw new Error('Aircraft ID not provided');

        let flights: Flight[] = await Api.getAircraftFlights(aircraftId, this.apiKey, this.world);
        return flights;
    }

    public async getAirport(airportCode: string) {
        if (!airportCode) throw new Error('Airport ICAO code not provided');

        let airport: any = await Api.getAirport(airportCode, this.apiKey, this.world);
        return airport;
    }
    
    public async getFlight(flightId: string) {
        if (!flightId) throw new Error('Flight ID not provided');

        let flight: Flight = await Api.getFlight(flightId, this.apiKey, this.world);
        return flight;
    }
    
}

export default OnAirApi