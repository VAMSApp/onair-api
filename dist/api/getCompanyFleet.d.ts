import { Aircraft } from '../types/Aircraft';
export declare const getCompanyFleet: (companyId: string, apiKey: string, world: string) => Promise<Aircraft[]>;
export default getCompanyFleet;
