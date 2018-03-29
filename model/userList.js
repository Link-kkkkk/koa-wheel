let Mock = require('mockjs')
const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const db = require('monk')('localhost/blog')
const mongodbBlog = db.get('users')

let userIdData = Mock.mock({
    'title': 'testTitle',
    'user_list|5-10': [{
        'user_id|10000-99999': 1
    }]
})

module.exports = {
    userIdData: userIdData,
}
