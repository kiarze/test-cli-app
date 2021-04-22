import Router from 'koa-router';
import { createScriptTag } from '../controllers/script_tag_controller';
import Shopify from "@shopify/shopify-api";

const router = new Router({prefix:'/script_tag'});

router.get('/', async(ctx) => {
    ctx.body = 'Get a script tag';
});

router.get('/all', async(ctx) => {
    ctx.body = 'Get all script tag';
});

router.post('/', async(ctx) => {
    console.log('Create script tag', ctx.sessionFromToken)
    const { shop, accessToken } = ctx.sessionFromToken;
    await createScriptTag(shop, accessToken)
    ctx.body = `Create a script tag ${shop} ${accessToken}`;
});

router.delete('/', async(ctx) => {
    ctx.body = 'Delete script tag';
});

export default router;