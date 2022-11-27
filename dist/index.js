"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
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
exports.OnAirApi = void 0;
var api_1 = __importDefault(require("./api"));
var utils_1 = require("./utils");
__exportStar(require("./types"), exports);
var OnAirApi = /** @class */ (function () {
    // Constructor
    function OnAirApi(config) {
        var apiKey = config.apiKey, companyId = config.companyId, vaId = config.vaId;
        if (!apiKey)
            throw new Error('No API Key provided');
        if (!apiKey.match(utils_1.uuid4))
            throw new Error('Invalid API Key provided');
        this.ApiKey = apiKey;
        if (!companyId)
            throw new Error('No Company ID provided');
        if (!companyId.match(utils_1.uuid4))
            throw new Error('Invalid Company ID provided');
        this.CompanyId = companyId;
        if (vaId && !vaId.match(utils_1.uuid4))
            throw new Error('Invalid VA ID provided');
        this.VaId = (vaId) ? vaId : undefined;
        this.getCompany = this.getCompany.bind(this);
        this.getCompanyFleet = this.getCompanyFleet.bind(this);
        this.getCompanyFbos = this.getCompanyFbos.bind(this);
        this.getCompanyFlights = this.getCompanyFlights.bind(this);
        this.getCompanyJobs = this.getCompanyJobs.bind(this);
        this.getCompanyEmployees = this.getCompanyEmployees.bind(this);
        this.getCompanyCashFlow = this.getCompanyCashFlow.bind(this);
        this.getCompanyIncomeStatement = this.getCompanyIncomeStatement.bind(this);
        this.getCompanyBalanceSheet = this.getCompanyBalanceSheet.bind(this);
        this.getCompanyMissionFlightTracks = this.getCompanyMissionFlightTracks.bind(this);
        this.getCompanyWorkOrders = this.getCompanyWorkOrders.bind(this);
        this.getAircraft = this.getAircraft.bind(this);
        this.getAircraftFlights = this.getAircraftFlights.bind(this);
        this.getAirport = this.getAirport.bind(this);
        this.getFlight = this.getFlight.bind(this);
        this.getVirtualAirline = this.getVirtualAirline.bind(this);
        this.getVirtualAirlineMembers = this.getVirtualAirlineMembers.bind(this);
        this.getVirtualAirlineShareHolders = this.getVirtualAirlineShareHolders.bind(this);
        this.getVirtualAirlineRoles = this.getVirtualAirlineRoles.bind(this);
        this.getVirtualAirlineFlights = this.getVirtualAirlineFlights.bind(this);
        this.getVirtualAirlineFleet = this.getVirtualAirlineFleet.bind(this);
        this.getVirtualAirlineJobs = this.getVirtualAirlineJobs.bind(this);
        this.getVirtualAirlineFbos = this.getVirtualAirlineFbos.bind(this);
        this.getVirtualAirlineNotifications = this.getVirtualAirlineNotifications.bind(this);
        this.getEmployee = this.getEmployee.bind(this);
    }
    OnAirApi.prototype.getCompany = function (companyId) {
        if (companyId === void 0) { companyId = this.CompanyId; }
        return __awaiter(this, void 0, void 0, function () {
            var company;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!companyId)
                            throw new Error('No Company ID provided');
                        return [4 /*yield*/, api_1.default.getCompany(companyId, this.ApiKey)];
                    case 1:
                        company = _a.sent();
                        return [2 /*return*/, company];
                }
            });
        });
    };
    OnAirApi.prototype.getCompanyFleet = function (companyId) {
        if (companyId === void 0) { companyId = this.CompanyId; }
        return __awaiter(this, void 0, void 0, function () {
            var companyFleet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!companyId)
                            throw new Error('No Company ID provided');
                        return [4 /*yield*/, api_1.default.getCompanyFleet(companyId, this.ApiKey)];
                    case 1:
                        companyFleet = _a.sent();
                        return [2 /*return*/, companyFleet];
                }
            });
        });
    };
    OnAirApi.prototype.getCompanyFbos = function (companyId) {
        if (companyId === void 0) { companyId = this.CompanyId; }
        return __awaiter(this, void 0, void 0, function () {
            var companyFbos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!companyId)
                            throw new Error('No Company ID provided');
                        return [4 /*yield*/, api_1.default.getCompanyFbos(companyId, this.ApiKey)];
                    case 1:
                        companyFbos = _a.sent();
                        return [2 /*return*/, companyFbos];
                }
            });
        });
    };
    OnAirApi.prototype.getCompanyFlights = function (companyId, page, limit) {
        if (companyId === void 0) { companyId = this.CompanyId; }
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 20; }
        return __awaiter(this, void 0, void 0, function () {
            var companyFlights;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!companyId)
                            throw new Error('No Company ID provided');
                        return [4 /*yield*/, api_1.default.getCompanyFlights(companyId, this.ApiKey, page, limit)];
                    case 1:
                        companyFlights = _a.sent();
                        return [2 /*return*/, companyFlights];
                }
            });
        });
    };
    OnAirApi.prototype.getCompanyJobs = function (companyId, completed) {
        if (companyId === void 0) { companyId = this.CompanyId; }
        if (completed === void 0) { completed = false; }
        return __awaiter(this, void 0, void 0, function () {
            var companyJobs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!companyId)
                            throw new Error('No Company ID provided');
                        return [4 /*yield*/, api_1.default.getCompanyJobs(companyId, this.ApiKey, completed)];
                    case 1:
                        companyJobs = _a.sent();
                        return [2 /*return*/, companyJobs];
                }
            });
        });
    };
    OnAirApi.prototype.getCompanyEmployees = function (companyId) {
        if (companyId === void 0) { companyId = this.CompanyId; }
        return __awaiter(this, void 0, void 0, function () {
            var companyEmployees;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!companyId)
                            throw new Error('No Company ID provided');
                        return [4 /*yield*/, api_1.default.getCompanyEmployees(companyId, this.ApiKey)];
                    case 1:
                        companyEmployees = _a.sent();
                        return [2 /*return*/, companyEmployees];
                }
            });
        });
    };
    OnAirApi.prototype.getCompanyCashFlow = function (companyId) {
        if (companyId === void 0) { companyId = this.CompanyId; }
        return __awaiter(this, void 0, void 0, function () {
            var cashFlow;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!companyId)
                            throw new Error('No Company ID provided');
                        return [4 /*yield*/, api_1.default.getCompanyCashFlow(companyId, this.ApiKey)];
                    case 1:
                        cashFlow = _a.sent();
                        return [2 /*return*/, cashFlow];
                }
            });
        });
    };
    OnAirApi.prototype.getCompanyIncomeStatement = function (companyId, startDate, endDate) {
        if (companyId === void 0) { companyId = this.CompanyId; }
        return __awaiter(this, void 0, void 0, function () {
            var currentDate, priorDate, incomeStatement;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!companyId)
                            throw new Error('No Company ID provided');
                        if (!startDate) {
                            currentDate = new Date();
                            priorDate = new Date().setDate(currentDate.getDate() - 30);
                            startDate = new Date(priorDate).toISOString();
                        }
                        if (!endDate) {
                            endDate = new Date().toISOString();
                        }
                        return [4 /*yield*/, api_1.default.getCompanyIncomeStatement(startDate, endDate, companyId, this.ApiKey)];
                    case 1:
                        incomeStatement = _a.sent();
                        return [2 /*return*/, incomeStatement];
                }
            });
        });
    };
    OnAirApi.prototype.getCompanyBalanceSheet = function (companyId) {
        if (companyId === void 0) { companyId = this.CompanyId; }
        return __awaiter(this, void 0, void 0, function () {
            var balanceSheet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!companyId)
                            throw new Error('No Company ID provided');
                        return [4 /*yield*/, api_1.default.getCompanyBalanceSheet(companyId, this.ApiKey)];
                    case 1:
                        balanceSheet = _a.sent();
                        return [2 /*return*/, balanceSheet];
                }
            });
        });
    };
    OnAirApi.prototype.getCompanyMissionFlightTracks = function (companyId) {
        if (companyId === void 0) { companyId = this.CompanyId; }
        return __awaiter(this, void 0, void 0, function () {
            var flightTracks;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!companyId)
                            throw new Error('No Company ID provided');
                        return [4 /*yield*/, api_1.default.getCompanyMissionFlightTracks(companyId, this.ApiKey)];
                    case 1:
                        flightTracks = _a.sent();
                        return [2 /*return*/, flightTracks];
                }
            });
        });
    };
    OnAirApi.prototype.getCompanyWorkOrders = function (companyId) {
        if (companyId === void 0) { companyId = this.CompanyId; }
        return __awaiter(this, void 0, void 0, function () {
            var workOrders;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!companyId)
                            throw new Error('No Company ID provided');
                        return [4 /*yield*/, api_1.default.getCompanyWorkOrders(companyId, this.ApiKey)];
                    case 1:
                        workOrders = _a.sent();
                        return [2 /*return*/, workOrders];
                }
            });
        });
    };
    OnAirApi.prototype.getAircraft = function (aircraftId) {
        return __awaiter(this, void 0, void 0, function () {
            var aircraft;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!aircraftId)
                            throw new Error('Aircraft ID not provided');
                        return [4 /*yield*/, api_1.default.getAircraft(aircraftId, this.ApiKey)];
                    case 1:
                        aircraft = _a.sent();
                        return [2 /*return*/, aircraft];
                }
            });
        });
    };
    OnAirApi.prototype.getAircraftFlights = function (aircraftId, page, limit) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 20; }
        return __awaiter(this, void 0, void 0, function () {
            var flights;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!aircraftId)
                            throw new Error('Aircraft ID not provided');
                        return [4 /*yield*/, api_1.default.getAircraftFlights(aircraftId, this.ApiKey, page, limit)];
                    case 1:
                        flights = _a.sent();
                        return [2 /*return*/, flights];
                }
            });
        });
    };
    OnAirApi.prototype.getAirport = function (airportCode) {
        return __awaiter(this, void 0, void 0, function () {
            var airport;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!airportCode)
                            throw new Error('Airport ICAO code not provided');
                        return [4 /*yield*/, api_1.default.getAirport(airportCode, this.ApiKey)];
                    case 1:
                        airport = _a.sent();
                        return [2 /*return*/, airport];
                }
            });
        });
    };
    OnAirApi.prototype.getFlight = function (flightId) {
        return __awaiter(this, void 0, void 0, function () {
            var flight;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!flightId)
                            throw new Error('Flight ID not provided');
                        return [4 /*yield*/, api_1.default.getFlight(flightId, this.ApiKey)];
                    case 1:
                        flight = _a.sent();
                        return [2 /*return*/, flight];
                }
            });
        });
    };
    OnAirApi.prototype.getVirtualAirline = function (vaId) {
        return __awaiter(this, void 0, void 0, function () {
            var virtualAirline;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!vaId || !this.VaId)
                            throw new Error('VA ID is not provided');
                        return [4 /*yield*/, api_1.default.getVirtualAirline(vaId || this.VaId, this.ApiKey)];
                    case 1:
                        virtualAirline = _a.sent();
                        return [2 /*return*/, virtualAirline];
                }
            });
        });
    };
    OnAirApi.prototype.getVirtualAirlineMembers = function (vaId) {
        return __awaiter(this, void 0, void 0, function () {
            var members;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!vaId || !this.VaId)
                            throw new Error('VA ID is not provided');
                        return [4 /*yield*/, api_1.default.getVirtualAirlineMembers(vaId || this.VaId, this.ApiKey)];
                    case 1:
                        members = _a.sent();
                        return [2 /*return*/, members];
                }
            });
        });
    };
    OnAirApi.prototype.getVirtualAirlineShareHolders = function (vaId) {
        return __awaiter(this, void 0, void 0, function () {
            var shareholders;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!vaId || !this.VaId)
                            throw new Error('VA ID is not provided');
                        return [4 /*yield*/, api_1.default.getVirtualAirlineShareHolders(vaId || this.VaId, this.ApiKey)];
                    case 1:
                        shareholders = _a.sent();
                        return [2 /*return*/, shareholders];
                }
            });
        });
    };
    OnAirApi.prototype.getVirtualAirlineRoles = function (vaId) {
        return __awaiter(this, void 0, void 0, function () {
            var varoles;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!vaId || !this.VaId)
                            throw new Error('VA ID is not provided');
                        return [4 /*yield*/, api_1.default.getVirtualAirlineRoles(vaId || this.VaId, this.ApiKey)];
                    case 1:
                        varoles = _a.sent();
                        return [2 /*return*/, varoles];
                }
            });
        });
    };
    OnAirApi.prototype.getVirtualAirlineFlights = function (vaId, page, limit) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 20; }
        return __awaiter(this, void 0, void 0, function () {
            var vaflights;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.VaId)
                            throw new Error('VA ID is not provided');
                        return [4 /*yield*/, api_1.default.getVirtualAirlineFlights(vaId || this.VaId, this.ApiKey, page, limit)];
                    case 1:
                        vaflights = _a.sent();
                        return [2 /*return*/, vaflights];
                }
            });
        });
    };
    OnAirApi.prototype.getVirtualAirlineFleet = function (vaId) {
        return __awaiter(this, void 0, void 0, function () {
            var vaFleet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!vaId || !this.VaId)
                            throw new Error('VA ID is not provided');
                        return [4 /*yield*/, api_1.default.getVirtualAirlineFleet(vaId || this.VaId, this.ApiKey)];
                    case 1:
                        vaFleet = _a.sent();
                        return [2 /*return*/, vaFleet];
                }
            });
        });
    };
    OnAirApi.prototype.getVirtualAirlineJobs = function (vaId) {
        return __awaiter(this, void 0, void 0, function () {
            var vaFleet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!vaId || !this.VaId)
                            throw new Error('VA ID is not provided');
                        return [4 /*yield*/, api_1.default.getVirtualAirlineJobs(vaId || this.VaId, this.ApiKey)];
                    case 1:
                        vaFleet = _a.sent();
                        return [2 /*return*/, vaFleet];
                }
            });
        });
    };
    OnAirApi.prototype.getVirtualAirlineFbos = function (vaId) {
        return __awaiter(this, void 0, void 0, function () {
            var vaFbos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!vaId || !this.VaId)
                            throw new Error('VA ID is not provided');
                        return [4 /*yield*/, api_1.default.getVirtualAirlineFbos(vaId || this.VaId, this.ApiKey)];
                    case 1:
                        vaFbos = _a.sent();
                        return [2 /*return*/, vaFbos];
                }
            });
        });
    };
    OnAirApi.prototype.getVirtualAirlineNotifications = function (vaId) {
        return __awaiter(this, void 0, void 0, function () {
            var vaNotiifcations;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        vaId = vaId || this.VaId;
                        if (!vaId)
                            throw new Error('VA ID is not provided');
                        return [4 /*yield*/, api_1.default.getVirtualAirlineNotifications(vaId, this.ApiKey)];
                    case 1:
                        vaNotiifcations = _a.sent();
                        return [2 /*return*/, vaNotiifcations];
                }
            });
        });
    };
    OnAirApi.prototype.getEmployee = function (employeeId) {
        return __awaiter(this, void 0, void 0, function () {
            var employee;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!employeeId)
                            throw new Error('Employee ID is not provided');
                        return [4 /*yield*/, api_1.default.getEmployee(employeeId, this.ApiKey)];
                    case 1:
                        employee = _a.sent();
                        return [2 /*return*/, employee];
                }
            });
        });
    };
    return OnAirApi;
}());
exports.OnAirApi = OnAirApi;
exports.default = OnAirApi;
