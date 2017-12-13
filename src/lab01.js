const math = require('mathjs');

// Завдання 1
console.log(
  math.factorial(5) +
  math.factorial(6)
);

// Завдання 2
console.log(
  math.factorial(5) /
  math.factorial(5 - 3)
);

// Завдання 3
console.log(
  math.factorial(4) /
  (math.factorial(4 - 3) * math.factorial(3))
);

// Завдання 4
console.log(
  math.factorial(8)
);
