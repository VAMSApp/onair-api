import { Company } from '../types/Company';
export declare const getCompany: (companyId: string, apiKey: string, world: string) => Promise<Company>;
export default getCompany;
