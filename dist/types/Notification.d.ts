export interface Notification {
    Id: string;
    PeopleId: string;
    CompanyId: string;
    IsRead: boolean;
    IsNotification: boolean;
    ZuluEventTime: Date;
    Category: number;
    Action: number;
    Description: string;
    Amount: number;
    AccountId: string;
}
