const crypto = require('crypto');

const x = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const md5 = str => crypto.createHash('md5').update(`${str}`).digest('hex');

const randStr = (len = 36) => {
  const maxPos = x.length;
  let pwd = '';
  for (let i = 0; i < len; i += 1) {
    pwd += x.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd;
};

module.exports = (salt = randStr(6), len = 36) => {
  const key = randStr(len);
  const secret = md5(salt + md5(key));
  return { key, secret, salt };
};
