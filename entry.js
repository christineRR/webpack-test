// code spliting
var a = require('./a.js');
var b = require('./b.js');
require.ensure(['./c.js', './d.js'], function (require) {
  a.say();
  b.say();
  var c = require('./c.js');
});

require.ensure(['./d.js'], function (require) {
  var d = require('./d.js');
  d.say();
})
// require('./style.css');
// document.write(require('./content.js'));
