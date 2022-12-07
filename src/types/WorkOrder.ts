import { Crew, Company, Aircraft, Charter, } from '.';

export interface WorkOrder {
    Id: string,
    AircraftId: string,
    CompanyId: string,
    StartDate: string,
    Name: string,
    Aircraft: Aircraft,
    Company: Company,
    Crews: Crew[] | null,
    Actions: WorkOrderAction[] | null,
    DepartureAirportId: string,
    Status: number,
}

export interface WorkOrderAction {
    Id: string,
    WorkOrderId: string,
    FlyDestinationAirportId: string,
    FlyAlternateAirportId: string,
    Name: string,
    Status: number,
    Order: number,
    FuelToLoadGallons: number,
    DontLoadFuel: boolean,
    Loads: Load[] | null,
    Passengers: Passenger[] | null,
    Step: number,
    WaitingForCargoPAX: boolean,
    FinishedAtAlternate: boolean,
}

export interface Load {
    Id: string,
    WorkOrderActionId: string,
    CharterId: string,
    CargoWeight: number,
    PassengerNumber: number,
    Charter: Charter,
}

export interface Passenger {
    Id: string,
    WorkOrderActionId: string,
    PeopleId: string,
}
