import { Aircraft } from './Aircraft';
import { Company } from './Company';
import { People } from './People';
export interface VARole {
    Id: string;
    VAId: string;
    Name: string;
    Permission: number;
    IsDefaultNewRole: boolean;
    Color: string;
    PayPercent: number;
    IsHidden: boolean;
    RestrictLoadingVAJobsIntoNonVAAircraft: boolean;
    RestrictLoadingNonVAJobsIntoVAAircraft: boolean;
    PayWeekly: number;
    PayPerFlightHour: number;
}
export interface VirtualAirline {
    InitalOwnerEquity: number;
    PercentLeftToPilots: number;
    PercentDividendsToDistribute: number;
    LastDividendsDistribution: string;
    ForceAssignJobsToPilots: boolean;
    AutomaticallyAssignJobWhenTaken: boolean;
    AutomaticallyAssignJobWhenLoaded: boolean;
    RestrictLoadingVAJobsIntoNonVAAircraft: boolean;
    RestrictLoadingNonVAJobsIntoVAAircraft: boolean;
    MemberCount: number;
    Id: string;
    WorldId: string;
    Name: string;
    AirlineCode: string;
    LastConnection: string;
    LastReportDate: string;
    Reputation: number;
    CreationDate: string;
    DifficultyLevel: number;
    UTCOffsetinHours: number;
    Paused: boolean;
    Level: number;
    LevelXP: number;
    TransportEmployeeInstant: boolean;
    TransportPlayerInstant: boolean;
    ForceTimeInSimulator: boolean;
    UseSmallAirports: boolean;
    UseOnlyVanillaAirports: boolean;
    EnableSkillTree: boolean;
    CheckrideLevel: number;
    EnableLandingPenalities: boolean;
    EnableEmployeesFlightDutyAndSleep: boolean;
    AircraftRentLevel: number;
    EnableCargosAndChartersLoadingTime: boolean;
    InSurvival: boolean;
    PayBonusFactor: number;
    EnableSimFailures: boolean;
    DisableSeatsConfigCheck: boolean;
    RealisticSimProcedures: boolean;
    TravelTokens: number;
}
export interface Member {
    Id: string;
    VAId: string;
    CompanyId: string;
    Company: Company;
    Aircrafts: Aircraft[];
    Peoples: People[];
    VARoleId: string;
    VARole: VARole;
    TotalCargosTransportedLbs: number;
    TotalPAXsTransported: number;
    TotalEarnedCredits: number;
    TotalSpentCredits: number;
    NumberOfFlights: number;
    FlightHours: number;
    Color: string;
    AcceptChallengeMode: boolean;
    ReputationImpact: number;
    LastWeeklyPay: string;
}
export interface ShareHolder extends Member {
    OwnerEquity: number;
}
