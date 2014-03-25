# 1664

Sort safe base16 to/from base64 conversion with filename and url safe characters written in pure javascript 

## Install

```sh
npm install 1664
```

## Usage

Note: API changed with 0.2.x depreciates ```base.to16``` and ```base.to64```

MD5 example

```js
base   = require('1664')
base.to16('z') // depreciated
base.to64('f') // depreciated
base16 = base.base16
base64 = base.base64
MD5    = require('MD5')
md5    = MD5('hello')
md564  = base16.to64(md5)
md5b   = base64.to16(md564)

// alternate:
md564  = base64.from16(md5)
md5b   = base16.from64(md564)

console.log(md5.length,   md5)    // 32 '5d41402abc4b2a76b9719d911017c592'
console.log(md564.length, md564)  // 22 '1TGK0fk4hfTgamcP4G5xMI'
console.log('same?', (md5==md5b)) // same? true

// date string
console.log(base64.fromDate('2012-10-18 02:57:49')) // 2AI2um
console.log(base64.toDate('2AI2um'))                // 2012-10-18 02:57:49
```



SHA-512 example

```js
base16 = require('1664').base16
SHA    = require('jssha')
shaObj = new SHA("hello", "TEXT")
hash   = shaObj.getHash("SHA-512", "HEX")
hash64 = base16.to64(hash)
hashb  = base16.from64(hash64)

console.log(hash.length,   hash)    // 128 '9b71d224bd62f3785d96d46ad3ea3d73319bfbc2890caadae2dff72519673ca72323c3d99ba5c11d7c7acc6e14b8c5da0c4663475c2e5c3adef46f73bcdec043'
console.log(hash64.length, hash64)  // 86 '2RST8_kMBoU5rMq6gJvZqoCPkwld_CfigYs~Sa6MSxenCZlybReS4TV7gCRXItmTdCHbD7N2uSEiwpRsExsh13'
console.log('same?', (hash==hashb)) // same? true
```

## License

### MIT
