import { Account } from './IncomeStatement';
export interface BalanceSheet {
    ASSAccounts: Account[];
    LIAAccounts: Account[];
    ASSAmount: number;
    LIAAmount: number;
    DeltaBalance: number;
}
