const g = require('generatorics');

const firms_all = 25;
const firms_ukrainian = 10;
const firms_russian = firms_all - firms_ukrainian;
const contracts = 5;

const choices_all = g.C(firms_all, contracts);
const choices_positive =
  (g.C(firms_ukrainian, 0) * g.C(firms_russian, 5))
  + (g.C(firms_ukrainian, 1) * g.C(firms_russian, 4));

const n = choices_all;
const m = choices_positive;

const result = ((1 - (m / n)) * 100).toFixed(2);

console.log(result);
