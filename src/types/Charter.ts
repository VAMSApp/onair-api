import { BlobOptions } from "buffer";
import { Airport } from "./Airport";

export interface CharterType {
    Id: string,
    Name: string,
    CharterTypeCategory: number,
    MinPAX: number,
    MaxPAX: number,
}

export interface Charter {
    Id: string,
    MissionId: string,
    CharterTypeId: string,
    CharterType: CharterType,
    CurrentAirportId: string,
    CurrentAirport: Airport,
    PassengersNumber: number,
    DepartureAirportId: String,
    DepartureAirport: Airport,
    DestinationAirportId: string,
    DestinationAirport: Airport,
    Distance: number,
    Heading: number
    Description: string,
    HumanOnly: boolean,
    CompanyId: string,
    CharterPOIMappings: any,
    InRecyclingPool:  boolean,
    MinPAXSeatConf: number,
    BoardedPAXSeat: number,
    MinAircraftTypeLuxe: number,
    RescueValidated: boolean,
    RescueLate: boolean,
}