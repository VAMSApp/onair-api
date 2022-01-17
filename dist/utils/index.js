"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uuid4 = void 0;
/** @see https://stackoverflow.com/a/38191078 */
exports.uuid4 = /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
exports.default = {
    uuid4: exports.uuid4,
};
