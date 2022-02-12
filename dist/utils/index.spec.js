"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mocha_1 = require("mocha");
var chai_1 = require("chai");
var _1 = require(".");
(0, mocha_1.describe)('Utils()', function () {
    (0, mocha_1.describe)('uuid4()', function () {
        it('should validate a given uuid4 string and return true or false if its valid', function () {
            var uuidStr = '596b6c2e-4ac7-44e9-b1d4-a4299030cb04';
            var actual = _1.uuid4.test(uuidStr);
            var expected = true;
            (0, chai_1.expect)(actual).to.equal(expected);
        });
    });
});
