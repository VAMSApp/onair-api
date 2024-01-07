import onAirRequest, { AircraftTypeApiResponse } from './onAirRequest';
import { AircraftType, GetAircraftType } from '../types';
import { isValidGuid } from '../utils';

const endPoint = 'aircrafttypes/';

export const getAircraftType:GetAircraftType = async (aircraftTypeId: string, apiKey: string):Promise<AircraftType|null> => {
    if (!aircraftTypeId) throw new Error('No aircraftTypeId provided');
    if (!apiKey) throw new Error('No apiKey provided');
    if (!isValidGuid(aircraftTypeId)) throw new Error('Invalid Aircraft Id provided');
    if (!isValidGuid(apiKey)) throw new Error('Invalid Api Key provided');

    try {
        const response = await onAirRequest<AircraftTypeApiResponse>(
            `https://server1.onair.company/api/v1/${endPoint}${aircraftTypeId}`,
            apiKey
        );

        if (typeof response.data.Content !== 'undefined') {
            const x = response.data.Content as AircraftType;
            return x;
        } else {
            if (response.data.Error) {
                throw new Error(response.data.Error);
            } else {
                throw new Error(response.data.Error ? response.data.Error : `Aircraft Type ID ${aircraftTypeId} not found`);
            }
        }
    } catch (e) {
        console.error(`OnAirApi::getAircraft() Error getting Details for Aircraft Type ID "${aircraftTypeId}"`, e);
        return null;
    }
};

