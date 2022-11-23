import { describe, it, expect } from 'vitest'
import supertest from 'supertest';

const domain = 'https://tester-global-cliente-api.herokuapp.com'

describe('Integration tests for home(/) api endpoint using get method', () => {
  it('should returns 200 when is called', async () => {
    const { status } = await supertest(domain).get('/')
    expect(status).toBe(200)
  })
})