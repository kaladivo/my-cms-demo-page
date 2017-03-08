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

var _posts = require('../models/posts');

var _posts2 = _interopRequireDefault(_posts);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _koaRouter2.default();
var compileBlogPage = _pug2.default.compileFile('views/pages/blogPage.pug');

router.get('/blog', regeneratorRuntime.mark(function _callee() {
  var onOnePage, page, maxPages, fetchedPosts;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          onOnePage = 5;
          page = this.request.query.page || 1;
          _context.t0 = Math;
          _context.next = 5;
          return _posts2.default.count({ published: { $lte: new Date() } });

        case 5:
          _context.t1 = _context.sent;
          _context.t2 = onOnePage;
          _context.t3 = _context.t1 / _context.t2;
          maxPages = _context.t0.ceil.call(_context.t0, _context.t3);


          if (maxPages == 0) maxPages = 1; //No blogs posted yet

          if (!(page < 1)) {
            _context.next = 14;
            break;
          }

          return _context.abrupt('return', this.redirect('/blog?page=1'));

        case 14:
          if (!(page > maxPages)) {
            _context.next = 16;
            break;
          }

          return _context.abrupt('return', this.redirect("/blog?page=" + maxPages));

        case 16:
          _context.next = 18;
          return _posts2.default.find({ published: { $lte: new Date() } }, { skip: (page - 1) * onOnePage, limit: onOnePage, sort: { published: -1 } });

        case 18:
          fetchedPosts = _context.sent;

          this.body = compileBlogPage({
            posts: fetchedPosts,
            marked: _marked2.default,
            page: page,
            maxPages: maxPages,
            moment: _moment2.default
          });

        case 20:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
}));

exports.default = router;