"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFlight = exports.getCompany = exports.getCompanyFlights = exports.getCompanyFleet = exports.getCompanyFbos = exports.getAirport = exports.getAircraftFlights = exports.getAircraft = void 0;
var getAircraft_1 = require("./getAircraft");
var getAircraftFlights_1 = require("./getAircraftFlights");
var getAirport_1 = require("./getAirport");
var getCompanyFbos_1 = require("./getCompanyFbos");
var getCompanyFleet_1 = require("./getCompanyFleet");
var getCompanyFlights_1 = require("./getCompanyFlights");
var getCompany_1 = require("./getCompany");
var getFlight_1 = require("./getFlight");
exports.getAircraft = getAircraft_1.default;
exports.getAircraftFlights = getAircraftFlights_1.default;
exports.getAirport = getAirport_1.default;
exports.getCompanyFbos = getCompanyFbos_1.default;
exports.getCompanyFleet = getCompanyFleet_1.default;
exports.getCompanyFlights = getCompanyFlights_1.default;
exports.getCompany = getCompany_1.default;
exports.getFlight = getFlight_1.default;
exports.default = {
    getCompany: exports.getCompany,
    getCompanyFleet: exports.getCompanyFleet,
    getAircraft: exports.getAircraft,
    getAircraftFlights: exports.getAircraftFlights,
    getAirport: exports.getAirport,
    getCompanyFbos: exports.getCompanyFbos,
    getCompanyFlights: exports.getCompanyFlights,
    getFlight: exports.getFlight,
};
//# sourceMappingURL=index.js.map