import { Company, GetCompany, } from '../types';
import onAirRequest, { CompanyApiResponse } from './onAirRequest';
import { isValidGuid } from '../utils';

const endPoint = 'company/';

export const getCompany:GetCompany = async (companyId: string, apiKey: string) => {
    if (!companyId) throw new Error('No Company Id provided');
    if (!apiKey) throw new Error('No Api Key provided');
    if (!isValidGuid(companyId)) throw new Error('Invalid Company Id provided');
    if (!isValidGuid(apiKey)) throw new Error('Invalid Api Key provided');

    try {

        const response = await onAirRequest<CompanyApiResponse>(
            `https://server1.onair.company/api/v1/${endPoint}${companyId}`,
            apiKey,
        );

        if (typeof response.data.Content !== 'undefined') {
            return response.data.Content as Company;
        } else {
            throw new Error(response.data.Error ? response.data.Error : `Company Id "${companyId}"" not found`);
        }
    } catch (e) {
        console.error(`OnAirApi::getCompany() Error getting Details for Company Id "${companyId}"`, e);
        throw new Error(e);
    }
};
