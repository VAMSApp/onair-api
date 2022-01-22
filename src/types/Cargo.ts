import { Airport } from './Airport';

export interface CargoType {
    Id: string,
    Name: string,
    CargoTypeCategory: number,
    MinLbs: number,
    MaxLabs: number,
}

export interface Cargo {
    Id: string,
    MissionId: string,
    CargoTypeId: string,
    CargoType: CargoType,
    CurrentAirportId: string,
    CurrentAirport: Airport,
    Weight: number,
    DepartureAirportId: string,
    DepartureAirport: Airport,
    DestinationAirportId: string,
    DestinationAirport: Airport,
    Distance: number,
    Heading: number,
    Description: string,
    HumanOnly: boolean,
    CompanyId: string,
    InRecyclingPool: boolean,
    RaceValidated: boolean,
    IsInHangar: boolean,
    RescueValidated: boolean,
    RescueLate: boolean,
}