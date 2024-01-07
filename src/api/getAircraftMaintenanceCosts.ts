import onAirRequest, { AircraftMaintenanceCostApiResponse } from './onAirRequest';
import { GetAircraftMaintenanceCosts, MaintenanceCost } from '../types';
import { isValidGuid } from '../utils';

const endPoint = 'aircraft/';

export const getAircraftMaintenanceCosts:GetAircraftMaintenanceCosts = async (aircraftId: string, apiKey: string):Promise<MaintenanceCost|null> => {
    if (!aircraftId) throw new Error('No aircraftId provided');
    if (!apiKey) throw new Error('No apiKey provided');
    if (!isValidGuid(aircraftId)) throw new Error('Invalid Aircraft Id provided');
    if (!isValidGuid(apiKey)) throw new Error('Invalid Api Key provided');

    try {
        const response = await onAirRequest<AircraftMaintenanceCostApiResponse>(
            `https://server1.onair.company/api/v1/${endPoint}${aircraftId}/maintenance_costs`,
            apiKey
        );

        if (typeof response.data.Content !== 'undefined') {
            const maintenance_costs = response.data.Content as MaintenanceCost;
            return maintenance_costs;
        } else {
            if (response.data.Error) {
                throw new Error(response.data.Error);
            } else {
                throw new Error(response.data.Error ? response.data.Error : `Aircraft ID code ${aircraftId} not found`);
            }
        }
    } catch (e) {
        console.error(`OnAirApi::getAircraftMaintenanceCosts() Error getting Details for Aircraft ID "${aircraftId}"`, e);
        return null;
    }
};

