import { Notification } from '../types';
import onAirRequest, { VirtualAirlineNotificationResponse } from './onAirRequest';

const endPoint = 'company/';

export const getVirtualAirlineNotifications = async (vaId: string, apiKey: string) => {
    try {
        const response = await onAirRequest<VirtualAirlineNotificationResponse>(
            `https://server1.onair.company/api/v1/${endPoint}${vaId}/notifications`,
            apiKey
        );

        if (typeof response.data.Content !== 'undefined') {
            return response.data.Content as Notification[];
        } else {
            throw new Error(response.data.Error ? response.data.Error : `VA Id "${vaId}"" not found`);
        }
    } catch (e) {
        throw new Error(e.response.status === 400 ? `VA Id "${vaId}" not found` : e.message);
    }
};
