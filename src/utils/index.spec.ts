import { describe } from 'mocha';
import { expect } from 'chai';
import { uuid4, } from '.';

describe('Utils()', function() {
    describe('uuid4()', function() {
        it('should validate a given uuid4 string and return true or false if its valid', () => {

            const uuidStr: string = '596b6c2e-4ac7-44e9-b1d4-a4299030cb04';
            const actual: boolean = uuid4.test(uuidStr);
            const expected = true;
            
            expect(actual).to.equal(expected);
        })
    })
})
