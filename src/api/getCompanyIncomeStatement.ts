import { IncomeStatement } from '../types';
import onAirRequest, { IncomeStatementResponse } from './onAirRequest';

const endPoint = 'company/';

export const getCompanyIncomeStatement = async (startDate: string, endDate: string, companyId: string, apiKey: string) => {
    try {
        const response = await onAirRequest<IncomeStatementResponse>(
            `https://server1.onair.company/api/v1/${endPoint}${companyId}/incomestatement?startDate=${startDate}&endDate=${endDate}`,
            apiKey
        );

        if (typeof response.data.Content !== 'undefined') {
            return response.data.Content as IncomeStatement;
        } else {
            throw new Error(response.data.Error ? response.data.Error : `Company Id "${companyId}"" not found`);
        }
    } catch (e) {
        throw new Error(e.response.status === 400 ? `Company Id "${companyId}"" not found` : e.message);
    }
};
