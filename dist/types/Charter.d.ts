import { Airport, Aircraft, Member } from '.';
export interface CharterType {
    Id: string;
    Name: string;
    CharterTypeCategory: number;
    MinPAX: number;
    MaxPAX: number;
}
export interface Charter {
    Id: string;
    MissionId: string;
    CharterTypeId: string;
    CharterType: CharterType;
    CurrentAircraftId?: string;
    CurrentAircraft?: Aircraft;
    CurrentAirportId?: string;
    CurrentAirport?: Airport;
    AssignedToVAMember?: Member;
    PassengersNumber: number;
    DepartureAirportId: string;
    DepartureAirport: Airport;
    DestinationAirportId: string;
    DestinationAirport: Airport;
    Distance: number;
    Heading: number;
    Description: string;
    HumanOnly: boolean;
    CompanyId: string;
    CharterPOIMappings: any;
    InRecyclingPool: boolean;
    MinPAXSeatConf: number;
    BoardedPAXSeat: number;
    MinAircraftTypeLuxe: number;
    RescueValidated: boolean;
    RescueLate: boolean;
}
