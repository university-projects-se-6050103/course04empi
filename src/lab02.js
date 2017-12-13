const math = require('mathjs');
const _ = require('lodash');

const input = [
  44, 42, 38, 29, 37, 32, 33, 41, 39, 40, 36, 32, 33, 38, 44, 43, 234
];

// Частка ознаки
input.forEach((item, index) => {
  console.log(
    `p${index} = ${(item / math.sum(input)).toFixed(3)}`
  );
});

// Показник мінливості
console.log(
  `S = ${
    math.pow(
      math.multiply(
        ...input.map((item) => item / math.sum(input))
      )
      , 1 / input.length)}`
);

// Коефіцієнт мінливості
console.log(
  `V = ${
    (    math.pow(
      math.multiply(
        ...input.map((item) => item / math.sum(input))
      )
      , 1 / input.length) * 100).toFixed(5)}%`
);

// Похибка виборчої частки
console.log(
  `S(p) = ${
  math.multiply(
    ...input.map((item) => item / math.sum(input))
  )
  /
  math.sum(...input)
    }`
);
