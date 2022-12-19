import { describe } from 'mocha';
import { expect } from 'chai';
import { getVirtualAirlineFbos } from './getVirtualAirlineFbos';
import { Fbo, } from '../types';

const {
    COMPANY_APIKEY,
    VIRTUAL_AIRLINE_ID,
} = process.env;

if (!COMPANY_APIKEY) throw new Error('No COMPANY_APIKEY provided');
if (!VIRTUAL_AIRLINE_ID) throw new Error('No VIRTUAL_AIRLINE_ID provided');

const ApiKey: string = COMPANY_APIKEY;
const VaId: string = VIRTUAL_AIRLINE_ID;

describe('getVirtualAirlineFbos', () => {
    it('should be a function', () => {
        expect(typeof getVirtualAirlineFbos).to.equal('function');
    });

    it('should return an array of FBo\'s owned by the given vaId', async () => {
        const x:Fbo[] = await getVirtualAirlineFbos(VaId, ApiKey);

        expect(x).to.be.an('array');
        if (x.length > 0) {
            expect(x[0]).to.have.any.keys([
                'Id',
                'CompanyId',
                'WorldId',
                'AirportId',
                'Name',
                'CargoWeightCapacity',
                'Fuel100LLCapacity',
                'FuelJetCapacity',
                'SleepingCapacity',
                'AircraftTieDownCapacity',
                'AircraftHangarCapacity',
                'Fuel100LLQuantity',
                'FuelJetQuantity',
                'Fuel100LLSellPrice',
                'FuelJetSellPrice',
                'AllowFuel100LLSelling',
                'AllowFuelJetSelling',
                'AllowWorkshopSelling',
                'MarkupWorkshopSelling',
                'WorkshopSEP',
                'WorkshopMEP',
                'WorkshopTurboProp',
                'WorkshopJet',
                'WorkshopHeavyJet',
                'WorkshopHelicopter',
                'WorkshopAnnualSEP',
                'WorkshopAnnualMEP',
                'WorkshopAnnualTurboProp',
                'WorkshopAnnualJet',
                'WorkshopAnnualHeavyJet',
                'WorkshopAnnualHelicopter',
                'Fuel100LLOrderedQuantity',
                'FuelJetOrderedQuantity',
                'FuelJetOrderedCapacity',
                'Fuel100LLOrderedCapacity',
                'CargoOrderedCapacity',
                'SleepingOrderedCapacity',
                'AircraftHangarOrderedCapacity',
                'AircraftTieDownOrderedCapacity',
                'WorkshopUnderConstruction',
            ]);
        }
    });

    it('should throw an error if the provided VA ID is invalid', async () => {
        try {
            await getVirtualAirlineFbos('invalidVaId', ApiKey);
        } catch (e) {
            expect(e.message).to.equal('Invalid VA Id provided');
        }
    });

    it('should throw an error if the provided API Key is invalid', async () => {
        try {
            await getVirtualAirlineFbos(VaId, 'invalidApiKey');
        } catch (e) {
            expect(e.message).to.equal('Invalid Api Key provided');
        }
    });
});
