import { Airport } from "./Airport";
import { Company } from "./Company";

export const engineTypes:string[] = [
  'Piston',
  'Jet',
  'Sailplane',
  'Helo Turbine',
  'Rocket',
  'Turboprop'
];

export const aircraftStatuses:string[] = [
  'Idle',
  'Maintenance',
  'ApronWork',
  'InFlight',
  'Warp',
  'Ferry'
];

export interface AircraftType {
  Id: string,
  Hash: string,
  AircraftClassId: string,
  AircraftClass: Record<string, unknown>,
  CreationDate: string,
  LastModerationDate: string,
  DisplayName: string, //use
  TypeName: string,
  FlightsCount: number, //use?
  TimeBetweenOverhaul: number,
  HightimeAirframe: number,
  AirportMinSize: number, //use?
  emptyWeight: number,
  maximumGrossWeight: number,
  estimatedCruiseFF: number,
  Baseprice: number,
  FuelTotalCapacityInGallons: number,
  engineType: number, //use? but need info
  numberOfEngines: number,
  seats: number,
  needsCopilot: boolean,
  fuelType: number,
  maximumCargoWeight: number,
  maximumRangeInHour: number,
  maximumRangeInNM: number, //use?
  designSpeedVS0: number,
  designSpeedVS1: number,
  designSpeedVC: number, //use? max speed in knots?
  IsDisabled: boolean,
  LuxeFactor: number,
  StandardSeatWeight: number,
  IsFighter: number,
  AirFileName: string,
  simulatorVersion: number | unknown, //may be a string
  ConsolidatedDesignSpeedVC: number,
  ConsolidatedEstimatedCruiseFF: number,
  EnableAutoConsolidation: boolean,
  AddonEstimatedFuelFlow: number,
  AddonDesignSpeedVC: number,
  ComputedMaxPayload: number,
  ComputedSeats: number,
  IsVanilla: boolean,
  CreatedByUserId: string,
  TestedByUser: boolean;
}

export interface Aircraft {
  Id: string,
  AircraftTypeId: string,
  AircraftType: AircraftType,
  Nickname: string,
  WorldId: string,
  CurrentAirportId: string,
  CurrentAirport: Airport, //use
  AircraftStatus: number, //use
  LastStatusChange: number, //date
  CurrentStatusDurationInMinutes: number,
  AllowSell: boolean,
  AllowRent: boolean,
  SellPrice: number,
  RentHourPrice: number,
  RentAirportId: string,
  RentAirport: Airport,
  RentFuelTotalGallons: number,
  RentCautionAmount: number,
  RentCompanyId: string,
  RentCompany: Company,
  RentStartDate: string,
  RentLastDailyChargeDate: string,
  Identifier: string, //use
  Heading: number,
  Longitude: number,
  Latitude: number,
  fuelTotalGallons: number,
  fuelWeight: number,
  loadedWeight: number,
  zeroFuelWeight: number,
  airframeHours: number,
  airframeCondition: number, //use? pc
  AirframeMaxCondition: number,
  LastAnnualCheckup: string,
  Last100hInspection: string,
  LastWeeklyOwnershipPayment: string,
  LastParkingFeePayment: string,
  IsControlledByAI: boolean,
  HoursBefore100HInspection: number,
  Engines: Record<string, unknown>[],
  ConfigFirstSeats: number, //use?
  ConfigBusSeats: number, //
  ConfigEcoSeats: number, //
  SeatsReservedForEmployees: number,
  RemainingMaintenanceWorkHours: number,
  CurrentCompanyId: string,
  CurrentCompanyIdIfAny: string,
  ExtraWeightCapacity: number,
  TotalWeightCapacity: number,
  CurrentSeats: number, //use?
  MustDoMaintenance: boolean; //
}