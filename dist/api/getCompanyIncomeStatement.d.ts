import { IncomeStatement } from '../types';
export declare const getCompanyIncomeStatement: (startDate: string, endDate: string, companyId: string, apiKey: string) => Promise<IncomeStatement>;
