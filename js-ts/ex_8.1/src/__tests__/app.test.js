import { test, expect } from '@jest/globals'
import { sum } from '../app'

test('adding 1 + 2 should be 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('adding non-numbers should throw', () => {
  expect(() => sum('a', 'b')).toThrow()
})
