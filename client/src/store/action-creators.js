import API from '../API/API'
import Promise from 'bluebird'

export function setTitle(value) {
  return {
    type: 'SET_TITLE',
    title: value
  }
}

export function setUserType(value) {
  return {
    type: 'SET_USER_TYPE',
    value
  }
}

const delayCallback = (cb) => {
  setTimeout(() => {
    cb()
  }, 20)
}

export function requestLogin({ username, password, onSuccess, onFail }) {
  return {
    types: ['LOGIN_REQUEST', 'LOGIN_SUCCESS', 'LOGIN_FAILURE'],
    promise: () => {
      return new Promise((resolve, reject) => {
        API.post('/login', { username, password })
        .then(res => {
          if (onSuccess) {
            delayCallback(() => onSuccess(res))
          }
          resolve(res)
        })
        .catch(e => {
          if (onFail) {
            delayCallback(() => onFail(e))
          }
          reject(e)
        })
      })
    }
  }
}
