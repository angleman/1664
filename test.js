var BigNumber = require('bignumber.js')

var bn = BigNumber('13953523308134308', 10)
var b16 = bn.toString(16)

var bn2 = BigNumber(b16, 16)

var b10 = bn2.toString(10)

console.log(b16, b10, 'ok')
