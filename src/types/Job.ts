import { Company, } from './Company';
import { World } from './World';
import { Cargo } from './Cargo';
import { Charter } from './Charter';

export interface MissionType {
    Id: string,
    Name: string,
    ShortName: string,
    Description: string,
    BaseReputationImpact: boolean,
    BasePayFactor: boolean,
    BasePenalityFactor: boolean,
}

export interface Job {
    Id: string,
    WorldId: string,
    Cargos: Cargo[],
    Charters: Charter[],
    MissionTypeId: string,
    MissionType: MissionType,
    MainAirportId: string,
    BaseAirportId: string,
    ValuePerLbsPerDistance: number,
    IsGoodValue: boolean,
    MaxDistance: number,
    TotalDistance: number
    MainAirportHeading: number
    Description: string,
    ExpirationDate: string,
    Pay: number,
    PayCompanyBonus: number,
    Penality: number,
    ReputationImpact: number,
    CompanyId: string,
    CreationDate: string,
    TakenDate: string,
    TotalCargoTransported: number,
    TotalPaxTransported: number,
    Category: number,
    State: number,
    XP: number,
    SkillPoint: number,
    MinCompanyReput: number,
    Hash: string,
    RealPay: number,
    RealPenality: number,
    CanAccess: boolean,
    IsLastMinute: boolean,
    IsFavorited: boolean,
}