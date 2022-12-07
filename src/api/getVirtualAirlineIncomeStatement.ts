import { GetVirtualAirlineIncomeStatement, IncomeStatementResponse } from '../types';
import onAirRequest, { IncomeStatementApiResponse } from './onAirRequest';
import { isValidGuid } from '../utils';
import { AxiosResponse } from 'axios';

const endPoint = 'company/';

function subtractDays(dateStr:string = new Date().toISOString(), days:number = 30):Date{
    var result = new Date(dateStr);
    result.setDate(result.getDate() - days);
    return result;
}

function addDays(dateStr:string = new Date().toISOString(), days:number = 30):Date{
    var result = new Date(dateStr);
    result.setDate(result.getDate() + days);
    return result;
}

export const getVirtualAirlineIncomeStatement:GetVirtualAirlineIncomeStatement = async (vaId: string, apiKey: string, startDate?: string, endDate?: string) => {
    if (!vaId) throw new Error('No VA Id provided');
    if (!apiKey) throw new Error('No Api Key provided');
    if (!isValidGuid(vaId)) {
        const err = `Invalid VA Id provided: ${vaId}`
        console.error(err);
        throw new Error(err);
    }
    if (!isValidGuid(apiKey)) {
        const err = 'Invalid Api Key provided'
        console.error(err);
        throw new Error(err);
    }
    try {
        const currentDate:Date = new Date();
        const currentDateStr:string = currentDate.toISOString();
        let StartDateStr:string = '';
        let EndDateStr:string = '';

        // if the startDate variable exists, and the endDate variable is undefined
        // set the endDate equal to the startDate minus 30 days
        // otherwise if the startDate variable is undefined and the endDate is defined
        // set the startDate equal to the endDate plus 30 days

        if (startDate && !endDate) {
            endDate = subtractDays(startDate, 30).toISOString();
        }
        else if (!startDate && endDate) {
            startDate = addDays(endDate, 30).toISOString();
        }

        if (!startDate && !endDate) {
            startDate = currentDateStr;
            endDate = subtractDays(startDate, 30).toISOString();
        }

        if (!startDate) throw new Error('startDate is empty');
        if (!endDate) throw new Error('endDate is empty');

        StartDateStr = startDate;
        EndDateStr = endDate;

        let url:string = `https://server1.onair.company/api/v1/${endPoint}${vaId}/incomestatement?startDate=${StartDateStr}&endDate=${EndDateStr}`

        const oaResponse:AxiosResponse<IncomeStatementApiResponse, any> = await onAirRequest<IncomeStatementApiResponse>(
            url,
            apiKey,
        );

        if (typeof oaResponse.data.Content === 'undefined') {
            throw new Error(oaResponse.data.Error ? oaResponse.data.Error : `Company Id "${vaId}"" not found`);
        }

        let response:IncomeStatementResponse|undefined = {
            StartDate: StartDateStr,
            EndDate: EndDateStr,
            Content: oaResponse.data.Content,
        };
        return response;

    } catch (e) {
        throw new Error(e.oaResponse.status === 400 ? `Company Id "${vaId}"" not found` : e.message);
    }
};
