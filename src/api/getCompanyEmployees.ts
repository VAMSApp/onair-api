import { People } from '../types';
import onAirRequest, { PeopleResponse } from './onAirRequest';

const endPoint = 'company/';

export const getCompanyEmployees = async (companyId: string, apiKey: string, world: string) => {
    try {
        const response = await onAirRequest<PeopleResponse>(
            `https://${world}.onair.company/api/v1/${endPoint}${companyId}/employees`,
            apiKey
        );

        if (typeof response.data.Content !== 'undefined') {
            return response.data.Content as People[];
        } else {
            throw new Error(response.data.Error ? response.data.Error : `Company Id "${companyId}"" not found`);
        }
    } catch (e) {
        throw new Error(e.response.status === 400 ? `Company Id "${companyId}"" not found` : e.message);
    }
};