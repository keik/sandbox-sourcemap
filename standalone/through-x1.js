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
  var src = fs.readFileSync('./main.js', 'utf8')

  var ast = esprima.parse(src, {sourceType: 'module', loc: true, source: './main.js'})
  ast.body[0].declarations[0].id.name = 'bbb'

  var gen = escodegen.generate(ast, {
        sourceMap: true,
        sourceMapWithCode: true,
        sourceContent: src
      })

  var cns = new Consumer(gen.map.toString())

  cns.eachMapping(function(c, idx) {
    console.log(idx, c);
  });

  console.log(cns.originalPositionFor({line:1, column: 4}));

  var mapComment = convert.fromJSON(gen.map.toString()).toComment()

  var code = gen.code + '\n' + mapComment

  fs.writeFileSync('./bundle-x1.js', code)
}

testif()
