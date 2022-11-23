import { describe, it, expect } from 'vitest'
import supertest from 'supertest';

const domain = 'https://tester-global-cliente-api.herokuapp.com'

describe('Integration tests for client(/client/{id}) api endpoint using get method', () => {
  it('should returns 200 when is called', async () => {
    const { status } = await supertest(domain).get('/')
    expect(status).toBe(200)
  })

  it('should returns an object with one client when is called', async () => {
    const id = 1;
    const { body } = await supertest(domain).get(`/cliente/${id}`)
    const keys = Object.keys(body)

    expect(keys).contains('id')
    expect(keys).contains('nome')
    expect(keys).contains('idade')
    expect(keys).contains('risco')

    expect(body.id).toBe(id)
  })

  it('should returns a string informing that has not encountered a client', async () => {
    const id = 0;
    const { text } = await supertest(domain).get(`/cliente/${id}`);
    
    expect(text).toBe('Cliente não encontrado');
  })
})