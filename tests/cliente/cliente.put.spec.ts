import { describe, it, expect } from 'vitest'
import supertest from 'supertest';

const domain = 'https://tester-global-cliente-api.herokuapp.com'

describe('Integration tests for cliente api endpoint using put method', () => {
  it('should returns status 400 when is called with an empty body', async () => {
    const { status } = await supertest(domain).put('/cliente').send({})
    expect(status).toBe(400)
  })

  it('should returns status 404 when is called without id', async () => {
    const { status } = await supertest(domain).put('/cliente').send({
      nome: 'Leonardo Bazan',
      idade: 21,
      risco: 1
    })
    expect(status).toBe(404)
  })

  it('should returns an error object when is called with an empty body', async () => {
    const { body } = await supertest(domain).put('/cliente').send({})
    const errorProps = Object.keys(body)

    expect(errorProps).contains('timestamp')
    expect(errorProps).contains('status')
    expect(errorProps).contains('error')
    expect(errorProps).contains('message')
    expect(errorProps).contains('path')
  })

  it('should returns status 201 when is called with a correct body', async () => {
    const client = {
      id: 9999,
      nome: 'Leonardo Bazan',
      idade: 21,
      risco: 1
    }

    await supertest(domain).post('/cliente').send(client)
    const { status } = await supertest(domain).put('/cliente/').send({...client, nome: 'Leo Bazan'})

    expect(status).toBe(200)
  })

  it('should returns an object with clients containing the client sended when is called with a correct body', async () => {
    const client = {
      id: 999,
      nome: 'Leonardo Bazan',
      idade: 21,
      risco: 1
    }

    await supertest(domain).post('/cliente').send(client)
    const { body } = await supertest(domain).put('/cliente').send({...client, nome: 'Leo Bazan'})

    const insertedClient = body[client.id]
    expect(insertedClient).toEqual({...client, nome: 'Leo Bazan'})
  })
})