import { BalanceSheet } from '../types';
import onAirRequest, { BalanceSheetResponse } from './onAirRequest';

const endPoint = 'company/';

export const getCompanyBalanceSheet = async (companyId: string, apiKey: string, world: string) => {

    try {
        const response = await onAirRequest<BalanceSheetResponse>(
            `https://server1.onair.company/api/v1/${endPoint}${companyId}/balancesheet`,
            apiKey
        );

        if (typeof response.data.Content !== 'undefined') {
            return response.data.Content as BalanceSheet;
        } else {
            throw new Error(response.data.Error ? response.data.Error : `Company Id "${companyId}"" not found`);
        }
    } catch (e) {
        throw new Error(e.response.status === 400 ? `Company Id "${companyId}"" not found` : e.message);
    }
};
