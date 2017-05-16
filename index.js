const gen = require('./src');

const {key, secret} = gen();
console.log(key, secret);
