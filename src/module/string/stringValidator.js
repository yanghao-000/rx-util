import { isNullOrUndefined } from '../obj/isNullOrUndefined'
/**
 * 判断是否为小数的正则表达式
 */
const FloatRule = new RegExp('^(-?\\d+)(.\\d+)?$')
/**
 * 判断是否为整数的正则表达式
 */
const IntegerRule = new RegExp('^-?\\d+$')
/**
 * 判断是否为邮箱的正则表达式
 */
const EmailRule = new RegExp(
  '^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z]+$'
)
/**
 * 判断是否为 ipv4 地址的正则表达式
 */
const Ipv4Rule = /^((25[0-5]|2[0-4]\d|1?\d?\d)\.){3}(25[0-5]|2[0-4]\d|1?\d?\d)$/
/**
 * 字符串校验
 */
export class StringValidator {
  /**
   * 判断一个字符串是否为空字符串
   * @param {String} str 字符串
   * @returns {Boolean} 是否为空字符串
   */
  isEmpty (str) {
    return isNullOrUndefined(str) || str === ''
  }
  /**
   * 判断一个字符串是否为空白的字符串
   * @param {String} str 字符串
   * @returns {Boolean} 是否为空字符串
   */
  isBlank (str) {
    return stringValidator.isEmpty(str) || str.trim() === ''
  }

  /**
   * 判断字符串是否位小数
   * @param {String} str 需要进行判断的字符串
   * @returns {Boolean} 是否为小数
   */
  isFloat (str) {
    return FloatRule.test(str)
  }

  /**
   * 判断字符串是否位整数
   * @param {String} str 需要进行判断的字符串
   * @returns {Boolean} 是否为小数
   */
  isInteger (str) {
    return IntegerRule.test(str)
  }
  /**
   * 判断邮箱的格式是否正确
   * @param {String} str 邮箱字符串
   * @returns {Boolean} 是否是邮箱
   */
  isEmail (str) {
    return !stringValidator.isBlank(str) && EmailRule.test(str)
  }
  /**
   * 判断 ipv4 地址的格式是否正确
   * @param {String} str ipv4 字符串
   * @returns {Boolean} 是否是 ipv4 地址
   */
  isIpv4 (str) {
    return !stringValidator.isBlank(str) && Ipv4Rule.test(str)
  }
}

/**
 * 导出一个字符串校验的对象
 */
export const stringValidator = new StringValidator()
