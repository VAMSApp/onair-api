import onAirRequest, { AircraftTypeApiResponse } from './onAirRequest';
import { AircraftType, engineTypes, GetAircraftTypes } from '../types';
import { isValidGuid } from '../utils';

const endPoint = 'aircrafttypes/';

export const getAircraftTypes:GetAircraftTypes = async (aircraftTypeId: string, apiKey: string):Promise<AircraftType|AircraftType[]|null> => {
    if (!aircraftTypeId) throw new Error('No Aircraft Type Id provided');
    if (!apiKey) throw new Error('No apiKey provided');
    if (!isValidGuid(aircraftTypeId)) throw new Error('Invalid Aircraft Type Id provided');
    if (!isValidGuid(apiKey)) throw new Error('Invalid Api Key provided');

    try {
        const response = await onAirRequest<AircraftTypeApiResponse>(
            `https://server1.onair.company/api/v1/${endPoint}${aircraftTypeId}`,
            apiKey
        );

        if (typeof response.data.Content !== 'undefined') {
            const aircraftType = response.data.Content as AircraftType;
            aircraftType.EngineTypeName = engineTypes[aircraftType.engineType];

            return aircraftType;
        } else {
            if (response.data.Error) {
                throw new Error(response.data.Error);
            } else {
                throw new Error(response.data.Error ? response.data.Error : `AircraftType ID code ${aircraftTypeId} not found`);
            }
        }
    } catch (e) {
        console.error(`OnAirApi::getAircraft() Error getting Details for AircraftType ID "${aircraftTypeId}"`, e);
        return null;
    }
};

