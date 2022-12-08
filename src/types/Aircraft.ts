import { any } from 'async';
import { Airport, Company, } from '.';

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

export interface AircraftEngine {
    Id: string; //  "cd263f83-6f53-45c2-93b2-2294c726b73d",
    AircraftId: string; //  "78376bac-ee9d-4048-9699-04f20a9ee062",
    Number: number; //  1,
    Condition: number; //  0.93896211666666662,
    MaxCondition: number; //  0.99796540388888888,
    EngineHours: number; //  1547.8649027777778,
    LastCheckup: string; //  "2022-10-23T12:15:08.147"
}

export interface AircraftStatus {
  Id: number,
  Name: string
}

export interface EngineType {
  Id: string,
  AircraftId: string,
  Number: number,
  Condition: number,
  MaxCondition: number,
  EngineHours: number,
  LastCheckup: string
}

export interface AircraftClass {
  Id: string,
  ShortName: string,
  Name: string,
  Order: number
}

export interface AircraftType {
  Id: string,
  Hash: string,
  AircraftClassId: string,
  AircraftClass: AircraftClass,
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
  EngineTypeName: string, // custom onair-api
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
  TestedByUser: boolean
}

export interface AircraftAddon {
  Id: string,
  Hash: string,
  AircraftTypeId: string,
  AircraftType: AircraftType,
  CreationDate: string,
  LastModerationDate: string,
  FuelTotalCapacityInGallons: number,
  DisplayName: string,
  TypeName: string,
  AirFileName: string,
  simulatorVersion: number,
  emptyWeight: number,
  maximumGrossWeight: number,
  estimatedCruiseFF: number,
  engineType: number,
  numberOfEngines: number,
  fuelType: number,
  designSpeedVS0: number,
  designSpeedVS1: number,
  designSpeedVC: number,
  IsDisabled: boolean,
  AddonUrl: string,
  IsVanilla: boolean,
  CreatedByUserId: string,
  TestedByUser: boolean,
  LastTestFlightDate: string,
  ConsolidatedDesignSpeedVC: number ,
  ConsolidatedEstimatedCruiseFF: number,
  EnableAutoConsolidation: boolean,
  ComputedMaxPayload: number,
  ComputedSeats: number,
  ProposedSeats: number,
  ProposedMaxPayload: number,
  FlightsCount: number,
  DisableHardLanding: boolean,
  SimVersionShortDisplay: string,
  SimVersionDisplay: string,
}

export interface Aircraft {
  Id: string,
  AircraftTypeId: string,
  AircraftType: AircraftType,
  Nickname: string,
  WorldId: string,
  CurrentAirportId: string,
  CurrentAirport: Airport,
  AircraftStatus: number,
  AircraftStatusName: string, // custom onair-api
  LastStatusChange: string,
  CurrentStatusDurationInMinutes: number,
  AllowSell: boolean,
  AllowRent: boolean,
  AllowLease: boolean,
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
  Identifier: string,
  Heading: number,
  Longitude: number,
  Latitude: number,
  fuelTotalGallons: number,
  fuelWeight: number,
  loadedWeight: number,
  zeroFuelWeight: number,
  airframeHours: number,
  airframeCondition: number,
  AirframeMaxCondition: number,
  LastAnnualCheckup: string,
  Last100hInspection: string,
  LastWeeklyOwnershipPayment: string,
  LastParkingFeePayment: string,
  IsControlledByAI: boolean,
  HoursBefore100HInspection: number,
  Engines: AircraftEngine[]|any,
  ConfigFirstSeats: number,
  ConfigBusSeats: number,
  ConfigEcoSeats: number,
  SeatsReservedForEmployees: number,
  RemainingMaintenanceWorkHours: number,
  CurrentCompanyId: string,
  CurrentCompanyIdIfAny: string,
  ExtraWeightCapacity: number,
  TotalWeightCapacity: number,
  CurrentSeats: number,
  MustDoMaintenance: boolean
  RentMaxDate: string,
  Altitude: string,
  FlightState: string,
}
