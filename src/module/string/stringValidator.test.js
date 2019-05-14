import { stringValidator } from './stringValidator'

/**
 * @test {stringValidator}
 */
describe('test stringValidator', () => {
  const {
    isBlank,
    isEmpty,
    isFloat,
    isInteger,
    isEmail,
    isIpv4,
  } = stringValidator
  it('test isBlank', () => {
    expect(isBlank(null)).toBeTrue()
    expect(isBlank(undefined)).toBeTrue()
    expect(isBlank('')).toBeTrue()
    expect(isBlank(' ')).toBeTrue()
    expect(isBlank('a')).toBeFalse()
  })
  it('test isEmpty', () => {
    expect(isEmpty(null)).toBeTrue()
    expect(isEmpty(undefined)).toBeTrue()
    expect(isEmpty('')).toBeTrue()
    expect(isEmpty(' ')).toBeFalse()
    expect(isEmpty('a')).toBeFalse()
  })
  it('test isFloat', () => {
    expect(isFloat('5')).toBeTrue()
    expect(isFloat('5.6')).toBeTrue()
    expect(isFloat('5.a')).toBeFalse()
  })
  it('test isInteger', () => {
    expect(isInteger('7')).toBeTrue()
    expect(isInteger('7.5')).toBeFalse()
    expect(isInteger('7.a')).toBeFalse()
  })
  it('test isEmail', () => {
    expect(isEmail('rx@liuli.com')).toBeTrue()
    expect(isEmail('@liuli.com')).toBeFalse()
    expect(isEmail(null)).toBeFalse()
  })
  it('test isIpv4', () => {
    expect(isIpv4('127.0.0.1')).toBeTrue()
    expect(isIpv4('127.0.0.266')).toBeFalse()
    expect(isIpv4('127.0.0')).toBeFalse()
    expect(isIpv4('')).toBeFalse()
    expect(isIpv4(null)).toBeFalse()
  })
})
