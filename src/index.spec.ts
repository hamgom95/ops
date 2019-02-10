import * as ops from './index';
import { expect } from 'chai';
import 'mocha';

describe('add()', () => {

    it('should add numbers', () => {
        expect(ops.add(1,2)).to.equal(3);
    });

    it('should concat strings', () => {
        expect(ops.add("Hallo ", "Welt")).to.equal("Hallo Welt");
    });

});
