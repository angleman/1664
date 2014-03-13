// 1664 by Angleman, MIT License
// Sort safe base16 to/from base64 conversion with filename and url safe characters written in pure javascript

function Module() {
	BASE64_STRING = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz~'
	
	Base = {
		to64: function(base16) {
			while (base16.length % 3 != 0 && base16.length > 0) base16 = '0' + base16
			result = ''
			while (base16.length > 0) {
				chunk   = base16.substr(base16.length-3, 3)
				base10  = parseInt(chunk, 16)
				base64a = Math.floor(base10 / 64)
				base64b = base10 % 64
				result = BASE64_STRING.substr(base64a, 1) + BASE64_STRING.substr(base64b, 1) + result
		//		console.log(chunk, base10, base64a, base64b, result)
				base16  = base16.substr(0, base16.length-3)
			}
			return result
		},
	
		to16: function(base64) {
			while (base64.length % 2 != 0 && base64.length > 0) base64 = '0' + base64
			result = ''
			while (base64.length > 0) {
				chunk   = base64.substr(-2)
				base64a = BASE64_STRING.indexOf(chunk[0])
				base64b = BASE64_STRING.indexOf(chunk[1])
				base10  = base64a * 64 + base64b
				base16  = '00' + base10.toString(16)
				result  = base16.substr(-3) + result
		//		console.log(base64a, base64b, base10, base16, result)
				base64  = base64.substr(0, base64.length-2)
			}
			if (result.length %2 == 1 && result[0] == '0') {
				result = result.substr(1)
			}
			return result
		}
	}
	return Base
}

module.exports = Module()