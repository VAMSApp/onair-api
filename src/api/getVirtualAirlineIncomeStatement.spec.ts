import { describe } from 'mocha';
import { expect } from 'chai';
import { IncomeStatementResponse } from '../types';
import { getVirtualAirlineIncomeStatement } from '.';

const {
    COMPANY_APIKEY,
    VIRTUAL_AIRLINE_ID,
} = process.env;

if (!COMPANY_APIKEY) throw new Error('No COMPANY_APIKEY provided');
if (!VIRTUAL_AIRLINE_ID) throw new Error('No VIRTUAL_AIRLINE_ID provided');

let ApiKey: string = COMPANY_APIKEY;
let VaId: string = VIRTUAL_AIRLINE_ID;

describe('getVirtualAirlineIncomeStatement', () => {
    it('should be a function', () => {
        expect(typeof getVirtualAirlineIncomeStatement).to.equal('function');
    });

    it('if no startDate or endDate is provided, by default it should return an IncomeStatement for the last 30 days for the given vaId', async () => {
        const StartDateStr = undefined;
        const EndDateStr = undefined;
        const incomeStatement:IncomeStatementResponse = await getVirtualAirlineIncomeStatement(VaId, ApiKey, StartDateStr, EndDateStr);

        expect(incomeStatement).to.be.an('object');
        expect(incomeStatement.Content).to.contain.keys([
            'REVAccounts',
            'EXPAccounts',
            'REVAmount',
            'EXPAmount',
            'NetIncomeAmount',
        ])
    });

    it('if the startDate is provided, and no endDate is provided, by default it should return an IncomeStatement for the 30 days prior to the startDate for the given vaId', async () => {
        const StartDateStr = '2022-10-01T00:00:00';
        const EndDateStr = undefined;
        const incomeStatement:IncomeStatementResponse = await getVirtualAirlineIncomeStatement(VaId, ApiKey, StartDateStr, EndDateStr);

        expect(incomeStatement).to.be.an('object');
        expect(incomeStatement.Content).to.contain.keys([
            'REVAccounts',
            'EXPAccounts',
            'REVAmount',
            'EXPAmount',
            'NetIncomeAmount',
        ])
    });

    it('if the startDate is not provided but the endDate is provided, by default it should return an IncomeStatement for the 30 days ahead of the endDate for the given vaId', async () => {
        const StartDateStr = undefined;
        const EndDateStr = '2022-10-01T00:00:00';
        const incomeStatement:IncomeStatementResponse = await getVirtualAirlineIncomeStatement(VaId, ApiKey, StartDateStr, EndDateStr);

        expect(incomeStatement).to.be.an('object');
        expect(incomeStatement.Content).to.contain.keys([
            'REVAccounts',
            'EXPAccounts',
            'REVAmount',
            'EXPAmount',
            'NetIncomeAmount',
        ])
    });

    it('should throw an error if the provided VA Id is invalid', async () => {
        const vaId = 'invalidVaId'
        const ErrorMessage:string = `Invalid VA Id provided. VAId: '${vaId}'`;

        try {
            await getVirtualAirlineIncomeStatement(vaId, ApiKey);
        } catch (e) {
            expect(e.message).to.equal(ErrorMessage);
        }
    });

    it('should throw an error if the provided API Key is invalid', async () => {
        const apiKey = 'invalidApiKey'
        const ErrorMessage:string = `Invalid Api Key provided. ApiKey: '${apiKey}'`;

        try {
            await getVirtualAirlineIncomeStatement(VaId, apiKey);
        } catch (e) {
            expect(e.message).to.equal(ErrorMessage);
        }
    });
});
