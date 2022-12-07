import { describe } from 'mocha';
import { expect } from 'chai';
import { getEmployee } from './getEmployee';
import { EmployeeResponse } from '../types';

const {
    COMPANY_APIKEY,
    EMPLOYEE_ID,
} = process.env;

if (!COMPANY_APIKEY) throw new Error('No COMPANY_APIKEY provided');
if (!EMPLOYEE_ID) throw new Error('No EMPLOYEE_ID provided');

const ApiKey: string = COMPANY_APIKEY;
const EmployeeId: string = EMPLOYEE_ID;

describe('getEmployee', () => {
    it('should be a function', () => {
        expect(typeof getEmployee).to.equal('function');
    });

    it('should return an object containing the Employee details for the given employeeId', async () => {
        const employee:EmployeeResponse = await getEmployee(EmployeeId, ApiKey);

        expect(employee).to.be.an('object');
        expect(employee).to.have.any.keys([
            'Id',
            'WorldId',
            'ClassCertifications',
            'Pseudo',
            'UserID',
            'CompanyId',
            'FlightHoursTotalBeforeHiring',
            'FlightHoursInCompany',
            'Weight',
            'BirthDate',
            'Fatigue',
            'Punctuality',
            'Comfort',
            'Happiness',
            'CurrentAirportId',
            'HomeAirportId',
            'PerFlightHourWages',
            'WeeklyGarantedSalary',
            'PerFlightHourSalary',
            'Category',
            'Status',
            'LastStatusChange',
            'FlightDutyStart',
            'CurrentTotalFlightHoursInDuty',
            'AvatarImageName',
            'IsOnline',
            'FlightDutyEnd',
            'FlightHoursGrandTotal',
        ])
    });

    it('should throw an error if the provided Employee ID is invalid', async () => {
        try {
            await getEmployee('invalidEmployeeId', ApiKey);
        } catch (e) {
            expect(e.message).to.equal('Invalid Employee Id provided');
        }
    });

    it('should throw an error if the provided API Key is invalid', async () => {
        try {
            await getEmployee(EmployeeId, 'invalidApiKey');
        } catch (e) {
            expect(e.message).to.equal('Invalid Api Key provided');
        }
    });
});
