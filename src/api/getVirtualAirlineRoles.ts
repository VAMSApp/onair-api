import { VARole } from '../types';
import onAirRequest, { VirtualAirlineVARoleResponse } from './onAirRequest';

const endPoint = 'va/';

export const getVirtualAirlineRoles = async (vaId: string, apiKey: string) => {
    try {
        const response = await onAirRequest<VirtualAirlineVARoleResponse>(
            `https://server1.onair.company/api/v1/${endPoint}${vaId}/roles`,
            apiKey
        );

        if (typeof response.data.Content !== 'undefined') {
            return response.data.Content as VARole[];
        } else {
            throw new Error(response.data.Error ? response.data.Error : `VA Id "${vaId}"" not found`);
        }
    } catch (e) {
        throw new Error(e.response.status === 400 ? `VA Id "${vaId}" not found` : e.message);
    }
};
