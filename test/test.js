var test             = require('tape'),
    fs               = require('fs'),
    sourceMap        = require('source-map'),
    sourceMapResolve = require('source-map-resolve'),
    convert          = require('convert-source-map')

var t_dupe         = require('../transform-dupe.js'),
    t_doubleId     = require('../transform-double-id.js')

var filepath = __dirname + '/fixtures/1.js',
    code,
    transformed,
    map,
    con,
    gen,
    origPos,
    content

test('a', function(t) {
  code = fs.readFileSync(filepath, 'utf8')
  transformed = t_dupe(code, filepath)
  map = convert.fromSource(transformed).toJSON()
  con = new sourceMap.SourceMapConsumer(map)
  origPos = con.originalPositionFor({line: 1, column: 0})
  t.equal(1, origPos.line)
  t.equal(0, origPos.column)
  origPos = con.originalPositionFor({line: 1, column: 4})
  t.equal(1, origPos.line)
  t.equal(4, origPos.column)
  origPos = con.originalPositionFor({line: 2, column: 0})
  t.equal(1, origPos.line)
  t.equal(0, origPos.column)
  origPos = con.originalPositionFor({line: 2, column: 4})
  t.equal(1, origPos.line)
  t.equal(4, origPos.column)
  content = con.sourceContentFor(filepath)
  t.equal(content, fs.readFileSync(filepath, 'utf8'))

  console.log(transformed);

  transformed = t_doubleId(transformed, filepath)
  map = convert.fromSource(transformed).toJSON(),
  con = new sourceMap.SourceMapConsumer(map),
  con.eachMapping(function(m) {console.log(m)})
  origPos = con.originalPositionFor({line: 1, column: 0})
  t.equal(1, origPos.line)
  t.equal(0, origPos.column)
  origPos = con.originalPositionFor({line: 1, column: 5})
  t.equal(1, origPos.line)
  t.equal(4, origPos.column)
  origPos = con.originalPositionFor({line: 2, column: 0})
  t.equal(1, origPos.line)
  t.equal(0, origPos.column)
  origPos = con.originalPositionFor({line: 2, column: 5})
  t.equal(1, origPos.line)
  t.equal(4, origPos.column)

  content = con.sourceContentFor(filepath)
  t.equal(content, fs.readFileSync(filepath, 'utf8'))

  console.log(transformed);
  //
  // transformed = t_doubleId(transformed, filepath)
  // map = convert.fromSource(transformed).toJSON(),
  // con = new sourceMap.SourceMapConsumer(map),
  // content = con.sourceContentFor(filepath)
  // t.equal(content, fs.readFileSync(filepath, 'utf8'))
  //
  // console.log(transformed);
  //
  // transformed = t_dupe(transformed, filepath),
  // map = convert.fromSource(transformed).toJSON(),
  // con = new sourceMap.SourceMapConsumer(map),
  // origPos = con.originalPositionFor({line: 1, column: 4})
  // console.log(origPos);
  // t .equal(1, origPos.line)
  // t.equal(0, origPos.column)
  // origPos = con.originalPositionFor({line: 2, column: 1})
  // t.equal(1, origPos.line)
  // t.equal(0, origPos.column)
  // origPos = con.originalPositionFor({line: 3, column: 1})
  // t.equal(1, origPos.line)
  // t.equal(0, origPos.column)
  // origPos = con.originalPositionFor({line: 4, column: 1})
  // t.equal(1, origPos.line)
  // t.equal(0, origPos.column)
  // content = con.sourceContentFor(filepath)
  // t.equal(content, fs.readFileSync(filepath, 'utf8'))
  //
  // console.log(transformed);
  t.end()
})
