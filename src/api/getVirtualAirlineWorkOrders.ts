import { GetCompanyWorkOrders, WorkOrder, } from '../types';
import onAirRequest, { WorkOrderApiResponse } from './onAirRequest';
import { isValidGuid } from '../utils';

const endPoint = 'company/';

export const getVirtualAirlineWorkOrders:GetCompanyWorkOrders = async (virtualAirlineId: string, apiKey: string):Promise<WorkOrder[]> => {
    if (!virtualAirlineId) throw new Error('No Virtual Airline Id provided');
    if (!apiKey) throw new Error('No Api Key provided');
    if (!isValidGuid(virtualAirlineId)) throw new Error('Invalid Virtual Airline Id provided');
    if (!isValidGuid(apiKey)) throw new Error('Invalid Api Key provided');


    try {

        const response = await onAirRequest<WorkOrderApiResponse>(
            `https://server1.onair.company/api/v1/${endPoint}${virtualAirlineId}/workorders`,
            apiKey,
        );

        if (typeof response.data.Content !== 'undefined') {
            return response.data.Content as WorkOrder[];
        } else {
            throw new Error(response.data.Error ? response.data.Error : `Virtual Airline Id "${virtualAirlineId}"" not found`);
        }
    } catch (e) {
        throw new Error(e.response.status === 400 ? `Virtual Airline Id "${virtualAirlineId}"" not found` : e.message);
    }
};
