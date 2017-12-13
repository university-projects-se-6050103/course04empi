const factory_1_part = 0.3;
const factory_2_part = 0.2;
const factory_3_part = 0.5;

const factory_1_defect = 0.05;
const factory_2_defect = 0.1;
const factory_3_defect = 0.2;

const chance_non_defective_tv =
  (factory_1_part * (1 - factory_1_defect))
  + (factory_2_part * (1 - factory_2_defect))
  + (factory_3_part * (1 - factory_3_defect));

const chance_from_factory_1 =
  ((factory_1_part * (1 - factory_1_defect)))
  / chance_non_defective_tv;
const chance_from_factory_2 =
  ((factory_2_part * (1 - factory_2_defect)))
  / chance_non_defective_tv;
const chance_from_factory_3 =
  ((factory_3_part * (1 - factory_3_defect)))
  / chance_non_defective_tv;

console.log('Шанс з фабрики 1:', chance_from_factory_1);
console.log('Шанс з фабрики 2:', chance_from_factory_2);
console.log('Шанс з фабрики 3:', chance_from_factory_3);

console.log(`Скоріше всього бездефектий телевізо з фабрики номер: 3.`);
