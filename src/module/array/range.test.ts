import { range } from './range'

/**
 * @test {range}
 */
describe('test range', () => {
  it('range 1-3 is [1,2,3]', () =>
    expect(range(1, 4)).toIncludeAllMembers([1, 2, 3]))
})
