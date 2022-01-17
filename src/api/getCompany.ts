import { Company } from '../types/Company';
import { config } from '../utils/config';
import onAirRequest, { CompanyResponse } from './onAirRequest';

const endPoint = 'company/';

export const getCompany = async (companyId: string, apiKey: string, world: string) => {
  try {
    const response = await onAirRequest<CompanyResponse>(
      `https://${world}${config.apiUrl}${endPoint}${companyId}`,
      apiKey
    );

    if (typeof response.data.Content !== 'undefined') {
      return response.data.Content as Company;
    } else {
      throw new Error(response.data.Error ? response.data.Error : `Company Id "${companyId}"" not found`);
    };
  } catch (e) {
    throw new Error(e.response.status === 400 ? `Company Id "${companyId}"" not found` : e.message);
  }
}

export default getCompany;