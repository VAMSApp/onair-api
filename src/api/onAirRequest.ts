import axios, { AxiosResponse, AxiosRequestConfig} from 'axios';
import {
    BalanceSheet,
    CashFlow,
    IncomeStatement,
    People,
    Aircraft,
    Airport,
    Company,
    Fbo,
    Flight,
    FlightTrack,
    Job,
    Member,
    ShareHolder,
    VARole,
    VirtualAirline,
    WorkOrder,
} from '../types';

interface OnAirResponse {
  Error: string;
}

export interface AircraftResponse extends OnAirResponse {
  Content: Aircraft | Aircraft[];
}

export interface FlightResponse extends OnAirResponse {
  Content: Flight | Flight[];
}

export interface AirportResponse extends OnAirResponse {
  Content: Airport;
}

export interface CompanyResponse extends OnAirResponse {
  Content: Company;
}

export interface FboResponse extends OnAirResponse {
  Content: Fbo[];
}

export interface JobResponse extends OnAirResponse {
  Content: Job | Job[];
}

export interface VirtualAirlineResponse extends OnAirResponse {
  Content: VirtualAirline;
}
export interface VirtualAirlineMemberResponse extends OnAirResponse {
  Content: Member | Member[];
}

export interface VirtualAirlineShareHolderResponse extends OnAirResponse {
    Content: ShareHolder | ShareHolder[];
}

export interface VirtualAirlineVARoleResponse extends OnAirResponse {
    Content: VARole | VARole[];
}

export interface VirtualAirlineFlightResponse extends OnAirResponse {
    Content: Flight | Flight[];
}

export interface VirtualAirlineFleetResponse extends OnAirResponse {
    Content: Aircraft | Aircraft[];
}

export interface VirtualAirlineJobResponse extends OnAirResponse {
    Content: Job | Job[];
}

export interface VirtualAirlineFboResponse extends OnAirResponse {
    Content: Fbo | Fbo[];
}

export interface PeopleResponse extends OnAirResponse {
  Content: People | People[]
}

export interface CashFlowResponse extends OnAirResponse {
    Content: CashFlow | CashFlow[]
}
export interface IncomeStatementResponse extends OnAirResponse {
    Content: IncomeStatement | IncomeStatement[]
}

export interface BalanceSheetResponse extends OnAirResponse {
    Content: BalanceSheet
}

export interface FlightTrackResponse extends OnAirResponse {
    Content: FlightTrack | FlightTrack[]
}

export interface WorkOrderResponse extends OnAirResponse {
    Content: WorkOrder | WorkOrder[]
}



/**
 * Generic Get request to OnAir
 *
 * @param url
 * @param apiKey
 * @param requestData
 * @returns Promise<AxiosResponse<T>>
 */
export default async <T>(url: string, apiKey: string, requestData?: Record<string, unknown> | undefined): Promise<AxiosResponse<T>> => {
    const axiosConfig: AxiosRequestConfig = {
        headers: {
            'oa-apikey': apiKey,
            'Accept': 'application/json',
            'User-Agent': `onair-api middleware for OnAir Company v${process.env.npm_package_version}`
        },
    };
    if (typeof requestData !== 'undefined') {
        axiosConfig.params = requestData;
    }
    return await axios.get<T>(url, axiosConfig);
};
