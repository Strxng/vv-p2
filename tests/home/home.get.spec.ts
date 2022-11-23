import { describe, it, expect } from 'vitest'
import supertest from 'supertest';

const domain = 'https://tester-global-cliente-api.herokuapp.com'

describe('Integration tests for home(/) api endpoint using get method', () => {
  it('should returns 200 when is called', async () => {
    const { status } = await supertest(domain).get('/')
    expect(status).toBe(200)
  })

  it('should returns an object with clients when is called', async () => {
    const { body } = await supertest(domain).get('/')
    
    const keys = Object.keys(body)
    // keys.forEach((key) => {
    //   const client = body[key]

    //   expect(client).toBe(1)
    // })

    const client = body[keys[0]]

    expect(client).toBe(1)
  })
})