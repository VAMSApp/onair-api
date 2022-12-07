import { CashFlowEntry, } from '.';

export interface ISCashFlowEntry extends CashFlowEntry {
    Id: string,
    Account: CFAccount,
}

export interface Account {
    Name: string,
    ShortName: string,
    Entries: ISCashFlowEntry[]
    Order: number,
    Amount: number
}

export interface CFAccount {
    Id: string,
    ShortName: string,
    Name: string,
    Category: number,
    Order: number,
}

export interface IncomeStatement {
    REVAccounts: Account[],
    EXPAccounts: Account[],
    REVAmount: number,
    EXPAmount: number,
    NetIncomeAmount: number,
}
