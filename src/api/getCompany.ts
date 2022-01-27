import { Company } from '../types';
import onAirRequest, { CompanyResponse } from './onAirRequest';

const endPoint = 'company/';

export const getCompany = async (companyId: string, apiKey: string, world: string) => {
    try {
        const response = await onAirRequest<CompanyResponse>(
            `https://${world}.onair.company/api/v1/${endPoint}${companyId}`,
            apiKey
        );

        if (typeof response.data.Content !== 'undefined') {
            return response.data.Content as Company;
        } else {
            throw new Error(response.data.Error ? response.data.Error : `Company Id "${companyId}"" not found`);
        }
    } catch (e) {
        throw new Error(e.response.status === 400 ? `Company Id "${companyId}"" not found` : e.message);
    }
};