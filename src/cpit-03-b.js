const chance_delay_1 = 0.05;
const chance_delay_2 = 0.1;
const chance_delay_3 = 0.15;

const chance_none_delayed =
  ((1 - chance_delay_1)
    * (1 - chance_delay_2)
    * (1 - chance_delay_3));

console.log(`${(chance_none_delayed * 100).toFixed(2)} %`);
