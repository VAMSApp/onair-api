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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mocha_1 = require("mocha");
var chai_1 = require("chai");
var index_1 = __importDefault(require("./index"));
var apiKey = process.env.COMPANY_APIKEY;
var companyId = process.env.COMPANY_ID;
var vaId = process.env.VIRTUAL_AIRLINE_ID;
(0, mocha_1.describe)('OnAirApi()', function () {
    it('when instantiated with valid data, it should return an OnAirApi object', function () {
        return __awaiter(this, void 0, void 0, function () {
            var api;
            return __generator(this, function (_a) {
                if (apiKey !== undefined && companyId !== undefined) {
                    api = new index_1.default({ apiKey: apiKey, companyId: companyId, vaId: vaId });
                    (0, chai_1.expect)(api).to.be.an('Object');
                }
                return [2 /*return*/];
            });
        });
    });
    (0, mocha_1.describe)('getAircraft()', function () {
        it('when getAircraft() is queried with valid data, it should return a Aircraft object', function () {
            return __awaiter(this, void 0, void 0, function () {
                var api, aircraftId, aircraft;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(apiKey !== undefined && companyId !== undefined)) return [3 /*break*/, 2];
                            api = new index_1.default({ apiKey: apiKey, companyId: companyId, vaId: vaId });
                            aircraftId = 'd8a921a5-4774-4530-b75e-14b41545cabc';
                            return [4 /*yield*/, api.getAircraft(aircraftId)];
                        case 1:
                            aircraft = _a.sent();
                            (0, chai_1.expect)(aircraft).to.be.an('Object');
                            (0, chai_1.expect)(aircraft.Id).to.equal(aircraftId);
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        });
    });
    (0, mocha_1.describe)('getAircraftFlights()', function () {
        it('when getAircraftFlights() is queried with valid data, it should return an Aircrafts flights array', function () {
            return __awaiter(this, void 0, void 0, function () {
                var api, aircraftId, flights;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(apiKey !== undefined && companyId !== undefined)) return [3 /*break*/, 2];
                            api = new index_1.default({ apiKey: apiKey, companyId: companyId, vaId: vaId });
                            aircraftId = 'd8a921a5-4774-4530-b75e-14b41545cabc';
                            return [4 /*yield*/, api.getAircraftFlights(aircraftId)];
                        case 1:
                            flights = _a.sent();
                            (0, chai_1.expect)(flights).to.be.an('Array');
                            (0, chai_1.expect)(flights[0].AircraftId).to.equal(aircraftId);
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        });
    });
    (0, mocha_1.describe)('getAirport()', function () {
        it('when getAirport() is queried with valid data, it should return a valid Airport object', function () {
            return __awaiter(this, void 0, void 0, function () {
                var api, airportCode, airport;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(apiKey !== undefined && companyId !== undefined)) return [3 /*break*/, 2];
                            api = new index_1.default({ apiKey: apiKey, companyId: companyId, vaId: vaId });
                            airportCode = 'KLAX';
                            return [4 /*yield*/, api.getAirport(airportCode)];
                        case 1:
                            airport = _a.sent();
                            (0, chai_1.expect)(airport).to.be.an('Object');
                            (0, chai_1.expect)(airport.ICAO).to.equal(airportCode);
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        });
    });
    (0, mocha_1.describe)('getCompanyFbos()', function () {
        it('when getCompanyFbos() is queried with valid data, it should return an Array of Fbo Objects', function () {
            return __awaiter(this, void 0, void 0, function () {
                var api, fbos;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(apiKey !== undefined && companyId !== undefined)) return [3 /*break*/, 2];
                            api = new index_1.default({ apiKey: apiKey, companyId: companyId, vaId: vaId });
                            return [4 /*yield*/, api.getCompanyFbos()];
                        case 1:
                            fbos = _a.sent();
                            (0, chai_1.expect)(fbos).to.be.an('Array');
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        });
    });
    (0, mocha_1.describe)('getCompanyFleet()', function () {
        it('when getCompanyFleet() is queried with valid data, it should return an Array of Aircraft Objects', function () {
            return __awaiter(this, void 0, void 0, function () {
                var api, aircraft;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(apiKey !== undefined && companyId !== undefined)) return [3 /*break*/, 2];
                            api = new index_1.default({ apiKey: apiKey, companyId: companyId, vaId: vaId });
                            return [4 /*yield*/, api.getCompanyFleet()];
                        case 1:
                            aircraft = _a.sent();
                            (0, chai_1.expect)(aircraft).to.be.an('Array');
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        });
    });
    (0, mocha_1.describe)('getCompanyFlights()', function () {
        it('when getCompanyFlights() is queried with valid data, it should return an Array of Flight objects', function () {
            return __awaiter(this, void 0, void 0, function () {
                var api, flights;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(apiKey !== undefined && companyId !== undefined)) return [3 /*break*/, 2];
                            api = new index_1.default({ apiKey: apiKey, companyId: companyId, vaId: vaId });
                            return [4 /*yield*/, api.getCompanyFlights()];
                        case 1:
                            flights = _a.sent();
                            (0, chai_1.expect)(flights).to.be.an('Array');
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        });
    });
    (0, mocha_1.describe)('getCompanyJobs()', function () {
        it('when getCompanyJobs() is queried with valid data, it should return an Array of pending Jobs', function () {
            return __awaiter(this, void 0, void 0, function () {
                var api, jobs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(apiKey !== undefined && companyId !== undefined)) return [3 /*break*/, 2];
                            api = new index_1.default({ apiKey: apiKey, companyId: companyId, vaId: vaId });
                            return [4 /*yield*/, api.getCompanyJobs()];
                        case 1:
                            jobs = _a.sent();
                            (0, chai_1.expect)(jobs).to.be.an('Array');
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        });
        it('when getCompanyJobs() is queried with valid data, passing the companyId as the first argument and true as the second argument, it should return an Array of completed Jobs for the provided companyId', function () {
            return __awaiter(this, void 0, void 0, function () {
                var api, jobs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(apiKey !== undefined && companyId !== undefined)) return [3 /*break*/, 2];
                            api = new index_1.default({ apiKey: apiKey, companyId: companyId, vaId: vaId });
                            return [4 /*yield*/, api.getCompanyJobs(companyId, true)];
                        case 1:
                            jobs = _a.sent();
                            (0, chai_1.expect)(jobs).to.be.an('Array');
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        });
    });
    (0, mocha_1.describe)('getCompanyEmployees()', function () {
        it('when getCompanyEmployees() is queried with valid data, it should return an Array of pending Jobs', function () {
            return __awaiter(this, void 0, void 0, function () {
                var api, employees;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(apiKey !== undefined && companyId !== undefined)) return [3 /*break*/, 2];
                            api = new index_1.default({ apiKey: apiKey, companyId: companyId, vaId: vaId });
                            return [4 /*yield*/, api.getCompanyEmployees()];
                        case 1:
                            employees = _a.sent();
                            (0, chai_1.expect)(employees).to.be.an('Array');
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        });
    });
    (0, mocha_1.describe)('getCompanyCashFlow()', function () {
        it('when getCompanyCashFlow() is queried with valid data, it should return an object of the companie\'s cash flow.', function () {
            return __awaiter(this, void 0, void 0, function () {
                var api, cashflow;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(apiKey !== undefined && companyId !== undefined)) return [3 /*break*/, 2];
                            api = new index_1.default({ apiKey: apiKey, companyId: companyId, vaId: vaId });
                            return [4 /*yield*/, api.getCompanyCashFlow()];
                        case 1:
                            cashflow = _a.sent();
                            (0, chai_1.expect)(cashflow).to.be.an('Object');
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        });
    });
    (0, mocha_1.describe)('getCompanyIncomeStatement()', function () {
        it('when queried providing a startDate and endDate, it should return an object of the company\'s income statement.', function () {
            return __awaiter(this, void 0, void 0, function () {
                var api, currentDate, currentDateStr, priorDate, priorDateStr, incomestatement;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(apiKey !== undefined && companyId !== undefined)) return [3 /*break*/, 2];
                            api = new index_1.default({ apiKey: apiKey, companyId: companyId, vaId: vaId });
                            currentDate = new Date();
                            currentDateStr = currentDate.toISOString();
                            priorDate = new Date().setDate(currentDate.getDate() - 30);
                            priorDateStr = new Date(priorDate).toISOString();
                            return [4 /*yield*/, api.getCompanyIncomeStatement(priorDateStr, currentDateStr)];
                        case 1:
                            incomestatement = _a.sent();
                            (0, chai_1.expect)(incomestatement).to.be.an('Object');
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        });
        it('when queried without providing a startDate or an endDate, it should return an object of the company\'s current income statement within the last 30 days.', function () {
            return __awaiter(this, void 0, void 0, function () {
                var api, incomestatement;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(apiKey !== undefined && companyId !== undefined)) return [3 /*break*/, 2];
                            api = new index_1.default({ apiKey: apiKey, companyId: companyId, vaId: vaId });
                            return [4 /*yield*/, api.getCompanyIncomeStatement()];
                        case 1:
                            incomestatement = _a.sent();
                            (0, chai_1.expect)(incomestatement).to.be.an('Object');
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        });
    });
    (0, mocha_1.describe)('getCompanyBalanceSheet()', function () {
        it('when getCompanyBalanceSheet() is queried with valid data, it should return an object of the company\'s current balance sheet.', function () {
            return __awaiter(this, void 0, void 0, function () {
                var api, balancesheet;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(apiKey !== undefined && companyId !== undefined)) return [3 /*break*/, 2];
                            api = new index_1.default({ apiKey: apiKey, companyId: companyId, vaId: vaId });
                            return [4 /*yield*/, api.getCompanyBalanceSheet()];
                        case 1:
                            balancesheet = _a.sent();
                            (0, chai_1.expect)(balancesheet).to.be.an('Object');
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        });
    });
    (0, mocha_1.describe)('getCompanyWorkOrders()', function () {
        it('when getCompanyWorkOrders() is queried with valid data, it should return an object of the work orders.', function () {
            return __awaiter(this, void 0, void 0, function () {
                var api, companyWorkOrders;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(apiKey !== undefined && companyId !== undefined)) return [3 /*break*/, 2];
                            api = new index_1.default({ apiKey: apiKey, companyId: companyId, vaId: vaId });
                            return [4 /*yield*/, api.getCompanyWorkOrders()];
                        case 1:
                            companyWorkOrders = _a.sent();
                            (0, chai_1.expect)(companyWorkOrders).to.be.an('Array');
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        });
    });
    (0, mocha_1.describe)('getCompany()', function () {
        it('when getCompany() is queried with valid data, it should return a Company Object', function () {
            return __awaiter(this, void 0, void 0, function () {
                var api, company;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(apiKey !== undefined && companyId !== undefined)) return [3 /*break*/, 2];
                            api = new index_1.default({ apiKey: apiKey, companyId: companyId, vaId: vaId });
                            return [4 /*yield*/, api.getCompany()];
                        case 1:
                            company = _a.sent();
                            (0, chai_1.expect)(company).to.be.an('Object');
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        });
    });
    (0, mocha_1.describe)('getFlight()', function () {
        it('when getFlight() is queried with valid data, it should return a Flight Object', function () {
            return __awaiter(this, void 0, void 0, function () {
                var api, flightId, flight;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(apiKey !== undefined && companyId !== undefined)) return [3 /*break*/, 2];
                            api = new index_1.default({ apiKey: apiKey, companyId: companyId, vaId: vaId });
                            flightId = 'f0017707-825d-497f-b820-0404bb40132c';
                            return [4 /*yield*/, api.getFlight(flightId)];
                        case 1:
                            flight = _a.sent();
                            (0, chai_1.expect)(flight).to.be.an('Object');
                            (0, chai_1.expect)(flight.Id).to.equal(flightId);
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        });
    });
    (0, mocha_1.describe)('getVirtualAirlineMembers()', function () {
        it('when getVirtualAirlineMembers() is queried with valid data, it should return an Array of Members in a VirtualAirline', function () {
            return __awaiter(this, void 0, void 0, function () {
                var api, members;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(apiKey !== undefined && companyId !== undefined)) return [3 /*break*/, 2];
                            api = new index_1.default({ apiKey: apiKey, companyId: companyId, vaId: vaId });
                            return [4 /*yield*/, api.getVirtualAirlineMembers()];
                        case 1:
                            members = _a.sent();
                            (0, chai_1.expect)(members).to.be.an('Array');
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        });
    });
    (0, mocha_1.describe)('getVirtualAirline()', function () {
        it('when getVirtualAirline() is queried with valid data, it should return a VirtualAirline Object', function () {
            return __awaiter(this, void 0, void 0, function () {
                var api, va;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(apiKey !== undefined && companyId !== undefined)) return [3 /*break*/, 2];
                            api = new index_1.default({ apiKey: apiKey, companyId: companyId, vaId: vaId });
                            return [4 /*yield*/, api.getVirtualAirline()];
                        case 1:
                            va = _a.sent();
                            (0, chai_1.expect)(va).to.be.an('Object');
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        });
    });
    (0, mocha_1.describe)('getVirtualAirlineShareHolders()', function () {
        it('when getVirtualAirlineShareHolders() is queried with valid data, it should return a ShareHolder Array', function () {
            return __awaiter(this, void 0, void 0, function () {
                var api, shareholders;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(apiKey !== undefined && companyId !== undefined)) return [3 /*break*/, 2];
                            api = new index_1.default({ apiKey: apiKey, companyId: companyId, vaId: vaId });
                            return [4 /*yield*/, api.getVirtualAirlineShareHolders()];
                        case 1:
                            shareholders = _a.sent();
                            (0, chai_1.expect)(shareholders).to.be.an('Array');
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        });
    });
    (0, mocha_1.describe)('getVirtualAirlineRoles()', function () {
        it('when getVirtualAirlineRoles() is queried with valid data, it should return a Role Array', function () {
            return __awaiter(this, void 0, void 0, function () {
                var api, varoles;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(apiKey !== undefined && companyId !== undefined)) return [3 /*break*/, 2];
                            api = new index_1.default({ apiKey: apiKey, companyId: companyId, vaId: vaId });
                            return [4 /*yield*/, api.getVirtualAirlineRoles()];
                        case 1:
                            varoles = _a.sent();
                            (0, chai_1.expect)(varoles).to.be.an('Array');
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        });
    });
    (0, mocha_1.describe)('getVirtualAirlineFlights()', function () {
        it('when getVirtualAirlineFlights() is queried with valid data, it should return a Flights Array', function () {
            return __awaiter(this, void 0, void 0, function () {
                var api, vaflights;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(apiKey !== undefined && companyId !== undefined)) return [3 /*break*/, 2];
                            api = new index_1.default({ apiKey: apiKey, companyId: companyId, vaId: vaId });
                            return [4 /*yield*/, api.getVirtualAirlineFlights()];
                        case 1:
                            vaflights = _a.sent();
                            (0, chai_1.expect)(vaflights).to.be.an('Array');
                            (0, chai_1.expect)(vaflights.length).to.be.above(2);
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        });
    });
    (0, mocha_1.describe)('getVirtualAirlineJobs()', function () {
        it('when getVirtualAirlineJobs() is queried with valid data, it should return a Job Array', function () {
            return __awaiter(this, void 0, void 0, function () {
                var api, vaJobs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(apiKey !== undefined && companyId !== undefined)) return [3 /*break*/, 2];
                            api = new index_1.default({ apiKey: apiKey, companyId: companyId, vaId: vaId });
                            return [4 /*yield*/, api.getVirtualAirlineJobs()];
                        case 1:
                            vaJobs = _a.sent();
                            (0, chai_1.expect)(vaJobs).to.be.an('Array');
                            (0, chai_1.expect)(vaJobs.length).to.be.above(2);
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        });
    });
    (0, mocha_1.describe)('getVirtualAirlineFbos()', function () {
        it('when getVirtualAirlineFbos() is queried with valid data, it should return an Array of Fbo Objects', function () {
            return __awaiter(this, void 0, void 0, function () {
                var api, fbos;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(apiKey !== undefined && companyId !== undefined && vaId !== undefined)) return [3 /*break*/, 2];
                            api = new index_1.default({ apiKey: apiKey, companyId: companyId, vaId: vaId });
                            return [4 /*yield*/, api.getVirtualAirlineFbos()];
                        case 1:
                            fbos = _a.sent();
                            (0, chai_1.expect)(fbos).to.be.an('Array');
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        });
    });
    (0, mocha_1.describe)('getEmployee()', function () {
        it('when getEmployee() is queried with valid data, it should return an employees details within a People object', function () {
            return __awaiter(this, void 0, void 0, function () {
                var api, personId, employee;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(apiKey !== undefined && companyId !== undefined)) return [3 /*break*/, 2];
                            api = new index_1.default({ apiKey: apiKey, companyId: companyId, vaId: vaId });
                            personId = '596b6c2e-4ac7-44e9-b1d4-a4299030cb04';
                            return [4 /*yield*/, api.getEmployee(personId)];
                        case 1:
                            employee = _a.sent();
                            (0, chai_1.expect)(employee).to.be.an('Object');
                            (0, chai_1.expect)(employee.Id).to.equal(personId);
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        });
    });
});
