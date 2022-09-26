import { Aircraft } from '../types';
import onAirRequest, { VirtualAirlineFleetResponse } from './onAirRequest';

const endPoint = 'company/';

export const getVirtualAirlineFleet = async (vaId: string, apiKey: string) => {
    try {
        const response = await onAirRequest<VirtualAirlineFleetResponse>(
            `https://server1.onair.company/api/v1/${endPoint}${vaId}/fleet`,
            apiKey
        );

        if (typeof response.data.Content !== 'undefined') {
            return response.data.Content as Aircraft[];
        } else {
            throw new Error(response.data.Error ? response.data.Error : `VA Id "${vaId}"" not found`);
        }
    } catch (e) {
        throw new Error(e.response.status === 400 ? `VA Id "${vaId}" not found` : e.message);
    }
};
