'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _monk = require('monk');

var _monk2 = _interopRequireDefault(_monk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var db = (0, _monk2.default)("localhost/simple-blog");
db.then(function () {
  console.log('Connected to mongo db.');
});

exports.default = db;