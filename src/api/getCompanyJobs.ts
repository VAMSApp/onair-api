import { Job, } from '../types';
import onAirRequest, { JobResponse } from './onAirRequest';


export const getCompanyJobs = async (companyId: string, apiKey: string, world: string) => {
  
    try {
        const response = await onAirRequest<JobResponse>(
            `https://${world}.onair.company/api/v1/company/${companyId}/jobs/pending`,
            apiKey
        );

        if (typeof response.data.Content !== 'undefined') {
            return response.data.Content as Job[];
        } else {
            throw new Error(response.data.Error ? response.data.Error : `Company Id "${companyId}"" not found`);
        }
    } catch (e) {
        throw new Error(e.response.status === 400 ? `Company Id "${companyId}"" not found` : e.message);
    }
};