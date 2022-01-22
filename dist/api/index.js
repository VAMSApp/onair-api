"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getAircraftFlights_1 = require("./getAircraftFlights");
var getAircraft_1 = require("./getAircraft");
var getAirport_1 = require("./getAirport");
var getCompanyFbos_1 = require("./getCompanyFbos");
var getCompanyFleet_1 = require("./getCompanyFleet");
var getCompanyFlights_1 = require("./getCompanyFlights");
var getCompanyJobs_1 = require("./getCompanyJobs");
var getCompany_1 = require("./getCompany");
var getFlight_1 = require("./getFlight");
var getVirtualAirlineMembers_1 = require("./getVirtualAirlineMembers");
var getVirtualAirline_1 = require("./getVirtualAirline");
var Api = {
    getAircraftFlights: getAircraftFlights_1.getAircraftFlights,
    getAircraft: getAircraft_1.getAircraft,
    getAirport: getAirport_1.getAirport,
    getCompanyFbos: getCompanyFbos_1.getCompanyFbos,
    getCompanyFleet: getCompanyFleet_1.getCompanyFleet,
    getCompanyFlights: getCompanyFlights_1.getCompanyFlights,
    getCompanyJobs: getCompanyJobs_1.getCompanyJobs,
    getCompany: getCompany_1.getCompany,
    getFlight: getFlight_1.getFlight,
    getVirtualAirlineMembers: getVirtualAirlineMembers_1.getVirtualAirlineMembers,
    getVirtualAirline: getVirtualAirline_1.getVirtualAirline,
};
exports.default = Api;
