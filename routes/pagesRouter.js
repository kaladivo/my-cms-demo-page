import Router from 'koa-router'
import pug from 'pug';
import marked from 'marked';
import pages from '../models/pages';

let router = new Router();
const compileFrontPage = pug.compileFile('views/pages/frontPage.pug')
const compileContactPage = pug.compileFile('views/pages/contactPage.pug')
const compileAboutPage = pug.compileFile('views/pages/aboutPage.pug')

router.get('/', function*() {
  let page = yield pages.findOne({_page: "frontPage"});
  if(!page) page = {title: "Front page"};

  this.body = compileFrontPage({marked, page});
});

router.get('/contact', function*() {
  let page = yield pages.findOne({_page: "contactPage"});
  if(!page) page = {title: "Contact page"};

  this.body = compileContactPage({marked, page});
});

router.get('/about', function*() {
  let page = yield pages.findOne({_page: "aboutPage"});
  if(!page) page = {title: "About page"};

  this.body = compileAboutPage({marked, page});
});



export default router;