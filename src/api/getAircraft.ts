import onAirRequest, { AircraftResponse } from './onAirRequest';
import { Aircraft, aircraftStatuses, engineTypes } from '../types';
import { uuid4 } from '../utils';

const endPoint = 'aircraft/';

export const getAircraft = async (aircraftId: string, apiKey: string, world: string): Promise<Aircraft> => {
    if (!aircraftId.match(uuid4) ) {
        throw new Error('Aircraft ID is incorrect! It should be a 36 character UUID');
    }

    try {
        const response = await onAirRequest<AircraftResponse>(
            `https://${world}.onair.company/api/v1/${endPoint}${aircraftId}`, 
            apiKey
        );

        if (typeof response.data.Content !== 'undefined') {
            const aircraft = response.data.Content as Aircraft;
            aircraft.AircraftStatusName = aircraftStatuses[aircraft.AircraftStatus];
            aircraft.AircraftType.EngineTypeName = engineTypes[aircraft.AircraftType.engineType];
            return aircraft;
        } else {
            throw new Error(response.data.Error ? response.data.Error : `Aircraft ID code ${aircraftId} not found`);
        }
    } catch (e) {
        throw new Error(e.message);
    }
};

