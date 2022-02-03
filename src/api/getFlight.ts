import onAirRequest, { FlightResponse } from './onAirRequest';
import { Flight } from '../types';
import { uuid4 } from '../utils';

export const getFlight = async (flightId: string, apiKey: string): Promise<Flight> => {
    if (!uuid4.test(flightId) ) {
        throw new Error('Flight ID is incorrect! It should be a 36 character UUID');
    }

    try {
        const response = await onAirRequest<FlightResponse>(
            `https://server1.onair.company/api/v1/flights/${flightId}`,
            apiKey
        );

        if (typeof response.data.Content !== 'undefined') {
            return response.data.Content as Flight;
        } else {
            throw new Error(response.data.Error ? response.data.Error : `Flight ID ${flightId} not found`);
        }
    } catch (e) {
        throw new Error(e.message);
    }
};

