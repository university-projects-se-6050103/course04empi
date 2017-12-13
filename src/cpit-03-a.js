const flights = 3;
const chance_delay_1 = 0.05;
const chance_delay_2 = 0.1;
const chance_delay_3 = 0.15;

const chance_two_delayed = (chance_delay_1 * chance_delay_2 * (1 - chance_delay_3))
  + (chance_delay_1 * (1 - chance_delay_2) * chance_delay_3)
  + ((1 - chance_delay_1) * chance_delay_2 * chance_delay_3);


console.log(`${(chance_two_delayed * 100).toFixed(2)} %`);
