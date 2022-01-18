export declare const getAircraft: (aircraftId: string, apiKey: string, world: string) => Promise<import("../types/Aircraft").Aircraft>;
export declare const getAircraftFlights: (aircraftId: string, apiKey: string, world: string, page?: number, limit?: number) => Promise<import("../types/Flight").Flight[]>;
export declare const getAirport: (icao: string, apiKey: string, world: string) => Promise<import("../types/Airport").Airport>;
export declare const getCompanyFbos: (companyId: string, apiKey: string, world: string) => Promise<import("../types/Fbo").Fbo[]>;
export declare const getCompanyFleet: (companyId: string, apiKey: string, world: string) => Promise<import("../types/Aircraft").Aircraft[]>;
export declare const getCompanyFlights: (companyId: string, apiKey: string, world: string, page?: number, limit?: number) => Promise<import("../types/Flight").Flight[]>;
export declare const getCompany: (companyId: string, apiKey: string, world: string) => Promise<import("../types/Company").Company>;
export declare const getFlight: (flightId: string, apiKey: string, world: string) => Promise<import("../types/Flight").Flight>;
declare const _default: {
    getCompany: (companyId: string, apiKey: string, world: string) => Promise<import("../types/Company").Company>;
    getCompanyFleet: (companyId: string, apiKey: string, world: string) => Promise<import("../types/Aircraft").Aircraft[]>;
    getAircraft: (aircraftId: string, apiKey: string, world: string) => Promise<import("../types/Aircraft").Aircraft>;
    getAircraftFlights: (aircraftId: string, apiKey: string, world: string, page?: number, limit?: number) => Promise<import("../types/Flight").Flight[]>;
    getAirport: (icao: string, apiKey: string, world: string) => Promise<import("../types/Airport").Airport>;
    getCompanyFbos: (companyId: string, apiKey: string, world: string) => Promise<import("../types/Fbo").Fbo[]>;
    getCompanyFlights: (companyId: string, apiKey: string, world: string, page?: number, limit?: number) => Promise<import("../types/Flight").Flight[]>;
    getFlight: (flightId: string, apiKey: string, world: string) => Promise<import("../types/Flight").Flight>;
};
export default _default;
