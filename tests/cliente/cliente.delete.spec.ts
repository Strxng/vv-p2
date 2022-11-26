import { describe, it, expect } from 'vitest'
import supertest from 'supertest';

const domain = 'https://tester-global-cliente-api.herokuapp.com'

describe('Integration tests for client api endpoint using delete method', () => {
  it('should returns 200 when is called with success', async () => {
    const id = 123456

    await supertest(domain).post('/cliente').send({
      id,
      idade: 21,
      nome: "Leonardo Bazan",
      risco: 1
    })

    const { status } = await supertest(domain).delete(`/cliente/${id}`)
    expect(status).toBe(200)
  })

  it('should returns 404 when is called and dont find the client', async () => {
    const id = 999999
    const { status } = await supertest(domain).delete(`/cliente/${id}`)
    expect(status).toBe(404)
  })
})