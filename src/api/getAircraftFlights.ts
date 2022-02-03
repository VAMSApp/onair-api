import onAirRequest, { FlightResponse } from './onAirRequest';
import { Flight } from '../types';
import { uuid4 } from '../utils';

const endPoint = 'aircraft/';

export const getAircraftFlights = async (aircraftId: string, apiKey: string, world: string, page = 1, limit = 10): Promise<Flight[]> => {
    if (!aircraftId.match(uuid4)) {
        throw new Error('Aircraft ID is incorrect! It should be a 36 character UUID');
    }

    const startIndex = page > 1 ? limit * page : 0;

    try {
        const response = await onAirRequest<FlightResponse>(
            `https://server1.onair.company/api/v1/${endPoint}${aircraftId}/flights`,
            apiKey, {
                startIndex: startIndex,
                limit: limit
            }
        );

        if (typeof response.data.Content !== 'undefined') {
            return response.data.Content as Flight[];
        } else {
            throw new Error(response.data.Error ? response.data.Error : `Aircraft ID code ${aircraftId.toUpperCase()} not found`);
        }
    } catch (e) {
        throw new Error(e.message);
    }
};
