const mocha = require('mocha');
const { assert } = require('chai');

const { validate, createObject } = require('../app/validator');

describe('validar email y password', () => {

    it('email y password validos', () => {
        assert.isTrue(validate('fede@gmail.com', '123456', 25));
    })

    it('email invalido', () => {
        assert.ifError(validate('fedemgmail.com', '123456'));
    })

    it('password invalido', () => {
        assert.isFalse(validate('fede@gmail.com', '123'));
    })

    it('age is a number', () => {
        assert.isTrue(validate('fede@gmail.com', '1234567', 24));
    })

    it('age is not a number', () => {
        assert.isNaN(validate('fede@gmail.com', '1234567', 'hola'));
    })
});

describe('create a object person', () => {

    it('person is an object', () => {
        assert.isObject(createObject());
    })

    it('person is an object', () => {
        assert.isNotObject('esto es un string');
    })

    it('createObject is a function', () => {
        assert.isFunction(createObject);
    })

    it('createObject is typeof object', () => {
        assert.typeOf(createObject(), 'object');
    })

    it('createObject is an object empty', () => {
        assert.isEmpty(createObject());
    })

})