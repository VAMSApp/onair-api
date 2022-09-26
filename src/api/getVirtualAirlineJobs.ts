import { Job } from '../types';
import onAirRequest, { VirtualAirlineJobResponse } from './onAirRequest';

const endPoint = 'company/';

export const getVirtualAirlineJobs = async (vaId: string, apiKey: string) => {
    try {
        const response = await onAirRequest<VirtualAirlineJobResponse>(
            `https://server1.onair.company/api/v1/${endPoint}${vaId}/jobs/pending`,
            apiKey
        );

        if (typeof response.data.Content !== 'undefined') {
            return response.data.Content as Job[];
        } else {
            throw new Error(response.data.Error ? response.data.Error : `VA Id "${vaId}"" not found`);
        }
    } catch (e) {
        throw new Error(e.response.status === 400 ? `VA Id "${vaId}" not found` : e.message);
    }
};
