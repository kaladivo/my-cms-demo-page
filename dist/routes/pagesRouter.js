'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _pug = require('pug');

var _pug2 = _interopRequireDefault(_pug);

var _marked = require('marked');

var _marked2 = _interopRequireDefault(_marked);

var _pages = require('../models/pages');

var _pages2 = _interopRequireDefault(_pages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _koaRouter2.default();
var compileFrontPage = _pug2.default.compileFile('views/pages/frontPage.pug');
var compileContactPage = _pug2.default.compileFile('views/pages/contactPage.pug');
var compileAboutPage = _pug2.default.compileFile('views/pages/aboutPage.pug');

router.get('/', regeneratorRuntime.mark(function _callee() {
  var page;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _pages2.default.findOne({ _page: "frontPage" });

        case 2:
          page = _context.sent;

          if (!page) page = { title: "Front page" };

          this.body = compileFrontPage({ marked: _marked2.default, page: page });

        case 5:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
}));

router.get('/contact', regeneratorRuntime.mark(function _callee2() {
  var page;
  return regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _pages2.default.findOne({ _page: "contactPage" });

        case 2:
          page = _context2.sent;

          if (!page) page = { title: "Contact page" };

          this.body = compileContactPage({ marked: _marked2.default, page: page });

        case 5:
        case 'end':
          return _context2.stop();
      }
    }
  }, _callee2, this);
}));

router.get('/about', regeneratorRuntime.mark(function _callee3() {
  var page;
  return regeneratorRuntime.wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return _pages2.default.findOne({ _page: "aboutPage" });

        case 2:
          page = _context3.sent;

          if (!page) page = { title: "About page" };

          this.body = compileAboutPage({ marked: _marked2.default, page: page });

        case 5:
        case 'end':
          return _context3.stop();
      }
    }
  }, _callee3, this);
}));

exports.default = router;