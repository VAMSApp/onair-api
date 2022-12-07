import { GetVirtualAirlineShareHolders, ShareHolder } from '../types';
import onAirRequest, { VirtualAirlineShareHolderApiResponse } from './onAirRequest';
import { isValidGuid } from '../utils';

const endPoint = 'va/';

export const getVirtualAirlineShareHolders:GetVirtualAirlineShareHolders = async (vaId: string, apiKey: string) => {
    if (!vaId) throw new Error('No VA Id provided');
    if (!apiKey) throw new Error('No Api Key provided');
    if (!isValidGuid(vaId)) throw new Error('Invalid VA Id provided');
    if (!isValidGuid(apiKey)) throw new Error('Invalid Api Key provided');

    try {

        const response = await onAirRequest<VirtualAirlineShareHolderApiResponse>(
            `https://server1.onair.company/api/v1/${endPoint}${vaId}/shareholders`,
            apiKey
        );

        if (typeof response.data.Content !== 'undefined') {
            return response.data.Content as ShareHolder[];
        } else {
            throw new Error(response.data.Error ? response.data.Error : `VA Id "${vaId}"" not found`);
        }
    } catch (e) {
        throw new Error(e.response.status === 400 ? `VA Id "${vaId}" not found` : e.message);
    }
};
