// 1664 by Angleman, MIT License
// Sort safe base16 to/from base64 conversion with filename and url safe characters written in pure javascript

function Base1664() {
	var BASE64_STRING = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz~'
	var BigNumber     = require('bignumber.js')
	
	function base16to64(base16) {
		while (base16.length % 3 != 0 && base16.length > 0) base16 = '0' + base16
		var result = ''
		while (base16.length > 0) {
			var chunk   = base16.substr(base16.length-3, 3)
			var base10  = parseInt(chunk, 16)
			var base64a = Math.floor(base10 / 64)
			var base64b = base10 % 64
			result      = BASE64_STRING.substr(base64a, 1) + BASE64_STRING.substr(base64b, 1) + result
	//		console.log(chunk, base10, base64a, base64b, result)
			base16      = base16.substr(0, base16.length-3)
		}
		return result
	}

	function base64to16(base64) {
		while (base64.length % 2 != 0 && base64.length > 0) base64 = '0' + base64
		var result = ''
		while (base64.length > 0) {
			var chunk   = base64.substr(-2)
			var base64a = BASE64_STRING.indexOf(chunk[0])
			var base64b = BASE64_STRING.indexOf(chunk[1])
			var base10  = base64a * 64 + base64b
			var base16  = '00' + base10.toString(16)
			result      = base16.substr(-3) + result
	//		console.log(base64a, base64b, base10, base16, result)
			base64      = base64.substr(0, base64.length-2)
		}
		if (result.length %2 == 1 && result[0] == '0') {
			result = result.substr(1)
		}
		return result
	}

	function base10to16(base10) {
		if (typeof base10 != 'string') base10 = '' + base10
		base10 = base10.match(/[0-9]*/)[0]
		
		var result = BigNumber(base10, 10).toString(16)
		return result
	}
	
	function base16to10(base16) {
		var result = BigNumber(base16, 16).toString(10)
		return result
	}
	
	function base10to64(base10) {
		return base16to64(base10to16(base10))
	}
	
	function base64to10(base64) {
		return base16to10(base64to16(base64))
	}
	

	// returns YYYY-MM-DD hh:mm:ss formated string
	function base64toDate(base64) {
		var year   = BASE64_STRING.indexOf(base64[0]) + 2010
		var month  = '0' + BASE64_STRING.indexOf(base64[1])
		var day    = '0' + BASE64_STRING.indexOf(base64[2])
		var hour   = '0' + BASE64_STRING.indexOf(base64[3])
		var minute = '0' + BASE64_STRING.indexOf(base64[4])
		var second = '0' + BASE64_STRING.indexOf(base64[5])
		var result = year + '-' + month.substr(-2) + '-' + day.substr(-2) + ' ' + hour.substr(-2) + ':' + minute.substr(-2) + ':' + second.substr(-2)
		return result
	}
	
	
	// assumes YYYY-MM-DD hh:mm:ss formated string
	function dateToBase64(date) {
		var majorminor = date.split(' ')
		var major      = majorminor[0].split('-')
		var minor      = majorminor[1].split(':')
		var year   = parseInt(major[0]) - 2010
		var month  = parseInt(major[1])
		var day    = parseInt(major[2])
		var hour   = parseInt(minor[0])
		var minute = parseInt(minor[1])
		var second = parseInt(minor[2])

		year   = BASE64_STRING.substr(year, 1)
		month  = BASE64_STRING.substr(month, 1)
		day    = BASE64_STRING.substr(day, 1)
		hour   = BASE64_STRING.substr(hour, 1)
		minute = BASE64_STRING.substr(minute, 1)
		second = BASE64_STRING.substr(second, 1)
		result = year + month + day + hour + minute + second

		return result
	}
	
	Bases = {
		base10 : {
			to16:   base10to16,
			from16: base16to10,
			to64:   base10to64,
			from64: base64to10
		},
		base16 : {
			to10:   base16to10,
			from10: base10to16,
			to64:   base16to64,
			from64: base64to16
		},
		base64 : {
			to10:     base64to10,
			from10:   base10to64,
			to16:     base64to16,
			from16:   base16to64,
			toDate:   base64toDate,
			fromDate: dateToBase64
		},
		
		base10to16: base10to16,
		base10to64: base10to64,
		base16to10: base16to10,
		base64to10: base64to10,
		base16to64: base16to64,
		base64to16: base64to16,
		
		to64: base16to64,
		to16: base64to16
	}
	
	return Bases
}

module.exports = Base1664()