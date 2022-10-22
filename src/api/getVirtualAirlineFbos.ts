import { Fbo } from '../types';
import onAirRequest, { VirtualAirlineFboResponse } from './onAirRequest';

const endPoint = 'company/';

export const getVirtualAirlineFbos = async (vaId: string, apiKey: string) => {
    try {
        const response = await onAirRequest<VirtualAirlineFboResponse>(
            `https://server1.onair.company/api/v1/${endPoint}${vaId}/fbos`,
            apiKey
        );

        if (typeof response.data.Content !== 'undefined') {
            return response.data.Content as Fbo[];
        } else {
            throw new Error(response.data.Error ? response.data.Error : `VA Id "${vaId}"" not found`);
        }
    } catch (e) {
        throw new Error(e.response.status === 400 ? `VA Id "${vaId}"" not found` : e.message);
    }
};
