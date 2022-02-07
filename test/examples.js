const mocha = require('mocha');
const {assert} = require('chai');

const {sumTest} = require('../app/examples');

describe('test calculator sum', () => {
    it('sum of numbers will be equal than 2', () => {
        assert.equal(sumTest(1,1), 2);
    });

    it('sum of numbers will be diferent than 2', () => {
        assert.notEqual(sumTest(1,2), 2);
    });

    it('result is not a NaN', () => {
        assert.isNaN(sumTest(), NaN);
    });

    it('result is a string', () => {
        assert.isString(sumTest('hola', 2), 'hola2');
    });

    it('result is not a number', () => {
        assert.isNotNumber(sumTest('hola', 2), 'hola2');
    })
});