var fs         = require('fs'),
    esprima    = require('esprima'),
    estraverse = require('estraverse'),
    escodegen  = require('escodegen'),
    convert    = require('convert-source-map'),
    SM         = require('source-map')


module.exports = function(oldMap, newMap) {
  var oldMapConsumer = new SM.SourceMapConsumer(oldMap)
  var newMapConsumer = new SM.SourceMapConsumer(newMap)
  oldMapConsumer.eachMapping(function(m, idx) {
    // console.log(`${idx}(${m.name}):{${m.originalLine},${m.originalColumn}}->{${m.generatedLine},${m.generatedColumn}}`);
    // var origPosInGen2 = newMapConsumer.originalPositionFor({line: m.originalLine, column: m.originalColumn})
    // var origPosInGen2_2 = newMapConsumer.originalPositionFor({line: m.generatedLine, column: m.generatedColumn})
    // console.log('  origPos  ', `{${origPosInGen2.line},${origPosInGen2.column}}`);
  })
  return oldMap
}
