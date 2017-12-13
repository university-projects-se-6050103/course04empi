const math = require('mathjs');

const input = {
  '0': 0.06,
  '1': 0.25,
  '2': 0.32,
  '3': 0.28,
  '4': 0.05,
  '5': 0.04
};

const M_X = math.sum(Object.keys(input).map(n => {
    return Number(n) * input[n];
  })
);

console.log(`M_X: ${M_X}`);

const M_X2 = math.sum(Object.keys(input).map(n => {
    return Math.pow(Number(n), 2) * input[n];
  })
);

console.log(`M_X2: ${M_X2}`);

const D_X = M_X2 - (Math.pow(M_X, 2));

console.log(`D_X: ${D_X}`);

const o_X = Math.sqrt(D_X);

console.log(`o_X: ${o_X}`);
