var util = require('util'),
    path = require('path'),
    stream = require('stream'),
    esprima    = require('esprima'),
    escodegen  = require('escodegen'),
    convert    = require('convert-source-map'),
    fs = require('fs'),
    sm = require('source-map'),
    Consumer = sm.SourceMapConsumer,
    Generator = sm.SourceMapGenerator

function testif() {
  var src = fs.readFileSync('./bundle-x1.js', 'utf8')

  var ast = esprima.parse(src, {sourceType: 'module', loc: true, source: './bundle-x1.js'})
  ast.body[0].declarations[0].id.name = 'ccccc'

  var gen = escodegen.generate(ast, {
    sourceMap: true,
    sourceMapWithCode: true,
    sourceContent: src
  })

  var origMap = convert.fromSource(src).toObject()
  var origConsumer = new Consumer(origMap)

  var newConsumer = new Consumer(gen.map.toString())

  var newGenerator = new Generator()
  origConsumer.eachMapping(function(m, idx) {
    console.log(idx, m);
  });

  var mapComment = convert.fromObject(origMap).toComment()

  var code = gen.code + '\n' + mapComment

  fs.writeFileSync('./bundle-x2.js', code)
}

testif()
