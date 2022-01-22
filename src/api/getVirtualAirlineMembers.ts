import { Member } from '../types';
import onAirRequest, { VirtualAirlineMemberResponse } from './onAirRequest';

const endPoint = 'va/';

export const getVirtualAirlineMembers = async (vaId: string, apiKey: string, world: string) => {
  try {
    const response = await onAirRequest<VirtualAirlineMemberResponse>(
      `https://${world}.onair.company/api/v1/${endPoint}${vaId}/members`,
      apiKey
    );

    if (typeof response.data.Content !== 'undefined') {
      return response.data.Content as Member[];
    } else {
      throw new Error(response.data.Error ? response.data.Error : `VA Id "${vaId}"" not found`);
    };
  } catch (e) {
    throw new Error(e.response.status === 400 ? `VA Id "${vaId}" not found` : e.message);
  }
}