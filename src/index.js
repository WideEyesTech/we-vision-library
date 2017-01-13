// START: this comment should be deleted

require('es6-promise')

const request = require('superagent')
const HOST = 'http://api.wide-eyes.it'

exports.searchByImage = (data, headers) =>
  new Promise((resolve, reject) => {
    let req = request.post(`${HOST}/v4/SearchByImage`)
    req = setHeaders(req, headers)

    return req.send(data)
      .end((err, res) => {
        if (err) {
          return reject(createError(err, res))
        }

        return resolve(res.body)
      })
  })

exports.login = (data, headers) =>
  new Promise((resolve, reject) => {
    let req = request.post(`${HOST}/login`)
    req = setHeaders(req, headers)
    req
      .send(data)
      .end((err, res) => {
        if (err) {
          reject(createError(err, res))
        } else {
          resolve(res.body)
        }
      })
  })

exports.getUser = (data, headers) =>
  new Promise((resolve, reject) => {
    let req
    if (data && data.id) {
      req = request.get(`${HOST}/users/show/${data.id}`)
    } else {
      req = request.get(`${HOST}/users/show`)
    }

    req = setHeaders(req, headers)
    req
      .send(data)
      .end((err, res) => {
        if (err) {
          reject(createError(err, res))
        } else {
          resolve(res.body)
        }
      })
  })

exports.getCategoryData = (data, headers) =>
  new Promise((resolve, reject) => {
    const req = setHeaders(request.post(`${HOST}/get_category_data`), headers)
    return req.send({weCategories: data.weCategories || false})
      .end((err, res) => {
        if (err) {
          reject(createError(err, res))
        } else {
          resolve(res.body)
        }
      })
  })

exports.showProducts = (data, headers) =>
  new Promise((resolve, reject) => {
    let req = request.post(`${HOST}/show_products`)
    req = setHeaders(req, headers)

    return req.send(data)
      .end((err, res) => {
        if (err) {
          reject(createError(err, res))
        } else {
          resolve(res.body)
        }
      })
  })

exports.searchById = (data, headers) =>
  new Promise((resolve, reject) => {
    let req = request.post(`${HOST}/v4/SearchById`)
    req = setHeaders(req, headers)

    return req.send(data)
      .end((err, res) => {
        if (err) {
          reject(createError(err, res))
        } else {
          resolve(res.body)
        }
      })
  })

const setHeaders = (req, headers) => {
  if (headers && typeof headers === 'object') {
    for (const key in headers) {
      req = req.set(key, headers[key])
    }
  }

  return req
}

const createError = (err, res) => {
  return err && err.message
    ? err.message
    : new Error(`Wrong response body type. Expected an Object and got ${typeof res.body}.`)
}
