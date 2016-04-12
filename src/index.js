import promise from 'es6-promise'
import request from 'superagent'

promise.polyfill()

const HOST = 'http://api.wide-eyes.it'

export const searchByImage = (accessToken, data) => {
  return new Promise((resolve, reject) => {
    request
    .post(`${HOST}/v4/SearchByImage`)
    .set(`Content-Type`, `application/json`)
    .set(`Authorization`, `Bearer ${accessToken}`)
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


export const getCategoryData = async(at, withCategories) => {
  return new Promise((resolve, reject) => {
    request
    .post(`${HOST}/get_category_data`)
    .set(`Authorization`, `Bearer ${at}`)
    .set(`Content-Type`, `application/json`)
    .send(withCategories ? {
      weCategories: true
    } : {})
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
    request
    .post(`${HOST}/show_products`)
    .set(`Authorization`, `Bearer ${at}`)
    .set(`Content-Type`, `application/json`)
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
    request
    .post(`${HOST}/v4/SearchById`)
    .set(`Authorization`, `Bearer ${at}`)
    .set(`Content-Type`, `application/json`)
    .send(data)
    .end((err, res) => {
      if (err || !(res.body instanceof Object)) {
        reject(_createError(err, res));
      } else {
        resolve(res.body.results[0].products);
      }
    })
  });
}
