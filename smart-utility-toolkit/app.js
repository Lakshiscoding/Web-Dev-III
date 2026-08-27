const isEven = require('./modules/isEven');
const logger = require('./modules/logger');

logger.log('Testing Custom Modules');

const numbers = [4, 7, 10, 15, 22];

for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];
  const result = isEven(num);
  logger.log(num + ' is even: ' + result);
}
