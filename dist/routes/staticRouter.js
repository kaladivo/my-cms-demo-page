'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _koaSend = require('koa-send');

var _koaSend2 = _interopRequireDefault(_koaSend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _koaRouter2.default();

router.get(new RegExp("\/public\/(.*)"), regeneratorRuntime.mark(function _callee(next) {
  var filename;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          filename = this.params['0'];
          _context.next = 3;
          return (0, _koaSend2.default)(this, filename, { root: "public" });

        case 3:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
}));

exports.default = router;