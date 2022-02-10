import { ShareHolder } from '../types';
import onAirRequest, { VirtualAirlineShareHolderResponse } from './onAirRequest';

const endPoint = 'va/';

export const getVirtualAirlineShareHolders = async (vaId: string, apiKey: string) => {
    try {
        const response = await onAirRequest<VirtualAirlineShareHolderResponse>(
            `https://server1.onair.company/api/v1/${endPoint}${vaId}/shareholders`,
            apiKey
        );

        if (typeof response.data.Content !== 'undefined') {
            return response.data.Content as ShareHolder[];
        } else {
            throw new Error(response.data.Error ? response.data.Error : `VA Id "${vaId}"" not found`);
        }
    } catch (e) {
        throw new Error(e.response.status === 400 ? `VA Id "${vaId}" not found` : e.message);
    }
};
