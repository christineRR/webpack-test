var b = require('./b.js');
module.exports = {
  name: 'd',
  age: 45,
  say: function () {
    console.log('lemon');
    console.log('lemon require pear:', b.name, b.age);
  }
};
console.log('d.....');