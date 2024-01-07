import { AircraftType } from './Aircraft';

export interface EconomicDetail {
    AircraftType: AircraftType,
    LowestCargoPayCrPerLbsPerNM: number;
    OperationalPayloadLbs: number;
    AverageCruiseSpeedKts: number;
    AverageWeeklyFlightHours: number;
    AverageAnnualFlightHours: number;
    AverageWeeklyFlightHoursCompressed: number;
    AverageAnnualFlightHoursCompressed: number;
    CostHourlyFuel: number;
    CostHourlyCrew: number;
    HourlyProfit: number;
    AverageDeltaConditionPerFlightHour: number;
    CostAirframeRepair1P: number;
    CostEngineRepair1P: number;
    CostHourlyAirframeRepair: number;
    CostHourlyEnginesRepair: number;
    Cost100HInspection: number;
    CostAnnualCheckup: number;
    CostHourly100HInspection: number;
    CostHourlyAnnualCheckup: number;
    CostHourlyTotalMaintenance: number;
    CostHourlyRentalFee: number;
    CostHourlyRentTotal: number;
    CostWeeklyLease: number;
    CostHourlyLease: number;
    ProfitHourlyLease: number;
    CostWeeklyOwning: number;
    CostHourlyOwning: number;
    ProfitHourlyOwning: number;
}
