import { isValidGuid } from '../utils';
import { Aircraft, GetAircraft, } from '../types';1;
import onAirRequest, { AircraftApiResponse } from './onAirRequest';

const endPoint = 'airports/';

export const getAircraftAtAirport:GetAircraft = async (icao: string, apiKey: string):Promise<Aircraft> => {
    if (!icao) throw new Error('No ICAO code provided');
    if (!apiKey) throw new Error('No Api Key provided');
    if (!isValidGuid(apiKey)) throw new Error('Invalid Api Key provided');

    try {

        const response = await onAirRequest<AircraftApiResponse>(
            `https://server1.onair.company/api/v1/${endPoint}${icao}/aircraft`,
            apiKey,
        );

        if (typeof response.data.Content !== 'undefined') {
            return response.data.Content as Aircraft;
        } else {
            throw new Error(response.data.Error ? response.data.Error : `Aircraft ICAO code ${icao.toUpperCase()} not found`);
        }
    } catch (e) {
        throw new Error(e.message);
    }
};
