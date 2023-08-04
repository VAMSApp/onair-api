import { GetVirtualAirline, VirtualAirline } from '../types';
import onAirRequest, { VirtualAirlineApiResponse } from './onAirRequest';
import { isValidGuid } from '../utils';

const endPoint = 'va/';

export const getVirtualAirline:GetVirtualAirline = async (vaId: string, apiKey: string):Promise<VirtualAirline|null> => {
    if (!vaId) throw new Error('No VA Id provided');
    if (!apiKey) throw new Error('No Api Key provided');
    if (!isValidGuid(vaId)) throw new Error('Invalid VA Id provided');
    if (!isValidGuid(apiKey)) throw new Error('Invalid Api Key provided');

    try {

        const response = await onAirRequest<VirtualAirlineApiResponse>(
            `https://server1.onair.company/api/v1/${endPoint}${vaId}`,
            apiKey,
        );

        if (typeof response.data.Content !== 'undefined') {
            // Logger.debug('OnAirApi::getVirtualAirline() results received');
            return response.data.Content as VirtualAirline;
        } else {
            const err = response.data.Error ? response.data.Error : `VA Id "${vaId}"" not found`;
            throw new Error(err);
        }

    } catch (e) {
        console.error(`OnAirApi::getVirtualAirline() Error getting Details for VA Id "${vaId}"`, e);
        return null;
    }
};
