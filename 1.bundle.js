webpackJsonp([1,2],{

/***/ 4:
/***/ function(module, exports) {

	module.exports = {
	  name: 'c',
	  age: 12,
	  say: function () {
	    console.log('orange');
	  }
	};
	console.log('c.....');

/***/ },

/***/ 5:
/***/ function(module, exports, __webpack_require__) {

	var b = __webpack_require__(3);
	module.exports = {
	  name: 'd',
	  age: 45,
	  say: function () {
	    console.log('lemon');
	    console.log('lemon require pear:', b.name, b.age);
	  }
	};
	console.log('d.....');

/***/ }

});