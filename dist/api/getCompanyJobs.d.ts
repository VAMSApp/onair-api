import { Job } from '../types';
export declare const getCompanyJobs: (companyId: string, apiKey: string, completed?: boolean) => Promise<Job[]>;
