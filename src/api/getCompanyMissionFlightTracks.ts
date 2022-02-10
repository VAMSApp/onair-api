import { FlightTrack } from '../types';
import onAirRequest, { FlightTrackResponse } from './onAirRequest';

const endPoint = 'company/';

export const getCompanyMissionFlightTracks = async (companyId: string, apiKey: string) => {

    try {
        const response = await onAirRequest<FlightTrackResponse>(
            `https://server1.onair.company/api/v1/${endPoint}${companyId}/missionflighttracks`,
            apiKey
        );

        if (typeof response.data.Content !== 'undefined') {
            return response.data.Content as FlightTrack[];
        } else {
            throw new Error(response.data.Error ? response.data.Error : `Company Id "${companyId}"" not found`);
        }
    } catch (e) {
        throw new Error(e.response.status === 400 ? `Company Id "${companyId}"" not found` : e.message);
    }
};
