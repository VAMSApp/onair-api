import { Airport } from "./Airport";
import { Company } from "./Company";

interface World {
  Id: string,
  Name: string,
  IsSurvival: boolean,
  IsHumanOnly: boolean,
  Fuel100LLBasePrice: number,
  FuelJetBasePrice: number,
  JobsBaseBonus: number,
  JobsMaxBonus: number,
  ShortName: string,
  EnableEconomicBalance: boolean;
}

export interface Fbo {
  Id: string,
  CompanyId: string,
  Company: Company,
  WorldId: string,
  World: World,
  Airport: Airport, //use 
  AirportId: string,
  Name: string, //use
  CargoWeightCapacity: number,
  Fuel100LLCapacity: number,
  FuelJetCapacity: number,
  SleepingCapacity: number,
  AircraftTieDownCapacity: number, //use
  AircraftHangarCapacity: number, //use
  Fuel100LLQuantity: number,
  FuelJetQuantity: number,
  Fuel100LLSellPrice: number,
  FuelJetSellPrice: number,
  AllowFuel100LLSelling: boolean,
  AllowFuelJetSelling: boolean,
  AllowWorkshopSelling: boolean,
  MarkupWorkshopSelling: number,
  WorkshopSEP: boolean,
  WorkshopMEP: boolean,
  WorkshopTurboProp: boolean,
  WorkshopJet: boolean,
  WorkshopHeavyJet: boolean,
  WorkshopHelicopter: boolean,
  WorkshopAnnualSEP: boolean,
  WorkshopAnnualMEP: boolean,
  WorkshopAnnualTurboProp: boolean,
  WorkshopAnnualJet: boolean,
  WorkshopAnnualHeavyJet: boolean,
  WorkshopAnnualHelicopter: boolean,
  WorkshopConstructionEndDate: string,
  CargoConstructionEndDate: string,
  Fuel100LLConstructionEndDate: string,
  FuelJetConstructionEndDate: string,
  SleepingConstructionEndDate: string,
  AircraftTieDownConstructionEndDate: string,
  AircraftHangarConstructionEndDate: string,
  Fuel100LLOrderedQuantity: boolean,
  FuelJetOrderedQuantity: number,
  FuelDeliveryDate: string,
  FuelJetOrderedCapacity: number,
  Fuel100LLOrderedCapacity: number,
  CargoOrderedCapacity: number,
  SleepingOrderedCapacity: number,
  AircraftHangarOrderedCapacity: number,
  AircraftTieDownOrderedCapacity: number,
  WorkshopUnderConstruction: boolean,
  LastWeeklyOwnershipPaymentDate: string,
  LastConstructionEndDate: string;
}