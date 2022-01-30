import { CashFlowEntry } from '.';

export interface ISCashFlowEntry extends CashFlowEntry {
    Id: string,
    Account: Account,
}

export interface ISAccount {
    Name: string,
    ShortName: string,
    Entries: ISCashFlowEntry[]
    Order: number,
    Amount: number
}

export interface Account {
    Id: string,
    ShortName: string,
    Name: string,
    Category: number,
    Order: number,
}

export interface IncomeStatement {
    REVAccounts: ISAccount[],
    EXPAccounts: ISAccount[],
    REVAmount: number,
    EXPAmount: number,
    NetIncomeAmount: number,
}
