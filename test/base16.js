// mocha doc: http://visionmedia.github.io/mocha/

assert = require('assert')
//mocha = require('mocha')
//should = mocha.should

describe('base16', function() {
	it('.to64', function () {
		var base16 = require('../index.js').base16
		assert(base16.to64('5d41402abc4b2a76b9719d911017c592') == '1TGK0fk4hfTgamcP4G5xMI')
	})
	
	it('.from64', function () {
		var base16 = require('../index.js').base16
		assert(base16.from64('1TGK0fk4hfTgamcP4G5xMI') == '5d41402abc4b2a76b9719d911017c592')
	})
})

