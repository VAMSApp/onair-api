import { Airport } from '../types/Airport';
import { config } from '../utils/config';
import onAirRequest, { AirportResponse } from './onAirRequest';

const endPoint = 'airports/';

export const getAirport = async (icao: string, apiKey: string, world: string) => {
  try {
    const response = await onAirRequest<AirportResponse>(
      `https://${world}${config.apiUrl}${endPoint}${icao}`,
      apiKey
    );

    if (typeof response.data.Content !== 'undefined') {
      return response.data.Content as Airport;
    } else {
      throw new Error(response.data.Error ? response.data.Error : `Airport ICAO code ${icao.toUpperCase()} not found`);
    };
  } catch (e) {
    throw new Error(e.message);
  }
}

export default getAirport;