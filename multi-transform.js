var d = require('debug')('udebug')

var fs         = require('fs'),
    esprima    = require('esprima'),
    estraverse = require('estraverse'),
    escodegen  = require('escodegen'),
    convert    = require('convert-source-map'),
    SM         = require('source-map')

// step1=======================================================
var code1 = fs.readFileSync('./multi-transform-t-1.js', 'utf8')
var ast1 = esprima.parse(code1, {sourceType: 'module', range: true, comment: true, tokens: true, loc: true})
estraverse.replace(ast1, {
  enter: function(node, parent) {
    if (node.type === 'ExpressionStatement') {
      parent.body.splice(parent.body.indexOf(node), 0, node)
    }
    if (node.type === 'Identifier') {
      node.name = new Array(3).join(node.name)
    }
  },
  leave: function() {}
})
var gen2 = escodegen.generate(ast1, {
  sourceMap: './multi-transform-t-dummy.js',
  sourceMapWithCode: true,
  sourceContent: code1
})

var mapComment = convert.fromJSON(gen2.map.toString()).toComment()
console.log(gen2.map.toString());
console.log(mapComment);
fs.writeFileSync('./multi-transform-t-2.js', gen2.code + '\n' + mapComment)

// step2=======================================================
var code2 = fs.readFileSync('./multi-transform-t-2.js', 'utf8')
// !!!!!!!!! PRESERVE AND REMOVE MAP COMMENT !!!!!!!!
var gen2MapFromComment = convert.fromSource(code2).toObject()
console.log('-----------------');
console.log(code2);
console.log('-----------------');
code2 = convert.removeComments(code2)
console.log('-----------------');
console.log(code2);
console.log('-----------------');
var ast2 = esprima.parse(code2, {sourceType: 'module', range: true, comment: true, tokens: true, loc: true})
estraverse.replace(ast2, {
  enter: function(node, parent) {
    if (node.type === 'ExpressionStatement') {
      parent.body.splice(parent.body.indexOf(node), 0, node)
    }
    if (node.type === 'Identifier') {
      node.name = new Array(3).join(node.name)
    }
  },
  leave: function() {}
})
var gen3 = escodegen.generate(ast2, {
  sourceMap: './multi-transform-t-dummy.js',
  sourceMapWithCode: true,
  sourceContent: code2
})

var mapComment = convert.fromJSON(gen3.map.toString()).toComment()
console.log(gen3.map.toString());
console.log(mapComment);

fs.writeFileSync('./multi-transform-t-3.js', gen3.code + '\n' + mapComment)

// goal=======================================================
var code1 = fs.readFileSync('./multi-transform-t-1.js', 'utf8')
var ast1 = esprima.parse(code1, {sourceType: 'module', range: true, comment: true, tokens: true, loc: true})
estraverse.replace(ast1, {
  enter: function(node, parent) {
    if (node.type === 'ExpressionStatement') {
      parent.body.splice(parent.body.indexOf(node), 0, node)
      parent.body.splice(parent.body.indexOf(node), 0, node)
      parent.body.splice(parent.body.indexOf(node), 0, node)
    }
    if (node.type === 'Identifier') {
      node.name = new Array(5).join(node.name)
    }
  },
  leave: function() {}
})
var gen_goal = escodegen.generate(ast1, {
  sourceMap: './multi-transform-t-dummy.js',
  sourceMapWithCode: true,
  sourceContent: code1
})

var mapComment = convert.fromJSON(gen_goal.map.toString()).toComment()
console.log(gen_goal.map.toString());
console.log(mapComment);

fs.writeFileSync('./multi-transform-t-goal.js', gen_goal.code + '\n' + mapComment)
// play=======================================================

console.log();
console.log();

console.log('map for gen2');
console.log(gen2.map._mappings.toArray().reduce((acc, m, idx) => {
  return acc + `${idx}(${m.name}):{${m.originalLine},${m.originalColumn}}->{${m.generatedLine},${m.generatedColumn}},	`
}, ''));
console.log('map for gen3');
console.log(gen3.map._mappings.toArray().reduce((acc, m, idx) => {
  return acc + `${idx}(${m.name}):{${m.originalLine},${m.originalColumn}}->{${m.generatedLine},${m.generatedColumn}},	`
}, ''));
console.log('map for goal');
console.log(gen_goal.map._mappings.toArray().reduce((acc, m, idx) => {
  return acc + `${idx}(${m.name}):{${m.originalLine},${m.originalColumn}}->{${m.generatedLine},${m.generatedColumn}},	`
}, ''));
console.log('map for gen2 comment');
var smc_of_code2_comment = new SM.SourceMapConsumer(gen2MapFromComment)
console.log(SM.SourceMapGenerator.fromSourceMap(smc_of_code2_comment)._mappings.toArray().reduce((acc, m, idx) => {
  return acc + `${idx}(${m.name}):{${m.originalLine},${m.originalColumn}}->{${m.generatedLine},${m.generatedColumn}},	`
}, ''));

console.log();

var smc_of_gen2 = new SM.SourceMapConsumer(gen2.map.toString())

console.log('merge...');
var smc_of_gen3 = new SM.SourceMapConsumer(gen3.map.toString())
smc_of_gen3.eachMapping((m, idx) => {
  console.log(`${idx}(${m.name}):{${m.originalLine},${m.originalColumn}}->{${m.generatedLine},${m.generatedColumn}}`);
  // console.log('  origPos', smc_of_code2_comment.originalPositionFor({line: m.generatedLine, column: m.generatedColumn}));
  // var origPosInGen2 = smc_of_gen2.originalPositionFor({line: m.originalLine, column: m.originalColumn})
  var origPosInGen2 = smc_of_gen2.originalPositionFor({line: m.originalLine, column: m.originalColumn})
  var origPosInGen2_2 = smc_of_gen2.originalPositionFor({line: m.generatedLine, column: m.generatedColumn})
  console.log('  origPos  ', `{${origPosInGen2.line},${origPosInGen2.column}}`);
})


console.log();
console.log();
console.log();
console.log();

var mergedMap = mergeMap(gen2MapFromComment, gen3.map.toString())
function mergeMap(oldMap, newMap) {
  console.log(oldMap);
  console.log(newMap);
  var oldMapConsumer = new SM.SourceMapConsumer(oldMap)
  var newMapConsumer = new SM.SourceMapConsumer(newMap)
  var mergedMapGenerator = new SM.SourceMapGenerator()
  console.log(SM.SourceMapGenerator.fromSourceMap(newMapConsumer)._mappings.toArray())
  newMapConsumer.eachMapping((m, idx) => {
    var oldOrigPos = oldMapConsumer.originalPositionFor({line: m.originalLine, column: m.originalColumn})
    console.log(idx, m)
    console.log(idx, oldOrigPos);
    mergedMapGenerator.addMapping({
      generated: {
        line: m.generatedLine,
        column: m.generatedColumn
      },
      original: {
        line: oldOrigPos.line,
        column: oldOrigPos.column
      },
      source: m.source,
      name: m.name
    })
  })
  return mergedMapGenerator.toString()
}

console.log(gen2MapFromComment.sources);
console.log(convert.fromObject(mergedMap).setProperty('sources', gen2MapFromComment.sources));
console.log(gen_goal.map.toString());
console.log(mergedMap.toString());
// console.log(convert.fromJSON(gen_goal.map.toString()).toComment());
// console.log(convert.fromObject(mergedMap).toComment());

fs.writeFileSync('./multi-transform-t-last.js', gen3.code + '\n' + convert.fromObject(mergedMap).toComment())
