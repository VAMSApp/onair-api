"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFlight = exports.getCompany = exports.getCompanyFlights = exports.getCompanyFleet = exports.getCompanyFbos = exports.getAirport = exports.getAircraftFlights = exports.getAircraft = void 0;
var getAircraft_1 = __importDefault(require("./getAircraft"));
var getAircraftFlights_1 = __importDefault(require("./getAircraftFlights"));
var getAirport_1 = __importDefault(require("./getAirport"));
var getCompanyFbos_1 = __importDefault(require("./getCompanyFbos"));
var getCompanyFleet_1 = __importDefault(require("./getCompanyFleet"));
var getCompanyFlights_1 = __importDefault(require("./getCompanyFlights"));
var getCompany_1 = __importDefault(require("./getCompany"));
var getFlight_1 = __importDefault(require("./getFlight"));
exports.getAircraft = getAircraft_1.default;
exports.getAircraftFlights = getAircraftFlights_1.default;
exports.getAirport = getAirport_1.default;
exports.getCompanyFbos = getCompanyFbos_1.default;
exports.getCompanyFleet = getCompanyFleet_1.default;
exports.getCompanyFlights = getCompanyFlights_1.default;
exports.getCompany = getCompany_1.default;
exports.getFlight = getFlight_1.default;
exports.default = {
    getAircraft: exports.getAircraft,
    getAircraftFlights: exports.getAircraftFlights,
    getAirport: exports.getAirport,
    getCompanyFbos: exports.getCompanyFbos,
    getCompanyFleet: exports.getCompanyFleet,
    getCompanyFlights: exports.getCompanyFlights,
    getCompany: exports.getCompany,
    getFlight: exports.getFlight,
};
