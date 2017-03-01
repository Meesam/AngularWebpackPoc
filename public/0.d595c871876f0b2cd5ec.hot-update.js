webpackHotUpdate(0,[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IndexController = function IndexController($scope) {
  _classCallCheck(this, IndexController);

  this.controllerName = 'IndexController';
  $scope.Name = "Meesam";

  $scope.changeName = function () {
    $scope.Name = "Welcome to Angular with ES6 and Webpack";
  };
};

exports.default = IndexController;

/***/ })
])