console.log(1); console.log(2); var debug = require('debug')
var m1 = require('./m1')
var d = debug('a'); d(3)
console.log(4); d(5); console.log(6); m1()
