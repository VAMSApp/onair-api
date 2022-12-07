import { describe } from 'mocha';
import { expect } from 'chai';
import Logger from './Logger';

let logger:Logger;

describe('Logger', () => {
    before(() => {
        logger = new Logger({
            logLevel: 'debug',
            logToConsole: true,
        });

    });

    it('should have a method called setLevel', () => {
        expect(logger['setLevel']).to.be.a('function');
    });

    it('should have a method called debug', () => {
        expect(logger['debug']).to.be.a('function');
    });

    it('when the debug method is called, it should log to the console with a debug notice', () => {
        logger['debug']('this is a test of the info level');
    });

    it('should have a method called info', () => {
        expect(logger['info']).to.be.a('function');
    });

    it('when the info method is called, it should log to the console with a info notice', () => {
        logger['info']('this is a test of the info level');
    });

    it('should have a method called warn', () => {
        expect(logger['warn']).to.be.a('function');
    });

    it('when the warn method is called, it should log to the console with a warn notice', () => {
        logger['warn']('this is a test of the warn level');
    });

    it('should have a method called error', () => {
        expect(logger['error']).to.be.a('function');
    });

    it('when the error method is called, it should log to the console with a error notice', () => {
        logger['error']('this is a test of the error level');
    });
});
