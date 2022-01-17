import 'dotenv/config'
import { Aircraft, AircraftType, } from './types/Aircraft'
import { Company, } from './types/Company'
import Api from './api/index'

export default class OnAirApi {
    // Properties
    private apiKey = null
    private companyId = null
    private world = null
    
    // Constructor
    constructor(_apiKey: string, _companyId: string, _world: string) {
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
    // Methods

}