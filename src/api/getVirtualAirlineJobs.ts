import { GetVirtualAirlineJobs, Job } from '../types';
import onAirRequest, { VirtualAirlineJobApiResponse } from './onAirRequest';
import { isValidGuid } from '../utils';

const endPoint = 'company/';

export const getVirtualAirlineJobs:GetVirtualAirlineJobs = async (vaId: string, apiKey: string, completed = false):Promise<Job[]> => {
    if (!vaId) throw new Error('No VA Id provided');
    if (!apiKey) throw new Error('No Api Key provided');
    if (!isValidGuid(vaId)) throw new Error('Invalid VA Id provided');
    if (!isValidGuid(apiKey)) throw new Error('Invalid Api Key provided');

    try {

        const response = await onAirRequest<VirtualAirlineJobApiResponse>(
            `https://server1.onair.company/api/v1/${endPoint}${vaId}/jobs/${(completed) ? 'completed' : 'pending'}`,
            apiKey,
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
