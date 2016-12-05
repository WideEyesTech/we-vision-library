const api = require('../src')
const test = require('ava')

const headers = {'apikey': '633cc63f5f50c78119a2cfefabafe11deb9285ec'}

test('login', t =>
  api.login({email: 'gerard@wide-eyes.it', password: '10018906'})
)

test('getCategoryData', t => api.getCategoryData({}, headers))

test('SearchById', t =>
  api.searchById({
    uid: '1234',
    gender: 'female'
  }, headers)
)

test('SearchByImage', t =>
  api.searchByImage({
    image: 'http://www.dressedupgirl.com/wp-content/uploads/2014/12/Beach-Formal-Dresses.jpg',
    gender: 'female'
  }, headers)
)
