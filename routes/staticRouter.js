import Router from 'koa-router'
import send from 'koa-send';

let router = new Router();

router.get(new RegExp("\/public\/(.*)"), function*(next) {
  let filename = this.params['0'];
  yield send(this, filename,{root: "public"});
})


export default router;