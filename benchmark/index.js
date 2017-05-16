const gen = require('../src');

suite('Benchmark', () => {
  set('concurrency', 10);

  bench('gen', () => {
    gen();
  });
});
