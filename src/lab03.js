const math = require('mathjs');

const elements = [
  44, 42, 38, 29, 37, 32, 33, 41, 39, 40, 36, 32, 33, 38, 34
];

console.log(
  `Елементи: ${elements.join(', ')}`
);

console.log(
  `К-ть елементів: ${elements.length}`
);

console.log(
  `Середнє арифметичне: ${math.mean(elements)}`
);

console.log(
  `Дисперсія: ${math.var(elements)}`
);

console.log(
  `Середнє відхилення: ${Math.sqrt(math.var(elements), 2)}`
);

console.log(
  `Коефіцієнт варiацiї: ${((math.var(elements) * 100) / math.mean(elements)).toFixed(2)}%`
);

console.log(
  `Коефіцієнт вирiвнюваностi: ${(100 - (math.var(elements) * 100) / math.mean(elements)).toFixed(2)}%`
);

console.log(
  `Похибка вибірки: ${Math.sqrt(math.var(elements), 2) / Math.sqrt(elements.length)}`
);

console.log(
  `Вiдносна похибка вибiрки: ${((Math.sqrt(math.var(elements), 2) / Math.sqrt(elements.length)) / (math.mean(elements) * 100)).toFixed(6)}%`
);
