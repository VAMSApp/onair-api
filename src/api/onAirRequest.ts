import axios, { AxiosResponse, AxiosRequestConfig} from 'axios';
import {
    BalanceSheet,
    CashFlow,
    IncomeStatement,
    People,
    Aircraft,
    AircraftType,
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
    Notification,
} from '../types';

interface OnAirApiResponse {
  Error: string;
}

export interface AircraftApiResponse extends OnAirApiResponse {
  Content: Aircraft | Aircraft[];
}

export interface AircraftTypeApiResponse extends OnAirApiResponse {
    Content: AircraftType | AircraftType[] | null;
}

export interface FlightApiResponse extends OnAirApiResponse {
  Content: Flight | Flight[];
}

export interface AirportApiResponse extends OnAirApiResponse {
  Content: Airport;
}

export interface CompanyApiResponse extends OnAirApiResponse {
  Content: Company;
}

export interface FboApiResponse extends OnAirApiResponse {
  Content: Fbo[];
}

export interface JobApiResponse extends OnAirApiResponse {
  Content: Job | Job[];
}

export interface VirtualAirlineApiResponse extends OnAirApiResponse {
  Content: VirtualAirline;
}

export interface VirtualAirlineMemberApiResponse extends OnAirApiResponse {
  Content: Member | Member[];
}

export interface VirtualAirlineShareHolderApiResponse extends OnAirApiResponse {
    Content: ShareHolder | ShareHolder[];
}

export interface VirtualAirlineVARoleApiResponse extends OnAirApiResponse {
    Content: VARole | VARole[];
}

export interface VirtualAirlineFlightApiResponse extends OnAirApiResponse {
    Content: Flight | Flight[];
}

export interface VirtualAirlineFleetApiResponse extends OnAirApiResponse {
    Content: Aircraft | Aircraft[];
}

export interface VirtualAirlineJobApiResponse extends OnAirApiResponse {
    Content: Job | Job[];
}

export interface VirtualAirlineFboApiResponse extends OnAirApiResponse {
    Content: Fbo | Fbo[];
}

export interface PeopleApiResponse extends OnAirApiResponse {
  Content: People | People[]
}

export interface CashFlowApiResponse extends OnAirApiResponse {
    Content: CashFlow | CashFlow[]
}
export interface IncomeStatementApiResponse extends OnAirApiResponse {
    Content: IncomeStatement | IncomeStatement[]
}

export interface BalanceSheetApiResponse extends OnAirApiResponse {
    Content: BalanceSheet
}

export interface FlightTrackApiResponse extends OnAirApiResponse {
    Content: FlightTrack | FlightTrack[]
}

export interface WorkOrderApiResponse extends OnAirApiResponse {
    Content: WorkOrder | WorkOrder[]
}

export type VirtualAirlineNotificationApiResponse = NotificationApiResponse

export type CompanyNotificationApiResponse = NotificationApiResponse

export interface NotificationApiResponse extends OnAirApiResponse {
    Content: Notification | Notification[]
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
            'oa-apikey': apiKey.toString(),
            'Accept': 'application/json',
            'User-Agent': `onair-api middleware for OnAir Company v${process.env.npm_package_version}`
        },
    };

    if (typeof requestData !== 'undefined') {
        axiosConfig.params = requestData;
    }

    return await axios.get<T>(url, axiosConfig);
};
