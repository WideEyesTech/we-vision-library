var foo = require('./index.js')

console.log(foo)

foo.searchByImage().then(function(res) {
  console.log(res)
}, function(err) {
  console.log(err)
})
