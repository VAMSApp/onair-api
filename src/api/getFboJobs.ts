import { GetFboJobs, Job, } from '../types';
import onAirRequest, { JobApiResponse } from './onAirRequest';
import { isValidGuid } from '../utils';

const endPoint = 'fbo/';

export const getFboJobs:GetFboJobs = async (fboId: string, apiKey: string):Promise<Job[]> => {
    if (!fboId) throw new Error('No FBO Id provided');
    if (!apiKey) throw new Error('No Api Key provided');
    if (!isValidGuid(fboId)) throw new Error('Invalid FBO Id provided');
    if (!isValidGuid(apiKey)) throw new Error('Invalid Api Key provided');


    try {

        const response = await onAirRequest<JobApiResponse>(
            `https://server1.onair.company/api/v1/${endPoint}${fboId}/jobs`,
            apiKey,
        );

        if (typeof response.data.Content !== 'undefined') {
            return response.data.Content as Job[];
        } else {
            throw new Error(response.data.Error ? response.data.Error : `FBO Id "${fboId}"" not found`);
        }
    } catch (e) {
        throw new Error(e.response.status === 400 ? `FBO Id "${fboId}"" not found` : e.message);
    }
};
