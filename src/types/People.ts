import { Airport, Company, } from '.';

export interface ClassCertification {
    Id: string,
    PeopleId: string,
    AircraftClassId: string,
    LastValidation: string,
    Comments: string | undefined
}

export interface People {
    Id: string,
    WorldId: string,
    ClassCertifications: ClassCertification[],
    Pseudo: string,
    CompanyId: string,
    Company: Company,
    FlightHoursTotalBeforeHiring: number,
    FlightHoursInCompany: number
    Weight: number
    BirthDate: string
    Fatigue: number
    Punctuality: number
    Comfort: number
    Happiness: number
    CurrentAirportId: Airport | undefined
    HomeAirportId: string
    HomeAirport: Airport | undefined
    PerFlightHourWages: number
    WeeklyGarantedSalary: number
    PerFlightHourSalary: number
    Category: number
    Status: number
    LastStatusChange: string
    FlightDutyStart: string
    CurrentTotalFlightHoursInDuty: number
    HiredSince: string
    LastPaymentDate: string
    AvatarImageName: string
    IsOnline: boolean
    FlightDutyEnd: string
    FlightHoursGrandTotal: number
    AvatarUrl: string
}
