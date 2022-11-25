import { describe, it, expect } from 'vitest'
import supertest from 'supertest';

const domain = 'https://tester-global-cliente-api.herokuapp.com'

describe('Integration tests for client(/cliente/apagaTodos) api endpoint using delete method', () => {
  it('should returns 200 when is called with success', async () => {
    const { status } = await supertest(domain).delete(`/cliente/apagaTodos`)
    expect(status).toBe(200)
  })

  it('should returns an empty object when is called with success', async () => {
    const { body } = await supertest(domain).delete(`/cliente/apagaTodos`)
    expect(body).toEqual({})
  })
})