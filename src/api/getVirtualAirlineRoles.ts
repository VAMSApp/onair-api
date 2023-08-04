import { GetVirtualAirlineRoles, VARole, } from '../types';
import onAirRequest, { VirtualAirlineVARoleApiResponse } from './onAirRequest';
import { isValidGuid } from '../utils';

const endPoint = 'va/';

export const getVirtualAirlineRoles:GetVirtualAirlineRoles = async (vaId: string, apiKey: string):Promise<VARole[]> => {
    if (!vaId) throw new Error('No VA Id provided');
    if (!apiKey) throw new Error('No Api Key provided');
    if (!isValidGuid(vaId)) throw new Error('Invalid VA Id provided');
    if (!isValidGuid(apiKey)) throw new Error('Invalid Api Key provided');

    try {

        const response = await onAirRequest<VirtualAirlineVARoleApiResponse>(
            `https://server1.onair.company/api/v1/${endPoint}${vaId}/roles`,
            apiKey,
        );

        if (typeof response.data.Content !== 'undefined') {
            return response.data.Content as VARole[];
        } else {
            throw new Error(response.data.Error ? response.data.Error : `VA Id "${vaId}"" not found`);
        }
    } catch (e) {
        throw new Error(e.response.status === 400 ? `VA Id "${vaId}" not found` : e.message);
    }
};
