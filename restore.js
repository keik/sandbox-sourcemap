var fs               = require('fs'),
    sourceMap        = require('source-map'),
    sourceMapResolve = require('source-map-resolve'),
    convert          = require('convert-source-map')


var g2 = fs.readFileSync('./multi-transform-t-2.js', 'utf8'),
    g2Map = convert.fromSource(g2).toJSON()

var g2Consumer = new sourceMap.SourceMapConsumer(g2Map)
console.log(g2Map);
console.log(g2Consumer.sources);
var c = g2Consumer.sourceContentFor('multi-transform-t-dummy.js')
console.log(c);
