(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function () {
    console.log('m1');
};

},{}],2:[function(require,module,exports){
var d, debug, m1;
console.log(1);
console.log(2);
m1 = require('./m1');
console.log(4);
console.log(6);
m1();    

},{"./m1":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJtMS5qcyIsIm1haW4uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKCdtMScpO1xufTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxJbnRjSW5abGNuTnBiMjVjSWpvekxGd2ljMjkxY21ObGMxd2lPbHRjSWk5b2IyMWxMMnRsYVdzdmQyOXlheTl3Y205cVpXTjBjeTl6WVc1a1ltOTRMWE52ZFhKalpXMWhjQzl0TVM1cWMxd2lYU3hjSW01aGJXVnpYQ0k2VzF3aWJXOWtkV3hsWENJc1hDSmxlSEJ2Y25SelhDSXNYQ0pqYjI1emIyeGxYQ0lzWENKc2IyZGNJbDBzWENKdFlYQndhVzVuYzF3aU9sd2lRVUZCUVVFc1RVRkJRU3hEUVVGUFF5eFBRVUZRTEVkQlFXbENMRmxCUVZjN1FVRkJRU3hKUVVNeFFrTXNUMEZCUVN4RFFVRlJReXhIUVVGU0xFTkJRVmtzU1VGQldpeEZRVVF3UWp0QlFVRkJMRU5CUVRWQ1hDSXNYQ0p6YjNWeVkyVnpRMjl1ZEdWdWRGd2lPbHRjSW0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRvS1NCN1hGeHVJQ0JqYjI1emIyeGxMbXh2WnlnbmJURW5LVnhjYm4xY1hHNWNJbDE5SWc9PSIsInZhciBkLCBkZWJ1ZywgbTE7XG5jb25zb2xlLmxvZygxKTtcbmNvbnNvbGUubG9nKDIpO1xubTEgPSByZXF1aXJlKCcuL20xJyk7XG5jb25zb2xlLmxvZyg0KTtcbmNvbnNvbGUubG9nKDYpO1xubTEoKTsgICAgLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYldGcGJpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSW0xaGFXNHVZMjltWm1WbElsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJMRWxCUVVFN08wRkJRVUVzVDBGQlR5eERRVUZETEVkQlFWSXNRMEZCV1N4RFFVRmFPenRCUVVGbExFOUJRVThzUTBGQlF5eEhRVUZTTEVOQlFWa3NRMEZCV2pzN1FVRkJaU3hMUVVGQkxFZEJRVkVzVDBGQlFTeERRVUZSTEU5QlFWSTdPMEZCUTNSRExFVkJRVUVzUjBGQlN5eFBRVUZCTEVOQlFWRXNUVUZCVWpzN1FVRkRUQ3hEUVVGQkxFZEJRVWtzUzBGQlFTeERRVUZOTEVkQlFVNDdPMEZCUVZjc1EwRkJRU3hEUVVGRkxFTkJRVVk3TzBGQlEyWXNUMEZCVHl4RFFVRkRMRWRCUVZJc1EwRkJXU3hEUVVGYU96dEJRVUZsTEVOQlFVRXNRMEZCUlN4RFFVRkdPenRCUVVGTExFOUJRVThzUTBGQlF5eEhRVUZTTEVOQlFWa3NRMEZCV2pzN1FVRkJaU3hGUVVGQkxFTkJRVUVpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKamIyNXpiMnhsTG14dlp5QXhPeUJqYjI1emIyeGxMbXh2WnlBeU95QmtaV0oxWnlBOUlISmxjWFZwY21VZ0oyUmxZblZuSnp0Y2JtMHhJRDBnY21WeGRXbHlaU0FuTGk5dE1TZGNibVFnUFNCa1pXSjFaeUFuWVNjN0lHUWdNMXh1WTI5dWMyOXNaUzVzYjJjZ05Ec2daQ0ExT3lCamIyNXpiMnhsTG14dlp5QTJPeUJ0TVNncFhHNGlYWDA9XG5cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxJbVlpIl19
