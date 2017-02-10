import Router from 'koa-router'
import pug from 'pug';
import marked from 'marked';
import pages from '../models/pages';
import posts from '../models/posts';
import moment from 'moment';

let router = new Router();
const compileBlogPage = pug.compileFile('views/pages/blogPage.pug');

router.get('/blog', function*() {
  const onOnePage = 5;
  const page = this.request.query.page || 1;
  let maxPages = Math.ceil((yield posts.count({published: {$lte: new Date()}})) / onOnePage);

  if(maxPages == 0) maxPages = 1; //No blogs posted yet

  if(page < 1) return this.redirect('/blog?page=1');
  else if(page > maxPages) return this.redirect("/blog?page=" + maxPages)

  let fetchedPosts = yield posts.find({published: {$lte: new Date()}}, {skip: (page-1) * onOnePage, limit: onOnePage, sort: {published: -1}});
  this.body = compileBlogPage({
    posts: fetchedPosts, 
    marked,
    page, 
    maxPages,
    moment
  });
});

export default router;