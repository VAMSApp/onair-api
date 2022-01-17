import { Aircraft } from '../types/Aircraft';
import { config } from '../utils/config';
import onAirRequest, { AircraftResponse } from './onAirRequest';

const endPoint = 'company/';

export const getCompanyFleet = async (companyId: string, apiKey: string, world: string) => {
  try {
    const response = await onAirRequest<AircraftResponse>(
      `https://${world}${config.apiUrl}${endPoint}${companyId}/fleet`,
      apiKey
    );

    if (typeof response.data.Content !== 'undefined') {
      return response.data.Content as Aircraft[];
    } else {
      throw new Error(response.data.Error ? response.data.Error : `Company Id "${companyId}"" not found`);
    };
  } catch (e) {
    throw new Error(e.response.status === 400 ? `Company Id "${companyId}"" not found` : e.message);
  }
}

export default getCompanyFleet;
