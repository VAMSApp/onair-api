import { Flight } from '../types';
import onAirRequest, { VirtualAirlineFlightResponse } from './onAirRequest';

const endPoint = 'company/';

export const getVirtualAirlineFlights = async (vaId: string, apiKey: string) => {
    try {
        const response = await onAirRequest<VirtualAirlineFlightResponse>(
            `https://server1.onair.company/api/v1/${endPoint}${vaId}/flights`,
            apiKey
        );

        if (typeof response.data.Content !== 'undefined') {
            return response.data.Content as Flight[];
        } else {
            throw new Error(response.data.Error ? response.data.Error : `VA Id "${vaId}"" not found`);
        }
    } catch (e) {
        throw new Error(e.response.status === 400 ? `VA Id "${vaId}" not found` : e.message);
    }
};
