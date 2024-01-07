import onAirRequest, { AircraftEconomicDetailApiResponse } from './onAirRequest';
import { GetAircraftEconomicDetails, EconomicDetail } from '../types';
import { isValidGuid } from '../utils';

const endPoint = 'aircraft/';

export const getAircraftEconomicDetails:GetAircraftEconomicDetails = async (aircraftId: string, apiKey: string):Promise<EconomicDetail|null> => {
    if (!aircraftId) throw new Error('No aircraftId provided');
    if (!apiKey) throw new Error('No apiKey provided');
    if (!isValidGuid(aircraftId)) throw new Error('Invalid Aircraft Id provided');
    if (!isValidGuid(apiKey)) throw new Error('Invalid Api Key provided');

    try {
        const response = await onAirRequest<AircraftEconomicDetailApiResponse>(
            `https://server1.onair.company/api/v1/${endPoint}${aircraftId}/economic_details`,
            apiKey
        );

        if (typeof response.data.Content !== 'undefined') {
            const maintenance_costs = response.data.Content as EconomicDetail;
            return maintenance_costs;
        } else {
            if (response.data.Error) {
                throw new Error(response.data.Error);
            } else {
                throw new Error(response.data.Error ? response.data.Error : `Aircraft ID code ${aircraftId} not found`);
            }
        }
    } catch (e) {
        console.error(`OnAirApi::getAircraftEconomicDetails() Error getting Details for Aircraft ID "${aircraftId}"`, e);
        return null;
    }
};

