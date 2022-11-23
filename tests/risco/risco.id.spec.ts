import { describe, it, expect } from 'vitest'
import supertest from 'supertest';

const domain = 'https://tester-global-cliente-api.herokuapp.com'

describe('Integration tests for risco(/risco/{id}) api endpoint using get method', () => {
  it('should returns 401 when is called', async () => {
    const { status } = await supertest(domain).get('/risco/1')
    expect(status).toBe(401)
  })

  it('should returns an error object when is called', async () => {
    const { body } = await supertest(domain).put('/cliente')
    const errorProps = Object.keys(body)

    expect(errorProps).contains('timestamp')
    expect(errorProps).contains('status')
    expect(errorProps).contains('error')
    expect(errorProps).contains('message')
    expect(errorProps).contains('path')
  })
})