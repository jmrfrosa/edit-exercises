import { describe, it, expect, beforeEach } from '@jest/globals'
import { fetchData } from '../app'

describe('fetchData', () => {
  describe('fetch is a success', () => {
    const expectedResponse = { mockKey: 'mockValue' }

    beforeEach(() => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve(expectedResponse),
        })
      )
    })

    it('returns expected result', () => {
      const result = fetchData()

      expect(result).resolves.toBe(expectedResponse)
    })
  })

  describe('fetch is a failure', () => {
    beforeEach(() => {
      global.fetch = jest.fn(() => Promise.reject(new Error('Failed to fetch')))
    })

    it('throws error', async () => {
      await expect(async () => await fetchData()).rejects.toThrow()
    })
  })
})
