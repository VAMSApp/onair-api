import { Fbo } from '../types/Fbo';
import { config } from '../utils/config';
import onAirRequest, { FboResponse } from './onAirRequest';

const endPoint = 'company/';

export const getCompanyFbos = async (companyId: string, apiKey: string, world: string) => {
  try {
    const response = await onAirRequest<FboResponse>(
      `https://${world}${config.apiUrl}${endPoint}${companyId}/fbos`,
      apiKey
    );

    if (typeof response.data.Content !== 'undefined') {
      return response.data.Content as Fbo[];
    } else {
      throw new Error(response.data.Error ? response.data.Error : `Company Id "${companyId}"" not found`);
    };
  } catch (e) {
    throw new Error(e.response.status === 400 ? `Company Id "${companyId}"" not found` : e.message);
  }
}

export default getCompanyFbos;
