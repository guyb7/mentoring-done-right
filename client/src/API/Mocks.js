import Promise from 'bluebird'
import _ from 'lodash'

const DELAY = 400


function APIError(data) {
  this.name = "APIError";
  this.message = (data.error.text || 'Something went wrong!')
  this.data = data
}
APIError.prototype = Error.prototype

const mocks = {
  '/status': {
    get: {
      success: true
    }
  }
}

export default (method, route, params) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let response
      try {
        response = mocks[route][method]
      } catch (e) {
        console.log('mock-not-found', route, params)
        return reject(new APIError({ success: false, error: { text: 'Mock not found'}}))
      }
      if (_.isFunction(response)) {
        const res = response(params)
        console.log('MOCK API RESPONSE', method, route, res)
        if (res.success) {
          resolve({
            status: res.success? 200 : 401,
            data: res
          })
        } else {
          reject(new APIError(res))
        }
      } else if (response.success === true) {
        console.log('MOCK API RESPONSE', method, route, response)
        resolve({
          status: 200,
          data: response
        })
      } else {
        console.log('MOCK API RESPONSE', method, route, response)
        reject(new APIError(response))
      }
    }, DELAY)
  })
}
