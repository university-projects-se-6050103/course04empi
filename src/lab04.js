const math = require('mathjs');
const _ = require('lodash');

const elements = [
  88, 106, 81, 93, 74, 85, 75, 89, 98, 101, 77, 99, 78, 77, 104,
  108, 84, 86, 89, 91, 95, 98, 83, 99, 83, 84, 71, 72, 76,
  98, 92, 91, 100, 104
];

console.log(
  `Об'єм вибірки: ${elements.length}\n`,
  `Число груп: ${math.sqrt(elements.length)}\n`,
  `Розмiр варiювання: ${Math.max(...elements) - Math.min(...elements)}\n`,
  `Розмiр iнтервалу групування: ${
  Math.max(...elements) - Math.min(...elements)
  / math.sqrt(elements.length)
    }`
);

console.log(`Згрупований iнтервал частот:`);

const evenGroups = _.groupBy(elements, (element) => {
  return Math.round((element - Math.min(...elements)) / Math.sqrt(elements.length));
});

_.mapValues(evenGroups, (group, index) => {
  console.log(
    `Група ${Math.min(...elements) + (Math.round(math.sqrt(elements.length)) * (index - 1))}-${Math.min(...elements) + (Math.round(math.sqrt(elements.length)) * index)}: ${group.length} елементів`
  );
});
