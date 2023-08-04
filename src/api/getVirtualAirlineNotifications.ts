import { GetVirtualAirlineNotifications, Notification } from '../types';
import onAirRequest, { VirtualAirlineNotificationApiResponse } from './onAirRequest';
import { isValidGuid } from '../utils';

const endPoint = 'company/';

export const getVirtualAirlineNotifications:GetVirtualAirlineNotifications = async (vaId: string, apiKey: string):Promise<Notification[]> => {
    if (!vaId) throw new Error('No VA Id provided');
    if (!apiKey) throw new Error('No Api Key provided');
    if (!isValidGuid(vaId)) throw new Error('Invalid VA Id provided');
    if (!isValidGuid(apiKey)) throw new Error('Invalid Api Key provided');

    try {

        const response = await onAirRequest<VirtualAirlineNotificationApiResponse>(
            `https://server1.onair.company/api/v1/${endPoint}${vaId}/notifications`,
            apiKey,
        );

        if (typeof response.data.Content !== 'undefined') {
            return response.data.Content as Notification[];
        } else {
            throw new Error(response.data.Error ? response.data.Error : `VA Id "${vaId}"" not found`);
        }
    } catch (e) {
        console.error(`OnAirApi::getVirtualAirlineNotifications() Error getting notifications for VA Id "${vaId}"`, e);
        throw e;
    }
};
