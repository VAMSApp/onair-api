import { Aircraft } from "./Aircraft";
import { Airport } from "./Airport";
import { Company } from "./Company";

/*
From OnAir Company Discord

on the Flights endpoint
    - Category
        0 = Free
        1 = Checkride,
        2 = TestFlight
    - Engine*Status
        0 = NotBroken,
        1 = BrokenByPilot,
        2 = BrokenByEngineCondition
    - RegisterState
        0 = Not registered
        9 = Registered
        in between values should not be affected ever, there are internal statuses
*/

export interface Flight {
  Id: string,
  AircraftAddonId: string,
  AircraftAddon: Record<string, unknown>,
  AircraftId: string,
  Aircraft: Aircraft,
  CompanyId: string,
  Company: Company,
  DepartureAirportId: string,
  DepartureAirport: Airport,
  ArrivalIntendedAirportId: string,
  ArrivalIntendedAirport: Airport,
  ArrivalAlternateAirportId: string,
  ArrivalActualAirportId: Airport,
  ArrivalActualAirport: Airport,
  Registered: boolean,
  Category: number,
  ResultComments: string,
  StartTime: string,
  EngineOnTime: string,
  EngineOffTime: string,
  AirborneTime: string,
  LandedTime: string,
  IntendedFlightLevel: number,
  Passengers: number,
  Cargo: number,
  AddedFuelQty: number,
  IsAI: boolean,
  VerticalSpeedAtTouchdownMpS: number,
  MaxGForce: number,
  MinGForce: number,
  MaxBank: number,
  MaxPitch: number,
  HasStalled: boolean,
  HasOverspeeded: boolean,
  Engine1Status: number,
  Engine2Status: number,
  Engine3Status: number,
  Engine4Status: number,
  Engine5Status: number,
  Engine6Status: number,
  FlightCrews: Record<string, unknown>[],
  XPFlight: number,
  XPFlightBonus: number,
  XPMissions: number,
  CargosTotalWeight: number,
  PAXCount: number,
  AircraftCurrentFOB: number,
  AircraftCurrentAltitude: number,
  ActualCruiseAltitude: number,
  ActualConsumptionAtCruiseLevelInLbsPerHour: number,
  ActualTotalFuelConsumptionInLbs: number,
  ActualConsumptionAtCruiseLevelInGalPerHour: number,
  ActualTASAtCruiseLevel: number,
  ActualCruiseTimeInMinutes: number,
  ActualPressureAltitude: number,
  RegisterState: 0 | 9,
  WrongFuelDetected: boolean,
  WrongWeightDetected: boolean,
  TimeOffset: number,
  StartLatitude: number,
  StartLongitude: number,
  StartHeading: number,
  CanResumeOrAbort: boolean,
  EngineOnRealTime: string,
  EngineOffRealTime: string;
}