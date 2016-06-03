import _ from 'lodash'
import request from 'superagent'
import Promise from 'bluebird'

const HOST = 'http://api.wide-eyes.it'

const searchByImage = (data, headers) =>
  new Promise((resolve, reject) => {
    let req = request.post(`${HOST}/v4/SearchByImage`)
    req = setHeaders(req, headers)

    return req.send(data)
      .end((err, res) => {
        if (err || !(res.body instanceof Object)) {
          return reject(_createError(err));
        }

        const attributes = res.body.attributes
        const categories = [];
        let products = [];

        res.body.results.map(c => {
          categories.push({ name: c.category })
          products = products.concat(c.products)
        });

        return resolve({
          categories,
          products,
          attributes
        });
      })
  })

const getCategoryData = async(data, headers) =>
  new Promise((resolve, reject) => {
    let req = request.post(`${HOST}/get_category_data`)
    req = setHeaders(req, headers)

    return req.send({weCategories: data.weCategories || false})
      .end((err, res) => {
        if (err || !(res.body instanceof Object)) {
          reject(_createError(err, res));
        } else {
          const genders = []
          const categories = []
          const subcategories = []

          for (const gender in res.body.categories) {
            if (res.body.categories.hasOwnProperty(gender)) {
              genders.push({key: gender, name: gender})
              genders.map(c => {
                categories.push({
                  key: c.key,
                  name: c.name
                })
              })
            }
          }
          res.body.
          resolve(res.body.categories);
        }
      })
  });

const showProducts = async(data, headers) =>
  new Promise((resolve, reject) => {
    let req = request.post(`${HOST}/show_products`)
    req = setHeaders(req, headers)

    return req.send(data)
      .end((err, res) => {
        if (err || !(res.body instanceof Object)) {
          reject(_createError(err, res));
        } else {
          resolve(res.body.products);
        }
      })
  });

const searchById = async(data, headers) =>
  new Promise((resolve, reject) => {
    let req = request.post(`${HOST}/v4/SearchById`)
    req = setHeaders(req, headers)

    return req.send(data)
      .end((err, res) => {
        if (err || !(res.body instanceof Object)) {
          reject(_createError(err, res));
        } else {
          const payload = res.body.results && res.body.results.length
            ? res.body.results[0].products
            : []

          resolve(payload);
        }
      })
  });

const setHeaders = (req, headers) => {
  if (headers && typeof headers === 'object') {
    for (const key in headers) {
      req = req.set(key, headers[key])
    }
  }

  return req;
}

const _createError = (err, res) => {
  return err ? err : new Error(`Wrong response body type. Expected an Object and got ${typeof res.body}.`)
}

export default {
  getCategoryData,
  searchByImage,
  showProducts,
  searchById,
}
