import { Flight, GetVirtualAirlineFlights, QueryOptions, } from '../types';
import onAirRequest, { VirtualAirlineFlightApiResponse } from './onAirRequest';
import { isValidGuid } from '../utils';

const endPoint = 'company/';

export const getVirtualAirlineFlights:GetVirtualAirlineFlights = async (vaId: string, apiKey: string, page = 1, limit?:number):Promise<Flight[]> => {
    if (!vaId) throw new Error('No VA Id provided');
    if (!apiKey) throw new Error('No Api Key provided');
    if (!isValidGuid(vaId)) throw new Error('Invalid VA Id provided');
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
        
        const response = await onAirRequest<VirtualAirlineFlightApiResponse>(
            `https://server1.onair.company/api/v1/${endPoint}${vaId}/flights`,
            apiKey, queryOpts,
        );

        if (typeof response.data.Content !== 'undefined') {
            return response.data.Content as Flight[];
        } else {
            throw new Error(response.data.Error ? response.data.Error : `VA Id "${vaId}"" not found`);
        }
    } catch (e) {
        throw new Error(e.response.status === 400 ? `VA Id "${vaId}" not found` : e.message);
    }
};
