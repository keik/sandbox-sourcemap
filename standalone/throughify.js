var util = require('util'),
    path = require('path'),
    stream = require('stream'),
    esprima    = require('esprima'),
    escodegen  = require('escodegen'),
    convert    = require('convert-source-map'),
    sourceMap = require('source-map')

module.exports = Testify
util.inherits(Testify, stream.Transform)

function Testify(filename, opts) {
  console.log(filename);
  if (!(this instanceof Testify))
    return new Testify(filename, opts)

  stream.Transform.call(this)
  this._data = ''
  this._filename = filename

  return this
}

Testify.prototype._transform = function(buf, enc, callback) {
  this._data += buf
  callback()
}

Testify.prototype._flush = function(callback) {
  var ast = esprima.parse(this._data, {sourceType: 'module', loc: true, source: this._filename}),
      gen =  escodegen.generate(ast, {
        sourceMap: true,
        sourceMapWithCode: true,
        sourceContent: this._data
      })

  var code = this._data
  this.push(code)

  callback()
}
