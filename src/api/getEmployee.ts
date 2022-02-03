import onAirRequest, { PeopleResponse } from './onAirRequest';
import { People } from '../types';
import { uuid4 } from '../utils';

export const getEmployee = async (employeeId: string, apiKey: string, world: string): Promise<People> => {
    if (!uuid4.test(employeeId) ) {
        throw new Error('People ID is incorrect! It should be a 36 character UUID');
    }

    try {
        const response = await onAirRequest<PeopleResponse>(
            `https://server1.onair.company/api/v1/employee/${employeeId}`,
            apiKey
        );

        if (typeof response.data.Content !== 'undefined') {
            return response.data.Content as People;
        } else {
            throw new Error(response.data.Error ? response.data.Error : `People ID ${employeeId} not found`);
        }
    } catch (e) {
        throw new Error(e.message);
    }
};

