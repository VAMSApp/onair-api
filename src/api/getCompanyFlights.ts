import { Flight } from '../types';
import onAirRequest, { FlightResponse } from './onAirRequest';

const endPoint = 'company/';

export const getCompanyFlights = async (companyId: string, apiKey: string, world: string, page=1, limit=10) => {
    const startIndex = page > 1 ? limit * page : 0;
  
    try {
        const response = await onAirRequest<FlightResponse>(
            `https://${world}.onair.company/api/v1/${endPoint}${companyId}/flights`,
            apiKey, {
                startIndex: startIndex,
                limit: limit
            }
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