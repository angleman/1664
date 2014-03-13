# 1664

Sort safe base16 to/from base64 conversion with filename and url safe characters written in pure javascript 

## Install

```sh
npm install 1664
```

## Usage

MD5 example

```js
base   = require('1664')
MD5    = require('MD5')
md5    = MD5('hello')
md564  = base.to64(md5)
md5b   = base.to16(md564)

console.log(md5.length,   md5)    // 32 '5d41402abc4b2a76b9719d911017c592'
console.log(md564.length, md564)  // 22 '1TGK0fk4hfTgamcP4G5xMI'
console.log('same?', (md5==md5b)) // same? true
```

SHA-512 example

```js
base   = require('1664')
SHA    = require('jssha')
shaObj = new SHA("hello", "TEXT")
hash   = shaObj.getHash("SHA-512", "HEX")
hash64 = base.to64(hash)
hashb  = base.to16(hash64)

console.log(hash.length,   hash)    // 128 '9b71d224bd62f3785d96d46ad3ea3d73319bfbc2890caadae2dff72519673ca72323c3d99ba5c11d7c7acc6e14b8c5da0c4663475c2e5c3adef46f73bcdec043'
console.log(hash64.length, hash64)  // 86 '2RST8_kMBoU5rMq6gJvZqoCPkwld_CfigYs~Sa6MSxenCZlybReS4TV7gCRXItmTdCHbD7N2uSEiwpRsExsh13'
console.log('same?', (hash==hashb)) // same? true
```

## License

### MIT
