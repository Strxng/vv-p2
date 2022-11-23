import { describe, it, expect } from 'vitest'
import supertest from 'supertest';

const domain = 'https://tester-global-cliente-api.herokuapp.com'

describe('Default integration tests', () => {
  it('should returns 404 if an inexistent endpoint is called', async () => {
    const { status } = await supertest(domain).get('/inexistent_endpoint')
    expect(status).toBe(404)
  })
})