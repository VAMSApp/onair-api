import { GetCompanyNotifications, Notification } from '../types';
import onAirRequest, { CompanyNotificationApiResponse } from './onAirRequest';
import { isValidGuid } from '../utils';

const endPoint = 'company/';

export const getCompanyNotifications:GetCompanyNotifications = async (companyId: string, apiKey: string) => {
    if (!companyId) throw new Error('No Company Id provided');
    if (!apiKey) throw new Error('No Api Key provided');
    if (!isValidGuid(companyId)) throw new Error('Invalid Company Id provided');
    if (!isValidGuid(apiKey)) throw new Error('Invalid Api Key provided');

    try {

        const response = await onAirRequest<CompanyNotificationApiResponse>(
            `https://server1.onair.company/api/v1/${endPoint}${companyId}/notifications`,
            apiKey,
        );

        if (typeof response.data.Content !== 'undefined') {
            return response.data.Content as Notification[];
        } else {
            throw new Error(response.data.Error ? response.data.Error : `VA Id "${companyId}"" not found`);
        }
    } catch (e) {
        console.error(`OnAirApi::getCompanyNotifications() Error getting notifications for VA Id "${companyId}"`, e);
        throw e;
    }
};
