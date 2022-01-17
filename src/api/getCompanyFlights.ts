import { Flight } from '../types/Flight';
import { config } from '../utils/config';
import onAirRequest, { FlightResponse } from './onAirRequest';

const endPoint = 'company/';

export const getCompanyFlights = async (companyId: string, apiKey: string, world: string, page:number=1, limit:number=10) => {
  const startIndex = page > 1 ? limit * page : 0;
  
  try {
    const response = await onAirRequest<FlightResponse>(
      `https://${world}${config.apiUrl}${endPoint}${companyId}/flights`,
      apiKey, {
        startIndex: startIndex,
        limit: limit
      }
    );

    if (typeof response.data.Content !== 'undefined') {
      return response.data.Content as Flight[];
    } else {
      throw new Error(response.data.Error ? response.data.Error : `Company Id "${companyId}"" not found`);
    };
  } catch (e) {
    throw new Error(e.response.status === 400 ? `Company Id "${companyId}"" not found` : e.message);
  }
}

export default getCompanyFlights;