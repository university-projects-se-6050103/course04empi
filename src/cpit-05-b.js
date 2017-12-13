const math = require('mathjs');

console.log(
  `
    ${((
    (Math.pow(2, 0)
      / math.factorial(0)) * Math.pow(Math.E, -2)
    + (Math.pow(2, 1)
      / math.factorial(1)) * Math.pow(Math.E, -2)
    + (Math.pow(2, 2)
      / math.factorial(2)) * Math.pow(Math.E, -2)

  ) * 100).toFixed(2)} %
  `
);
