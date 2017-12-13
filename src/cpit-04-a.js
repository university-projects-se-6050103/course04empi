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

console.log(`${chance_non_defective_tv * 100} %`);
