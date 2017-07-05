# AppKey

App Key/Secret Generator

[![npm](https://img.shields.io/npm/v/appkey.svg?style=plastic)](https://npmjs.org/package/appkey) [![npm](https://img.shields.io/npm/dm/appkey.svg?style=plastic)](https://npmjs.org/package/appkey)
[![npm](https://img.shields.io/npm/dt/appkey.svg?style=plastic)](https://npmjs.org/package/appkey)

## 安装及使用

```bash
yarn add appkey
# 或
npm i -S appkey
```

示例代码:

```js
const gen = require('appkey');

const {key, secret} = gen();
console.log(key, secret);
```

## 参数说明

- SALT(string): 加盐参数
- Length(int): 生成的`Key`长度

`SALT`默认值为6位随机字符,默认生成的`Key`为36字节,`Secret`长度固定为32个字节.

## Benchmark

```
gen x 121,577 ops/sec ±1.12% (78 runs sampled)
```

## License

MIT

通过支付宝捐赠：

![qr](https://cloud.githubusercontent.com/assets/1890238/15489630/fccbb9cc-2193-11e6-9fed-b93c59d6ef37.png)
