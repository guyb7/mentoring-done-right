const errors = {
  'something-went-wrong': 'Aww, something went wrong!',
  'invalid-credentials': 'Wrong username or password',
  'session-expired': 'Your session has expired',
  'unauthorized': 'You are not authorized to make this request'
}

export default {
  handleError: (req, res, err = new Error(), defaultMessage = 'something-went-wrong') => {
    if (process.env.ENV === 'development') {
      console.log('[ERR]', req.method, req.originalUrl)
      console.log(req.body, req.user)
      console.log(defaultMessage, err)
    }
    res.status(401).json({
      success: false,
      error: {
        id: err.message || defaultMessage,
        text: errors[err.message] || err.message || errors[defaultMessage] || defaultMessage
      }
    })
  }
}
