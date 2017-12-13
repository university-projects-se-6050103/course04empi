const myX1  = 42.7;
const myX2 = 82.9;

const myS_X1 = 1.97;
const myS_X2 = 3.5;

const perer = 3;
const higherNorm = 2.45;
const lowerNorm = 3.71;

const HIP5 = higherNorm * getSD(myS_X1, myS_X2);
const HIP1 = lowerNorm * getSD(myS_X1, myS_X2);

console.log(HIP5);
console.log(HIP1);

const t = getNormSignificantDiff(myX1, myX2, myS_X1, myS_X2);
const v = getFreedomDegrees(perer, perer);

console.log('Критерій істотної різниці: ' + t);
console.log('Число ступенів свободи' + v);

console.log('За Стьюдентом');
console.log(`Для 5%: ${t > higherNorm} \n Для 1%: ${t > lowerNorm}`);

console.log('Фактична:');
console.log(`Для 5%: ${getD(myX1, myX2) > HIP5} \n Для 1%: ${getD(myX1, myX2) > HIP1}`);

function getFreedomDegrees(n1, n2) {
  return n1 + n2 - 2;
}

function getNormSignificantDiff(x1, x2, sx1, sx2) {
  return getD(x1, x2) / getSD(sx1, sx2);
}

function getD(x1, x2) {
  return x2 - x1;
}

function getSD(sx1, sx2) {
  return Math.sqrt(Math.pow(sx1, 2) + Math.pow(sx2, 2));
}
