import onAirRequest, { AircraftResponse } from './onAirRequest';
import { Aircraft } from '../types/Aircraft';
import { config } from '../utils/config';
import { uuid4 } from '../utils/index';

const endPoint = 'aircraft/';

const getAircraft = async (aircraftId: string, apiKey: string, world: string): Promise<Aircraft> => {
  if (!aircraftId.match(uuid4) ) {
    throw new Error('Aircraft ID is incorrect! It should be a 36 character UUID')
  }

  try {
    const response = await onAirRequest<AircraftResponse>(
      `https://${world}${config.apiUrl}${endPoint}${aircraftId}`, 
      apiKey
      );

    if (typeof response.data.Content !== 'undefined') {
      return response.data.Content as Aircraft;
    } else {
      throw new Error(response.data.Error ? response.data.Error : `Aircraft ID code ${aircraftId} not found`);
    };
  } catch (e) {
    throw new Error(e.message);
  }
}

export default getAircraft