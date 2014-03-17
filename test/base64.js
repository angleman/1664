// mocha doc: http://visionmedia.github.io/mocha/

assert = require('assert')
//mocha = require('mocha')
//should = mocha.should

describe('base64', function() {
	it('.fromDate', function () {
		var base64 = require('../index.js').base64
		var date   = '2012-10-18T02:57:49.000Z'
		var b64    = base64.fromDate(new Date(date))
		assert(b64 == '29HKum')
	})

	it('.toDate', function () {
		var base64 = require('../index.js').base64
		var date   = base64.toDate('29HKum').toJSON()
		assert(date == '2012-10-18T02:57:49.000Z')
	})
})

