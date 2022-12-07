"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidGuid = void 0;
var uuid_1 = require("uuid");
function isValidGuid(guid) {
    return (0, uuid_1.validate)(guid);
}
exports.isValidGuid = isValidGuid;
