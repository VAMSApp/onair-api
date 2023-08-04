import onAirRequest, { FlightApiResponse } from './onAirRequest';
import { Flight, GetAircraftFlights, QueryOptions, } from '../types';
import { isValidGuid } from '../utils';

const endPoint = 'aircraft/';

export const getAircraftFlights:GetAircraftFlights = async (aircraftId: string, apiKey: string, page = 1, limit?:number):Promise<Flight[]> => {
    if (!aircraftId) throw new Error('No aircraftId provided');
    if (!apiKey) throw new Error('No apiKey provided');
    if (!isValidGuid(aircraftId)) throw new Error('Invalid Aircraft Id provided');
    if (!isValidGuid(apiKey)) throw new Error('Invalid Api Key provided');
    const startIndex = (typeof limit !== 'undefined') ? (page > 1) ? limit * page : 0 : 0;

    try {
        const queryOpts:QueryOptions = {};
        
        if (typeof startIndex !== 'undefined') {
            queryOpts.startIndex = startIndex;
        }

        if (typeof limit !== 'undefined') {
            queryOpts.limit = limit;
        }

        const response = await onAirRequest<FlightApiResponse>(
            `https://server1.onair.company/api/v1/${endPoint}${aircraftId.toString()}/flights`,
            apiKey, {
                startIndex: startIndex,
                limit: limit
            },
        );

        if (typeof response.data.Content !== 'undefined') {
            return response.data.Content as Flight[];
        } else {
            throw new Error(response.data.Error ? response.data.Error : `Aircraft ID code ${aircraftId.toString().toUpperCase()} not found`);
        }
    } catch (e) {
        throw new Error(e.message);
    }
};
