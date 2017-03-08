'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _simpleCms = require('simple-cms');

var _simpleCms2 = _interopRequireDefault(_simpleCms);

var _simpleCmsBootstrapTheme = require('simple-cms-bootstrap-theme');

var _db = require('./models/db');

var _db2 = _interopRequireDefault(_db);

var _sections = require('./administration/sections');

var _sections2 = _interopRequireDefault(_sections);

var _koaSession = require('koa-session');

var _koaSession2 = _interopRequireDefault(_koaSession);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _pagesRouter = require('./routes/pagesRouter');

var _pagesRouter2 = _interopRequireDefault(_pagesRouter);

var _blogRouter = require('./routes/blogRouter');

var _blogRouter2 = _interopRequireDefault(_blogRouter);

var _staticRouter = require('./routes/staticRouter');

var _staticRouter2 = _interopRequireDefault(_staticRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _koa2.default)();

var simpleCms = (0, _simpleCms2.default)({
  siteName: "Simple blog",
  viewsDir: _simpleCmsBootstrapTheme.viewsDir,
  viewsPublicDir: _simpleCmsBootstrapTheme.publicDir,
  localesDir: __dirname + '/locales',
  db: _db2.default,
  emailAddress: "info@simplecms.com",
  siteUrl: "http://localhost:3000",
  sections: _sections2.default
});

app.keys = ['secret', 'key'];
app.use((0, _koaSession2.default)({ key: 'session', signed: true }, app));
app.use(simpleCms.routes()).use(simpleCms.allowedMethods());

app.use(_pagesRouter2.default.routes(), _pagesRouter2.default.allowedMethods());
app.use(_blogRouter2.default.routes(), _blogRouter2.default.allowedMethods());
app.use(_staticRouter2.default.routes(), _staticRouter2.default.allowedMethods());

app.use((0, _koaStatic2.default)('public'));

app.listen(4433);
console.log('Listening on port 3000...');