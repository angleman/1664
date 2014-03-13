// mocha doc: http://visionmedia.github.io/mocha/

assert = require('assert')
//mocha = require('mocha')
//should = mocha.should

describe('basic', function() {
    it('module loads', function() {
		index = require('../index.js')
		assert(index !== undefined)
    })
	
	it('to64 works', function () {
		base = require('../index.js')
		assert(base.to64('5d41402abc4b2a76b9719d911017c592') == '1TGK0fk4hfTgamcP4G5xMI')
	})
	
	it('to16 works', function () {
		base = require('../index.js')
		assert(base.to16('1TGK0fk4hfTgamcP4G5xMI') == '5d41402abc4b2a76b9719d911017c592')
	})
})

