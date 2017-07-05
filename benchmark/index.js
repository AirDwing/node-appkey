const gen = require('../src');
const { Suite } = require('benchmark');

const suite = new Suite();

suite.add('gen', () => {
  gen();
}).on('cycle', (event) => {
  console.log(String(event.target));
})
.run({ async: true });
