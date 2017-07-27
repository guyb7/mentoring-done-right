import '../env'
// process.env.PORT is 3013 - if changed, also modify testURL in package.json

import Promise from 'bluebird'
global.Promise = Promise
import axios from 'axios'
import axiosCookieJarSupport from '@3846masa/axios-cookiejar-support'
import tough from 'tough-cookie'
import fs from 'fs'
import Db from './Database'
import Server from './Server'

const BASE_URL = 'http://127.0.0.1:3013/api'
axiosCookieJarSupport(axios)

beforeAll(() => {
  const buildScriptSql = fs.readFileSync(__dirname + '/../db_migrations/latest.sql', 'utf8')
  return Db.query(buildScriptSql)
  .then(Db.query('SET search_path = mentoring'))
  .then(Server.start)
  .catch(e => {
    if (e.message === 'schema "mentoring" already exists') {
      console.log(`Make sure that the test DB is empty.\nMaybe the last run is not over or exited without cleaning?\nRun \`DROP SCHEMA mentoring_test_db.mentoring CASCADE;\` to drop the schema.`)
    }
  })
})

afterAll(() => {
  return Server.shutDown()
  .then(Db.query('DROP SCHEMA mentoring CASCADE;'))
  .then(Db.disconnect)
})

describe('E2E Tests', () => {
  describe('API Sanity Tests', () => {
    test('Server is running', () => {
      expect.assertions(1)
      return axios.get(BASE_URL + '/status')
      .then(response => {
        expect(response.data.success).toBe(true)
      })
    })
  })
})
