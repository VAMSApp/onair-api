import { CashFlow, GetCompanyCashFlow, } from '../types';1;
import onAirRequest, { CashFlowApiResponse } from './onAirRequest';
import { isValidGuid } from '../utils';

const endPoint = 'company/';

export const getCompanyCashFlow:GetCompanyCashFlow = async (companyId: string, apiKey: string):Promise<CashFlow> => {
    if (!companyId) throw new Error('No Company Id provided');
    if (!apiKey) throw new Error('No Api Key provided');
    if (!isValidGuid(companyId)) throw new Error('Invalid Company Id provided');
    if (!isValidGuid(apiKey)) throw new Error('Invalid Api Key provided');

    try {

        const response = await onAirRequest<CashFlowApiResponse>(
            `https://server1.onair.company/api/v1/${endPoint}${companyId}/cashflow`,
            apiKey,
        );

        if (typeof response.data.Content !== 'undefined') {
            return response.data.Content as CashFlow;
        } else {
            throw new Error(response.data.Error ? response.data.Error : `Company Id "${companyId}"" not found`);
        }
    } catch (e) {
        throw new Error(e.response.status === 400 ? `Company Id "${companyId}"" not found` : e.message);
    }
};
