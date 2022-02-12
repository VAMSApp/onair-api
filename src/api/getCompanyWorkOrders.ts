import { WorkOrder, } from '../types';
import onAirRequest, { WorkOrderResponse } from './onAirRequest';


export const getCompanyWorkOrders = async (companyId: string, apiKey: string) => {

    try {
        const response = await onAirRequest<WorkOrderResponse>(
            `https://server1.onair.company/api/v1/company/${companyId}/workorders`,
            apiKey
        );

        if (typeof response.data.Content !== 'undefined') {
            return response.data.Content as WorkOrder[];
        } else {
            throw new Error(response.data.Error ? response.data.Error : `Company Id "${companyId}"" not found`);
        }
    } catch (e) {
        throw new Error(e.response.status === 400 ? `Company Id "${companyId}"" not found` : e.message);
    }
};
