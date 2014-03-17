// mocha doc: http://visionmedia.github.io/mocha/

assert = require('assert')
//mocha = require('mocha')
//should = mocha.should

describe('basic', function() {
    it('module loads', function() {
		var index = require('../index.js')
		assert(index !== undefined)
    })
	
	it('base16.to64', function () {
		var base16 = require('../index.js').base16
		assert(base16.to64('5d41402abc4b2a76b9719d911017c592') == '1TGK0fk4hfTgamcP4G5xMI')
	})
	
	it('base16.from64', function () {
		var base16 = require('../index.js').base16
		assert(base16.from64('1TGK0fk4hfTgamcP4G5xMI') == '5d41402abc4b2a76b9719d911017c592')
	})

	it('base10.to16', function () {
		var base10 = require('../index.js').base10
		assert(base10.to16('13950832442452636') == '3190354c0daa9c')
	})

	it('base10.to64', function () {
		var base10 = require('../index.js').base10
		assert(base10.to64('191561942608236107294793378084303638139216') == '0ZBoC2MyGYCkuFtTluSX195G')
	})

	it('base10.from64', function () {
		var base10 = require('../index.js').base10
		assert(base10.from64('0ZBoC2MyGYCkuFtTluSX195G') == '191561942608236107294793378084303638139216')
	})

	it('base64.fromDate', function () {
		var base64 = require('../index.js').base64
		var date   = '2012-10-18T02:57:49.000Z'
		var b64    = base64.fromDate(new Date(date))
		assert(b64 == '29HKum')
	})

	it('base64.toDate', function () {
		var base64 = require('../index.js').base64
		var date   = base64.toDate('29HKum').toJSON()
		assert(date == '2012-10-18T02:57:49.000Z')
	})
})

