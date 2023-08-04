import { Flight, GetCompanyFlights, QueryOptions, } from '../types';
import onAirRequest, { FlightApiResponse } from './onAirRequest';
import { isValidGuid } from '../utils';

const endPoint = 'company/';

export const getCompanyFlights:GetCompanyFlights = async (companyId: string, apiKey: string, page=1, limit?:number):Promise<Flight[]> => {
    if (!companyId) throw new Error('No Company Id provided');
    if (!apiKey) throw new Error('No Api Key provided');
    if (!isValidGuid(companyId)) throw new Error('Invalid Company Id provided');
    if (!isValidGuid(apiKey)) throw new Error('Invalid Api Key provided');
    const startIndex = (typeof limit !== 'undefined') ? (page > 1) ? limit * page : 0 : 0;
    const queryOpts:QueryOptions = {};

    try {
        
        if (typeof startIndex !== 'undefined') {
            queryOpts.startIndex = startIndex;
        }

        if (typeof limit !== 'undefined') {
            queryOpts.limit = limit;
        }

        const response = await onAirRequest<FlightApiResponse>(
            `https://server1.onair.company/api/v1/${endPoint}${companyId}/flights`,
            apiKey, {
                startIndex: startIndex,
                limit: limit
            },
        );

        if (typeof response.data.Content !== 'undefined') {
            return response.data.Content as Flight[];
        } else {
            throw new Error(response.data.Error ? response.data.Error : `Company Id "${companyId}"" not found`);
        }
    } catch (e) {
        throw new Error(e.response.status === 400 ? `Company Id "${companyId}"" not found` : e.message);
    }
};
