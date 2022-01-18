import axios, { AxiosResponse, AxiosRequestConfig} from "axios";

import { Aircraft } from "../types/Aircraft";
import { Airport } from "../types/Airport";
import { Company } from "../types/Company";
import { Fbo } from "../types/Fbo";
import { Flight } from "../types/Flight";


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
      'User-Agent': `CLI for OnAir Company`
    },
  }
  if (typeof requestData !== 'undefined') {
    axiosConfig.params = requestData;
  }
  return await axios.get<T>(url, axiosConfig);
}