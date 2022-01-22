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
exports.OnAirApi = void 0;
require("dotenv/config");
var api_1 = __importDefault(require("./api"));
var OnAirApi = /** @class */ (function () {
    // Constructor
    function OnAirApi(apiKey, companyId, world) {
        if (!apiKey)
            throw new Error('No API Key provided');
        if (!companyId)
            throw new Error('No Company ID provided');
        if (!world)
            throw new Error('No World provided');
        this.ApiKey = apiKey;
        this.CompanyId = companyId;
        this.World = world;
    }
    OnAirApi.prototype.getCompanyDetails = function () {
        return __awaiter(this, void 0, void 0, function () {
            var company;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, api_1.default.getCompany(this.CompanyId, this.ApiKey, this.World)];
                    case 1:
                        company = _a.sent();
                        return [2 /*return*/, company];
                }
            });
        });
    };
    OnAirApi.prototype.getCompanyFleet = function () {
        return __awaiter(this, void 0, void 0, function () {
            var companyFleet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, api_1.default.getCompanyFleet(this.CompanyId, this.ApiKey, this.World)];
                    case 1:
                        companyFleet = _a.sent();
                        return [2 /*return*/, companyFleet];
                }
            });
        });
    };
    OnAirApi.prototype.getCompanyFbos = function () {
        return __awaiter(this, void 0, void 0, function () {
            var companyFbos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, api_1.default.getCompanyFbos(this.CompanyId, this.ApiKey, this.World)];
                    case 1:
                        companyFbos = _a.sent();
                        return [2 /*return*/, companyFbos];
                }
            });
        });
    };
    OnAirApi.prototype.getCompanyFlights = function (page, limit) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 100; }
        return __awaiter(this, void 0, void 0, function () {
            var companyFlights;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, api_1.default.getCompanyFlights(this.CompanyId, this.ApiKey, this.World, page, limit)];
                    case 1:
                        companyFlights = _a.sent();
                        return [2 /*return*/, companyFlights];
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
                        return [4 /*yield*/, api_1.default.getAircraft(aircraftId, this.ApiKey, this.World)];
                    case 1:
                        aircraft = _a.sent();
                        return [2 /*return*/, aircraft];
                }
            });
        });
    };
    OnAirApi.prototype.getAircraftFlights = function (aircraftId) {
        return __awaiter(this, void 0, void 0, function () {
            var flights;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!aircraftId)
                            throw new Error('Aircraft ID not provided');
                        return [4 /*yield*/, api_1.default.getAircraftFlights(aircraftId, this.ApiKey, this.World)];
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
                        return [4 /*yield*/, api_1.default.getAirport(airportCode, this.ApiKey, this.World)];
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
                        return [4 /*yield*/, api_1.default.getFlight(flightId, this.ApiKey, this.World)];
                    case 1:
                        flight = _a.sent();
                        return [2 /*return*/, flight];
                }
            });
        });
    };
    return OnAirApi;
}());
exports.OnAirApi = OnAirApi;
exports.default = OnAirApi;
