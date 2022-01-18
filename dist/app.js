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
define("types/Runway", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
});
define("types/AirportLocation", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
});
define("types/AirportFrequency", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
});
define("types/Airport", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
});
define("types/Company", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
});
define("types/Aircraft", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.aircraftStatuses = exports.engineTypes = void 0;
    exports.engineTypes = [
        'Piston',
        'Jet',
        'Sailplane',
        'Helo Turbine',
        'Rocket',
        'Turboprop'
    ];
    exports.aircraftStatuses = [
        'Idle',
        'Maintenance',
        'ApronWork',
        'InFlight',
        'Warp',
        'Ferry'
    ];
});
define("types/Fbo", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
});
define("types/Flight", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
});
define("utils/config", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.config = void 0;
    exports.config = {
        apiUrl: '.onair.company/api/v1/',
        credentialsFilename: '.onair-credentials'
    };
});
define("api/onAirRequest", ["require", "exports", "axios"], function (require, exports, axios_1) {
    "use strict";
    exports.__esModule = true;
    /**
     * Generic Get request to OnAir
     *
     * @param url
     * @param apiKey
     * @param requestData
     * @returns Promise<AxiosResponse<T>>
     */
    exports["default"] = (function (url, apiKey, requestData) { return __awaiter(void 0, void 0, void 0, function () {
        var axiosConfig;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    axiosConfig = {
                        headers: {
                            'oa-apikey': apiKey,
                            'Accept': 'application/json',
                            'User-Agent': "CLI for OnAir Company"
                        }
                    };
                    if (typeof requestData !== 'undefined') {
                        axiosConfig.params = requestData;
                    }
                    return [4 /*yield*/, axios_1["default"].get(url, axiosConfig)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); });
});
define("utils/index", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.uuid4 = void 0;
    /** @see https://stackoverflow.com/a/38191078 */
    exports.uuid4 = /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
    exports["default"] = {
        uuid4: exports.uuid4
    };
});
define("api/getAircraft", ["require", "exports", "api/onAirRequest", "utils/config", "utils/index"], function (require, exports, onAirRequest_1, config_1, index_1) {
    "use strict";
    exports.__esModule = true;
    var endPoint = 'aircraft/';
    var getAircraft = function (aircraftId, apiKey, world) { return __awaiter(void 0, void 0, void 0, function () {
        var response, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!aircraftId.match(index_1.uuid4)) {
                        throw new Error('Aircraft ID is incorrect! It should be a 36 character UUID');
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, (0, onAirRequest_1["default"])("https://".concat(world).concat(config_1.config.apiUrl).concat(endPoint).concat(aircraftId), apiKey)];
                case 2:
                    response = _a.sent();
                    if (typeof response.data.Content !== 'undefined') {
                        return [2 /*return*/, response.data.Content];
                    }
                    else {
                        throw new Error(response.data.Error ? response.data.Error : "Aircraft ID code ".concat(aircraftId, " not found"));
                    }
                    ;
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    throw new Error(e_1.message);
                case 4: return [2 /*return*/];
            }
        });
    }); };
    exports["default"] = getAircraft;
});
define("utils/utils", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.uuid4 = void 0;
    /** @see https://stackoverflow.com/a/38191078 */
    exports.uuid4 = /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
});
define("api/getAircraftFlights", ["require", "exports", "api/onAirRequest", "utils/config", "utils/utils"], function (require, exports, onAirRequest_2, config_2, utils_1) {
    "use strict";
    exports.__esModule = true;
    exports.getAircraftFlights = void 0;
    var endPoint = 'aircraft/';
    var getAircraftFlights = function (aircraftId, apiKey, world, page, limit) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 10; }
        return __awaiter(void 0, void 0, void 0, function () {
            var startIndex, response, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!aircraftId.match(utils_1.uuid4)) {
                            throw new Error('Aircraft ID is incorrect! It should be a 36 character UUID');
                        }
                        startIndex = page > 1 ? limit * page : 0;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, (0, onAirRequest_2["default"])("https://".concat(world).concat(config_2.config.apiUrl).concat(endPoint).concat(aircraftId, "/flights"), apiKey, {
                                startIndex: startIndex,
                                limit: limit
                            })];
                    case 2:
                        response = _a.sent();
                        if (typeof response.data.Content !== 'undefined') {
                            return [2 /*return*/, response.data.Content];
                        }
                        else {
                            throw new Error(response.data.Error ? response.data.Error : "Aircraft ID code ".concat(aircraftId.toUpperCase(), " not found"));
                        }
                        ;
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _a.sent();
                        throw new Error(e_2.message);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    exports.getAircraftFlights = getAircraftFlights;
    exports["default"] = exports.getAircraftFlights;
});
define("api/getAirport", ["require", "exports", "utils/config", "api/onAirRequest"], function (require, exports, config_3, onAirRequest_3) {
    "use strict";
    exports.__esModule = true;
    exports.getAirport = void 0;
    var endPoint = 'airports/';
    var getAirport = function (icao, apiKey, world) { return __awaiter(void 0, void 0, void 0, function () {
        var response, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, (0, onAirRequest_3["default"])("https://".concat(world).concat(config_3.config.apiUrl).concat(endPoint).concat(icao), apiKey)];
                case 1:
                    response = _a.sent();
                    if (typeof response.data.Content !== 'undefined') {
                        return [2 /*return*/, response.data.Content];
                    }
                    else {
                        throw new Error(response.data.Error ? response.data.Error : "Airport ICAO code ".concat(icao.toUpperCase(), " not found"));
                    }
                    ;
                    return [3 /*break*/, 3];
                case 2:
                    e_3 = _a.sent();
                    throw new Error(e_3.message);
                case 3: return [2 /*return*/];
            }
        });
    }); };
    exports.getAirport = getAirport;
    exports["default"] = exports.getAirport;
});
define("api/getCompanyFbos", ["require", "exports", "utils/config", "api/onAirRequest"], function (require, exports, config_4, onAirRequest_4) {
    "use strict";
    exports.__esModule = true;
    exports.getCompanyFbos = void 0;
    var endPoint = 'company/';
    var getCompanyFbos = function (companyId, apiKey, world) { return __awaiter(void 0, void 0, void 0, function () {
        var response, e_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, (0, onAirRequest_4["default"])("https://".concat(world).concat(config_4.config.apiUrl).concat(endPoint).concat(companyId, "/fbos"), apiKey)];
                case 1:
                    response = _a.sent();
                    if (typeof response.data.Content !== 'undefined') {
                        return [2 /*return*/, response.data.Content];
                    }
                    else {
                        throw new Error(response.data.Error ? response.data.Error : "Company Id \"".concat(companyId, "\"\" not found"));
                    }
                    ;
                    return [3 /*break*/, 3];
                case 2:
                    e_4 = _a.sent();
                    throw new Error(e_4.response.status === 400 ? "Company Id \"".concat(companyId, "\"\" not found") : e_4.message);
                case 3: return [2 /*return*/];
            }
        });
    }); };
    exports.getCompanyFbos = getCompanyFbos;
    exports["default"] = exports.getCompanyFbos;
});
define("api/getCompanyFleet", ["require", "exports", "utils/config", "api/onAirRequest"], function (require, exports, config_5, onAirRequest_5) {
    "use strict";
    exports.__esModule = true;
    exports.getCompanyFleet = void 0;
    var endPoint = 'company/';
    var getCompanyFleet = function (companyId, apiKey, world) { return __awaiter(void 0, void 0, void 0, function () {
        var response, e_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, (0, onAirRequest_5["default"])("https://".concat(world).concat(config_5.config.apiUrl).concat(endPoint).concat(companyId, "/fleet"), apiKey)];
                case 1:
                    response = _a.sent();
                    if (typeof response.data.Content !== 'undefined') {
                        return [2 /*return*/, response.data.Content];
                    }
                    else {
                        throw new Error(response.data.Error ? response.data.Error : "Company Id \"".concat(companyId, "\"\" not found"));
                    }
                    ;
                    return [3 /*break*/, 3];
                case 2:
                    e_5 = _a.sent();
                    throw new Error(e_5.response.status === 400 ? "Company Id \"".concat(companyId, "\"\" not found") : e_5.message);
                case 3: return [2 /*return*/];
            }
        });
    }); };
    exports.getCompanyFleet = getCompanyFleet;
    exports["default"] = exports.getCompanyFleet;
});
define("api/getCompanyFlights", ["require", "exports", "utils/config", "api/onAirRequest"], function (require, exports, config_6, onAirRequest_6) {
    "use strict";
    exports.__esModule = true;
    exports.getCompanyFlights = void 0;
    var endPoint = 'company/';
    var getCompanyFlights = function (companyId, apiKey, world, page, limit) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 10; }
        return __awaiter(void 0, void 0, void 0, function () {
            var startIndex, response, e_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        startIndex = page > 1 ? limit * page : 0;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, (0, onAirRequest_6["default"])("https://".concat(world).concat(config_6.config.apiUrl).concat(endPoint).concat(companyId, "/flights"), apiKey, {
                                startIndex: startIndex,
                                limit: limit
                            })];
                    case 2:
                        response = _a.sent();
                        if (typeof response.data.Content !== 'undefined') {
                            return [2 /*return*/, response.data.Content];
                        }
                        else {
                            throw new Error(response.data.Error ? response.data.Error : "Company Id \"".concat(companyId, "\"\" not found"));
                        }
                        ;
                        return [3 /*break*/, 4];
                    case 3:
                        e_6 = _a.sent();
                        throw new Error(e_6.response.status === 400 ? "Company Id \"".concat(companyId, "\"\" not found") : e_6.message);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    exports.getCompanyFlights = getCompanyFlights;
    exports["default"] = exports.getCompanyFlights;
});
define("api/getCompany", ["require", "exports", "utils/config", "api/onAirRequest"], function (require, exports, config_7, onAirRequest_7) {
    "use strict";
    exports.__esModule = true;
    exports.getCompany = void 0;
    var endPoint = 'company/';
    var getCompany = function (companyId, apiKey, world) { return __awaiter(void 0, void 0, void 0, function () {
        var response, e_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, (0, onAirRequest_7["default"])("https://".concat(world).concat(config_7.config.apiUrl).concat(endPoint).concat(companyId), apiKey)];
                case 1:
                    response = _a.sent();
                    if (typeof response.data.Content !== 'undefined') {
                        return [2 /*return*/, response.data.Content];
                    }
                    else {
                        throw new Error(response.data.Error ? response.data.Error : "Company Id \"".concat(companyId, "\"\" not found"));
                    }
                    ;
                    return [3 /*break*/, 3];
                case 2:
                    e_7 = _a.sent();
                    throw new Error(e_7.response.status === 400 ? "Company Id \"".concat(companyId, "\"\" not found") : e_7.message);
                case 3: return [2 /*return*/];
            }
        });
    }); };
    exports.getCompany = getCompany;
    exports["default"] = exports.getCompany;
});
define("api/getFlight", ["require", "exports", "api/onAirRequest", "utils/config", "utils/utils"], function (require, exports, onAirRequest_8, config_8, utils_2) {
    "use strict";
    exports.__esModule = true;
    exports.getFlight = void 0;
    var endPoint = 'flights/';
    var getFlight = function (flightId, apiKey, world) { return __awaiter(void 0, void 0, void 0, function () {
        var response, e_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!flightId.match(utils_2.uuid4)) {
                        throw new Error('Flight ID is incorrect! It should be a 36 character UUID');
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, (0, onAirRequest_8["default"])("https://".concat(world).concat(config_8.config.apiUrl).concat(endPoint).concat(flightId), apiKey)];
                case 2:
                    response = _a.sent();
                    if (typeof response.data.Content !== 'undefined') {
                        return [2 /*return*/, response.data.Content];
                    }
                    else {
                        throw new Error(response.data.Error ? response.data.Error : "Flight ID ".concat(flightId, " not found"));
                    }
                    ;
                    return [3 /*break*/, 4];
                case 3:
                    e_8 = _a.sent();
                    throw new Error(e_8.message);
                case 4: return [2 /*return*/];
            }
        });
    }); };
    exports.getFlight = getFlight;
    exports["default"] = exports.getFlight;
});
define("api/index", ["require", "exports", "api/getAircraft", "api/getAircraftFlights", "api/getAirport", "api/getCompanyFbos", "api/getCompanyFleet", "api/getCompanyFlights", "api/getCompany", "api/getFlight"], function (require, exports, getAircraft_1, getAircraftFlights_1, getAirport_1, getCompanyFbos_1, getCompanyFleet_1, getCompanyFlights_1, getCompany_1, getFlight_1) {
    "use strict";
    exports.__esModule = true;
    exports.getFlight = exports.getCompany = exports.getCompanyFlights = exports.getCompanyFleet = exports.getCompanyFbos = exports.getAirport = exports.getAircraftFlights = exports.getAircraft = void 0;
    exports.getAircraft = getAircraft_1["default"];
    exports.getAircraftFlights = getAircraftFlights_1["default"];
    exports.getAirport = getAirport_1["default"];
    exports.getCompanyFbos = getCompanyFbos_1["default"];
    exports.getCompanyFleet = getCompanyFleet_1["default"];
    exports.getCompanyFlights = getCompanyFlights_1["default"];
    exports.getCompany = getCompany_1["default"];
    exports.getFlight = getFlight_1["default"];
    exports["default"] = {
        getCompany: exports.getCompany,
        getCompanyFleet: exports.getCompanyFleet,
        getAircraft: exports.getAircraft,
        getAircraftFlights: exports.getAircraftFlights,
        getAirport: exports.getAirport,
        getCompanyFbos: exports.getCompanyFbos,
        getCompanyFlights: exports.getCompanyFlights,
        getFlight: exports.getFlight
    };
});
define("app", ["require", "exports", "api/index", "dotenv/config"], function (require, exports, index_2) {
    "use strict";
    exports.__esModule = true;
    var OnAirApi = /** @class */ (function () {
        // Constructor
        function OnAirApi(_apiKey, _companyId, _world) {
            // Properties
            this.apiKey = null;
            this.companyId = null;
            this.world = null;
            if (!_apiKey)
                throw new Error('No API Key provided');
            if (!_companyId)
                throw new Error('No Company ID provided');
            if (!_world)
                throw new Error('No World provided');
            this.apiKey = _apiKey;
            this.companyId = _companyId;
            this.world = _world;
        }
        // // Accessors
        // get apiKey() {
        //     return this.apiKey;
        // }
        // get companyId() {
        //     return this.companyId;
        // }
        // get world() {
        //     return this.world;
        // }
        // set world(w) {
        //     this.world = w;
        // }
        // set apiKey(key) {
        //     this.apiKey = key;
        // }
        // set companyId(id) {
        //     this.companyId = id;
        // }
        OnAirApi.prototype.getCompanyDetails = function () {
            return __awaiter(this, void 0, void 0, function () {
                var company;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, index_2["default"].getCompany(this.companyId, this.apiKey, this.world)];
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
                        case 0: return [4 /*yield*/, index_2["default"].getCompanyFleet(this.companyId, this.apiKey, this.world)];
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
                        case 0: return [4 /*yield*/, index_2["default"].getCompanyFbos(this.companyId, this.apiKey, this.world)];
                        case 1:
                            companyFbos = _a.sent();
                            return [2 /*return*/, companyFbos];
                    }
                });
            });
        };
        OnAirApi.prototype.getCompanyFlights = function () {
            return __awaiter(this, void 0, void 0, function () {
                var companyFlights;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, index_2["default"].getCompanyFlights(this.companyId, this.apiKey, this.world)];
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
                            return [4 /*yield*/, index_2["default"].getAircraft(aircraftId, this.apiKey, this.world)];
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
                            return [4 /*yield*/, index_2["default"].getAircraftFlights(aircraftId, this.apiKey, this.world)];
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
                            return [4 /*yield*/, index_2["default"].getAirport(airportCode, this.apiKey, this.world)];
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
                            return [4 /*yield*/, index_2["default"].getFlight(flightId, this.apiKey, this.world)];
                        case 1:
                            flight = _a.sent();
                            return [2 /*return*/, flight];
                    }
                });
            });
        };
        return OnAirApi;
    }());
    exports["default"] = OnAirApi;
});
