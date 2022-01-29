export interface CashFlowEntry {
    Id: string,
    CompanyId: string,
    AccountId: string,
    Amount: number,
    CreationDate: string,
    Description: string,
    CarryFowarad: string,
}

export interface CashFlow {
    Entries: CashFlowEntry[],
    CompanyCurrentCash: number,
    LastReportAmount: number,
    LastReportDate: string,
}
