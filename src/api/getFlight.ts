import onAirRequest, { FlightApiResponse } from './onAirRequest';
import { Flight, GetFlight, } from '../types';
import { isValidGuid } from '../utils';

const endPoint = 'flights/';
export const getFlight:GetFlight = async (flightId: string, apiKey: string) => {
    if (!flightId) throw new Error('No Flight Id provided');
    if (!apiKey) throw new Error('No Api Key provided');
    if (!isValidGuid(flightId)) throw new Error('Invalid Flight Id provided');
    if (!isValidGuid(apiKey)) throw new Error('Invalid Api Key provided');


    try {

        const response = await onAirRequest<FlightApiResponse>(
            `https://server1.onair.company/api/v1/${endPoint}${flightId}`,
            apiKey,
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

