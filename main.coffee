console.log 1; console.log 2; debug = require 'debug';
m1 = require './m1'
d = debug 'a'; d 3
console.log 4; d 5; console.log 6; m1()
