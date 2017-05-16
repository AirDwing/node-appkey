const gen = require('../src');

suite('Benchmark', () => {
  bench('gen', () => {
    gen();
  });
});
