import request from 'superagent'
import Promise from 'bluebird'

const HOST = 'http://api.wide-eyes.it'

export const searchByImage = (at, data) => {
  return new Promise((resolve, reject) => {
    const error = _prevCheck(Array.apply(null, arguments))
    if (error) reject(error)

    request
      .post(`${HOST}/v4/SearchByImage`)
      .set(`Authorization`, `Bearer ${at}`)
      .send(data)
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
}


export const getCategoryData = async(at, weCategories) => {
  return new Promise((resolve, reject) => {
    request
      .post(`${HOST}/get_category_data`)
      .set(`Authorization`, `Bearer ${at}`)
      .send({weCategories: weCategories || false})
      .end((err, res) => {
        if (err || !(res.body instanceof Object)) {
          reject(_createError(err, res));
        } else {
          resolve(res.body.categories);
        }
      })
  });
}

export const showProducts = async(at, data) => {

  return new Promise((resolve, reject) => {
    const error = _prevCheck(Array.apply(null, arguments))
    if (error) reject(error)

    request
      .post(`${HOST}/show_products`)
      .set(`Authorization`, `Bearer ${at}`)
      .send(data)
      .end((err, res) => {
        if (err || !(res.body instanceof Object)) {
          reject(_createError(err, res));
        } else {
          resolve(res.body.products);
        }
      })
  });
}

export const searchById = async(at, data) => {

  return new Promise((resolve, reject) => {
    const error = _prevCheck(Array.apply(null, arguments))
    if (error) reject(error)

    request
      .post(`${HOST}/v4/SearchById`)
      .set(`Authorization`, `Bearer ${at}`)
      .send(data)
      .end((err, res) => {
        if (err || !(res.body instanceof Object)) {
          reject(_createError(err, res));
        } else {
          const _payload = res.body.results && res.body.results.length
            ? res.body.results[0].products
            : []

          resolve(_payload);
        }
      })
  });
}

const _prevCheck = (args) => {
  switch (args.length) {
    case 2:
      if (typeof args[0] !== 'string' || typeof args[1] !== 'object') {
        return new Error('Wrong argument type')
      }
      break;
    case 1:
      if (typeof args[0] !== 'string') {
        return new Error('Wrong argument type')
      }
      break;
    default:
      return new Error('Wrong argument count')
  }
}

const _createError = (err, res) => {
  let response;
  if (res) response = res.body || res.text
  return err ? err.message : `Wrong response body type. Expected an Object and got ${typeof response}.`
}
