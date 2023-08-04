import onAirRequest, { AircraftApiResponse } from './onAirRequest';
import { Aircraft, aircraftStatuses, engineTypes, GetAircraft } from '../types';
import { isValidGuid } from '../utils';

const endPoint = 'aircraft/';

export const getAircraft:GetAircraft = async (aircraftId: string, apiKey: string):Promise<Aircraft|null> => {
    if (!aircraftId) throw new Error('No aircraftId provided');
    if (!apiKey) throw new Error('No apiKey provided');
    if (!isValidGuid(aircraftId)) throw new Error('Invalid Aircraft Id provided');
    if (!isValidGuid(apiKey)) throw new Error('Invalid Api Key provided');

    try {
        const response = await onAirRequest<AircraftApiResponse>(
            `https://server1.onair.company/api/v1/${endPoint}${aircraftId}`,
            apiKey
        );

        if (typeof response.data.Content !== 'undefined') {
            const aircraft = response.data.Content as Aircraft;
            aircraft.AircraftStatusName = aircraftStatuses[aircraft.AircraftStatus];
            aircraft.AircraftType.EngineTypeName = engineTypes[aircraft.AircraftType.engineType];
            return aircraft;
        } else {
            if (response.data.Error) {
                throw new Error(response.data.Error);
            } else {
                throw new Error(response.data.Error ? response.data.Error : `Aircraft ID code ${aircraftId} not found`);
            }
        }
    } catch (e) {
        console.error(`OnAirApi::getAircraft() Error getting Details for Aircraft ID "${aircraftId}"`, e);
        return null;
    }
};

