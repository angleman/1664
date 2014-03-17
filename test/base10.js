// mocha doc: http://visionmedia.github.io/mocha/

assert = require('assert')
//mocha = require('mocha')
//should = mocha.should

describe('base10', function() {
	it('.to16', function () {
		var base10 = require('../index.js').base10
		assert(base10.to16('13950832442452636') == '3190354c0daa9c')
	})

	it('.from16', function () {
		var base10 = require('../index.js').base10
		assert(base10.from16('3190354c0daa9c') == '13950832442452636')
	})

	it('.to64', function () {
		var base10 = require('../index.js').base10
		assert(base10.to64('191561942608236107294793378084303638139216') == '0ZBoC2MyGYCkuFtTluSX195G')
	})

	it('.to64', function () {
		var base10 = require('../index.js').base10
		assert(base10.to64('13950832442452636') == '0m_3LC3QfS')
	})

	it('.from64', function () {
		var base10 = require('../index.js').base10
		assert(base10.from64('0ZBoC2MyGYCkuFtTluSX195G') == '191561942608236107294793378084303638139216')
	})
})

