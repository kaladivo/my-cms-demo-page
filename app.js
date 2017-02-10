import koa from 'koa';
import SimpleCms from 'simple-cms';
import {viewsDir, publicDir as viewsPublicDir} from 'simple-cms-bootstrap-theme';
import db from './models/db';
import sections from './administration/sections';
import session from 'koa-session';
import serve from 'koa-static'

import pagesRouter from './routes/pagesRouter'
import blogRouter from './routes/blogRouter'
import staticRouter from './routes/staticRouter'

let app = koa();

let simpleCms = SimpleCms({
  siteName: "Simple blog",
  viewsDir,
  viewsPublicDir,
  localesDir: __dirname + '/locales',
  db: db,
  emailAddress: "info@simplecms.com",
  siteUrl: "http://localhost:3000", 
  sections
});

app.keys = ['secret', 'key'] 
app.use(session({key: 'session', signed: true},app)); 
app.use(simpleCms.routes()).use(simpleCms.allowedMethods());

app.use(pagesRouter.routes(), pagesRouter.allowedMethods());
app.use(blogRouter.routes(), blogRouter.allowedMethods());
app.use(staticRouter.routes(), staticRouter.allowedMethods());

app.use(serve('public'))

app.listen(3000);
console.log('Listening on port 3000...');