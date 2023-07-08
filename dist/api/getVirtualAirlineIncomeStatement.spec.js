"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var mocha_1 = require("mocha");
var chai_1 = require("chai");
var _1 = require(".");
var _a = process.env, COMPANY_APIKEY = _a.COMPANY_APIKEY, VIRTUAL_AIRLINE_ID = _a.VIRTUAL_AIRLINE_ID;
if (!COMPANY_APIKEY)
    throw new Error('No COMPANY_APIKEY provided');
if (!VIRTUAL_AIRLINE_ID)
    throw new Error('No VIRTUAL_AIRLINE_ID provided');
var ApiKey = COMPANY_APIKEY;
var VaId = VIRTUAL_AIRLINE_ID;
(0, mocha_1.describe)('getVirtualAirlineIncomeStatement', function () {
    it('should be a function', function () {
        (0, chai_1.expect)(typeof _1.getVirtualAirlineIncomeStatement).to.equal('function');
    });
    it('if no startDate or endDate is provided, by default it should return an IncomeStatement for the last 30 days for the given vaId', function () { return __awaiter(void 0, void 0, void 0, function () {
        var StartDateStr, EndDateStr, incomeStatement;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    StartDateStr = undefined;
                    EndDateStr = undefined;
                    return [4 /*yield*/, (0, _1.getVirtualAirlineIncomeStatement)(VaId, ApiKey, StartDateStr, EndDateStr)];
                case 1:
                    incomeStatement = _a.sent();
                    (0, chai_1.expect)(incomeStatement).to.be.an('object');
                    (0, chai_1.expect)(incomeStatement.Content).to.contain.keys([
                        'REVAccounts',
                        'EXPAccounts',
                        'REVAmount',
                        'EXPAmount',
                        'NetIncomeAmount',
                    ]);
                    return [2 /*return*/];
            }
        });
    }); });
    it('if the startDate is provided, and no endDate is provided, by default it should return an IncomeStatement for the 30 days prior to the startDate for the given vaId', function () { return __awaiter(void 0, void 0, void 0, function () {
        var StartDateStr, EndDateStr, incomeStatement;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    StartDateStr = '2022-10-01T00:00:00';
                    EndDateStr = undefined;
                    return [4 /*yield*/, (0, _1.getVirtualAirlineIncomeStatement)(VaId, ApiKey, StartDateStr, EndDateStr)];
                case 1:
                    incomeStatement = _a.sent();
                    (0, chai_1.expect)(incomeStatement).to.be.an('object');
                    (0, chai_1.expect)(incomeStatement.Content).to.contain.keys([
                        'REVAccounts',
                        'EXPAccounts',
                        'REVAmount',
                        'EXPAmount',
                        'NetIncomeAmount',
                    ]);
                    return [2 /*return*/];
            }
        });
    }); });
    it('if the startDate is not provided but the endDate is provided, by default it should return an IncomeStatement for the 30 days ahead of the endDate for the given vaId', function () { return __awaiter(void 0, void 0, void 0, function () {
        var StartDateStr, EndDateStr, incomeStatement;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    StartDateStr = undefined;
                    EndDateStr = '2022-10-01T00:00:00';
                    return [4 /*yield*/, (0, _1.getVirtualAirlineIncomeStatement)(VaId, ApiKey, StartDateStr, EndDateStr)];
                case 1:
                    incomeStatement = _a.sent();
                    (0, chai_1.expect)(incomeStatement).to.be.an('object');
                    (0, chai_1.expect)(incomeStatement.Content).to.contain.keys([
                        'REVAccounts',
                        'EXPAccounts',
                        'REVAmount',
                        'EXPAmount',
                        'NetIncomeAmount',
                    ]);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should throw an error if the provided VA Id is invalid', function () { return __awaiter(void 0, void 0, void 0, function () {
        var vaId, ErrorMessage, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    vaId = 'invalidVaId';
                    ErrorMessage = "Invalid VA Id provided. VAId: '".concat(vaId, "'");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, (0, _1.getVirtualAirlineIncomeStatement)(vaId, ApiKey)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    (0, chai_1.expect)(e_1.message).to.equal(ErrorMessage);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
    it('should throw an error if the provided API Key is invalid', function () { return __awaiter(void 0, void 0, void 0, function () {
        var apiKey, ErrorMessage, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiKey = 'invalidApiKey';
                    ErrorMessage = "Invalid Api Key provided. ApiKey: '".concat(apiKey, "'");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, (0, _1.getVirtualAirlineIncomeStatement)(VaId, apiKey)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_2 = _a.sent();
                    (0, chai_1.expect)(e_2.message).to.equal(ErrorMessage);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
});
