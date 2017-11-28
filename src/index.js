const crypto = require('crypto');

const x = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const maxPos = x.length;
const md5 = str => crypto.createHash('md5').update(`${str}`).digest('hex');

const rnd = seed => (((seed * 9301) + 49297) % 233280) / (233280.0);
const rand = number => Math.floor(rnd(new Date().getTime() * Math.random()) * number);

const randStr = (len = 36) => {
  let pwd = '';
  for (let i = 0; i < len; i += 1) {
    pwd += x.charAt(rand(maxPos));
  }
  return pwd;
};

module.exports = (salt = randStr(6), len = 36) => {
  const key = randStr(len);
  const secret = md5(salt + md5(key));
  return { key, secret, salt };
};
