import onAirRequest, { PeopleApiResponse } from './onAirRequest';
import { GetEmployee, People } from '../types';
import { isValidGuid } from '../utils';

const endPoint = 'employee/';
export const getEmployee:GetEmployee = async (employeeId: string, apiKey: string) => {
    if (!employeeId) throw new Error('No Employee Id provided');
    if (!apiKey) throw new Error('No Api Key provided');
    if (!isValidGuid(employeeId)) throw new Error('Invalid Employee Id provided');
    if (!isValidGuid(apiKey)) throw new Error('Invalid Api Key provided');

    try {

        const response = await onAirRequest<PeopleApiResponse>(
            `https://server1.onair.company/api/v1/${endPoint}${employeeId}`,
            apiKey,
        );

        if (typeof response.data.Content !== 'undefined') {
            return response.data.Content as People;
        } else {
            throw new Error(response.data.Error ? response.data.Error : `People ID ${employeeId} not found`);
        }
    } catch (e) {
        console.error(`OnAirApi::getEmployee() Error getting Details for Employee Id "${employeeId}"`, e);
        throw new Error(e);
    }
};

