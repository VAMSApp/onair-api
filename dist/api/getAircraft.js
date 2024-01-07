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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
exports.getAircraft = void 0;
var onAirRequest_1 = __importDefault(require("./onAirRequest"));
var types_1 = require("../types");
var utils_1 = require("../utils");
var endPoint = 'aircraft/';
var getAircraft = function (aircraftId, apiKey) { return __awaiter(void 0, void 0, void 0, function () {
    var response, aircraft, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!aircraftId)
                    throw new Error('No aircraftId provided');
                if (!apiKey)
                    throw new Error('No apiKey provided');
                if (!(0, utils_1.isValidGuid)(aircraftId))
                    throw new Error('Invalid Aircraft Id provided');
                if (!(0, utils_1.isValidGuid)(apiKey))
                    throw new Error('Invalid Api Key provided');
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, (0, onAirRequest_1.default)("https://server1.onair.company/api/v1/".concat(endPoint).concat(aircraftId), apiKey)];
            case 2:
                response = _a.sent();
                if (typeof response.data.Content !== 'undefined') {
                    aircraft = response.data.Content;
                    aircraft.AircraftStatusName = types_1.aircraftStatuses[aircraft.AircraftStatus];
                    aircraft.AircraftType.EngineTypeName = types_1.engineTypes[aircraft.AircraftType.engineType];
                    return [2 /*return*/, aircraft];
                }
                else {
                    if (response.data.Error) {
                        throw new Error(response.data.Error);
                    }
                    else {
                        throw new Error(response.data.Error ? response.data.Error : "Aircraft ID code ".concat(aircraftId, " not found"));
                    }
                }
                return [3 /*break*/, 4];
            case 3:
                e_1 = _a.sent();
                console.error("OnAirApi::getAircraft() Error getting Details for Aircraft ID \"".concat(aircraftId, "\""), e_1);
                return [2 /*return*/, null];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getAircraft = getAircraft;
