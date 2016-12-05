/* global test */

const api = require('../src')
const headers = {'apikey': '633cc63f5f50c78119a2cfefabafe11deb9285ec'}

test('login', () =>
  api.login({email: 'gerard@wide-eyes.it', password: '10018906'})
    .then(() => {})
)

test('getCategoryData', () =>
  api.getCategoryData({}, headers)
    .then((res) => {})
)

test('SearchById', () =>
  api.searchById({
    uid: '1234',
    gender: 'female'
  }, headers)
    .then(res => {})
)

test('SearchByImage', () =>
  api.searchByImage({
    image: 'http://www.dressedupgirl.com/wp-content/uploads/2014/12/Beach-Formal-Dresses.jpg',
    gender: 'female'
  }, headers)
    .then(res => {})
)
