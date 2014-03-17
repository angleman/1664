base10 = 'a23094802398' // NaN
base10 = '2309,4802398 a' // NaN
base10 = base10.match(/[0-9]*/)[0]


console.log(base10)