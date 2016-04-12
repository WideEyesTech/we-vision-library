require('babel-polyfill')

var tapSpec = require('tap-spec')
var test = require('tape')

var WeVision = require('./index.js')

test.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout);

const BEARER = '218fd921631fb77f748842a6615ae9509bad1110'

test('getCategoryData', function(t) {
  t.plan(1)
  t.timeoutAfter(10000)

  WeVision.getCategoryData(BEARER, {})
    .then(function(res) {
      t.equal(typeof res, 'object')
    }, function(err) {
      console.log(err)
    })
})

// test('searchById', function(t) {
//   t.plan(1)
//   t.timeoutAfter(10000)
//   searchById(BEARER, {}).then(function(res) {
//     t.equal(typeof res, 'object')
//   }, function(err) {
//     console.log(err)
//   })
// })
//
// test('searchByImage', function(t) {
//   t.plan(1)
//   t.timeoutAfter(10000)
//   searchByImage(BEARER, {}).then(function(res) {
//     t.equal(typeof res, 'object')
//   }, function(err) {
//     console.log(err)
//   })
// })
//
// test('showProducts', function(t) {
//   t.plan(1)
//   t.timeoutAfter(10000)
//   showProducts(BEARER, {}).then(function(res) {
//     t.equal(typeof res, 'object')
//   }, function(err) {
//     console.log(err)
//   })
// })
