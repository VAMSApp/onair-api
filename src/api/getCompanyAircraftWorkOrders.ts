import { GetCompanyAircraftWorkOrders, WorkOrder, } from '../types';
import onAirRequest, { WorkOrderApiResponse } from './onAirRequest';
import { isValidGuid } from '../utils';

const endPoint = 'company/';

export const getCompanyAircraftWorkOrders:GetCompanyAircraftWorkOrders = async (companyId: string, aircraftId: string, apiKey: string):Promise<WorkOrder[]> => {
    if (!companyId) throw new Error('No Company Id provided');
    if (!aircraftId) throw new Error('No Aircraft Id provided');
    if (!apiKey) throw new Error('No Api Key provided');

    if (!isValidGuid(companyId)) throw new Error('Invalid Company ID format provided');
    if (!isValidGuid(aircraftId)) throw new Error('Invalid Aircraft ID format provided');
    if (!isValidGuid(apiKey)) throw new Error('Invalid Api Key format provided');

    try {
        const response = await onAirRequest<WorkOrderApiResponse>(
            `https://server1.onair.company/api/v1/${endPoint}${companyId}/workorders/${aircraftId}`,
            apiKey,
        );

        if (typeof response.data.Content !== 'undefined') {
            return response.data.Content as WorkOrder[];
        } else {
            const msg = (response.data.Error) ? response.data.Error : 'Company or Aircraft Id not found';
            throw new Error(msg);
        }
    } catch (e) {
        const msg = (e.response.status === 400) ? 'Company or Aircraft Id not found' : e.message;
        throw new Error(msg);
    }
};
