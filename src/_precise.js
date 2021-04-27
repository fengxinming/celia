import isNumber from '@ali/iot-cloud-loose-is/es/isNumber';
import isInteger from '@ali/iot-cloud-loose-is/es/isInteger';

const { abs, pow } = Math;

/**
 * 精确到小数点几位
 *
 * 参考 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/round
 *
 * @param {string} method
 * @param {number} number
 * @param {number} decimals
 * @returns {number}
 */
export default function _precise(method, number, decimals) {
  if (!isNumber(number)) {
    return 0;
  }

  if (!decimals) {
    return Math[method](number);
  }
  else if (!isInteger(decimals)) {
    return number;
  }

  // 负数四舍五入
  const isMinusRounding = method === 'round' && number < 0;
  if (isMinusRounding) {
    number = abs(number);
  }

  const power = pow(10, decimals);
  // 小数点后最多能正常显示15位
  let ret = Math[method]((number * power).toPrecision(15)) / power;

  if (isMinusRounding) {
    ret = -ret;
  }

  return ret;
}
