import { Airport, Aircraft, Member } from '.';
export interface CargoType {
    Id: string;
    Name: string;
    CargoTypeCategory: number;
    MinLbs: number;
    MaxLabs: number;
}
export interface Cargo {
    Id: string;
    MissionId: string;
    CargoTypeId: string;
    CargoType: CargoType;
    CurrentAircraftId?: string;
    CurrentAircraft?: Aircraft;
    CurrentAirportId?: string;
    CurrentAirport?: Airport;
    AssignedToVAMember?: Member;
    Weight: number;
    DepartureAirportId: string;
    DepartureAirport: Airport;
    DestinationAirportId: string;
    DestinationAirport: Airport;
    Distance: number;
    Heading: number;
    Description: string;
    HumanOnly: boolean;
    CompanyId: string;
    InRecyclingPool: boolean;
    RaceValidated: boolean;
    IsInHangar: boolean;
    RescueValidated: boolean;
    RescueLate: boolean;
}
