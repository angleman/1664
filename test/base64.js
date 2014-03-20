// mocha doc: http://visionmedia.github.io/mocha/

assert = require('assert')
//mocha = require('mocha')
//should = mocha.should

var testdate   = '2012-10-18 02:57:49'
var testdate64 = '2AI2um'

describe('base64', function() {
	it('.fromDate', function () {
		var base64 = require('../index.js').base64
		var b64    = base64.fromDate(testdate)
		assert(b64 == testdate64)
	})

	it('.toDate', function () {
		var base64 = require('../index.js').base64
		var date   = base64.toDate(testdate64)
		assert(date == testdate)
	})
})

