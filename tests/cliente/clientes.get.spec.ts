import { describe, it, expect } from 'vitest'
import supertest from 'supertest';

const domain = 'https://tester-global-cliente-api.herokuapp.com'

describe('Integration tests for clientes(/clientes) api endpoint using get method', () => {
  it('should returns 200 when is called', async () => {
    const { status } = await supertest(domain).get('/')
    expect(status).toBe(200)
  })

  it('should returns an object with clients when is called', async () => {
    const { body } = await supertest(domain).get('/')
    const keys = Object.keys(body)

    let client = {}
    if(keys.length > 0) client = body[keys[0]]
    
    if(keys.length > 0){
      const clientProps = Object.keys(client)
      expect(clientProps).contains('id')
      expect(clientProps).contains('nome')
      expect(clientProps).contains('idade')
      expect(clientProps).contains('risco')
    } else {
      expect(client).toEqual({})
    }
  })
})