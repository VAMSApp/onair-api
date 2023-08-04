import { isValidGuid } from '../utils';
import { Airport, GetAirport, } from '../types';1;
import onAirRequest, { AirportApiResponse } from './onAirRequest';

const endPoint = 'airports/';

export const getAirport:GetAirport = async (icao: string, apiKey: string):Promise<Airport> => {
    if (!icao) throw new Error('No ICAO code provided');
    if (!apiKey) throw new Error('No Api Key provided');
    if (!isValidGuid(apiKey)) throw new Error('Invalid Api Key provided');

    try {

        const response = await onAirRequest<AirportApiResponse>(
            `https://server1.onair.company/api/v1/${endPoint}${icao}`,
            apiKey,
        );

        if (typeof response.data.Content !== 'undefined') {
            return response.data.Content as Airport;
        } else {
            throw new Error(response.data.Error ? response.data.Error : `Airport ICAO code ${icao.toUpperCase()} not found`);
        }
    } catch (e) {
        throw new Error(e.message);
    }
};
