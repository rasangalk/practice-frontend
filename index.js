const Koa = require('koa');
require('./dal');

const cors = require('@koa/cors');

const bodyParser = require('koa-bodyparser');

const app = new Koa();
app.use(bodyParser());
app.use(cors());

const student = require('./routes/students.routes');

app.use(student.routes()).use(student.allowedMethods());

app.use(ctx => {
    ctx.body = 'Koa is running'
});

app.listen(3000, ()=>{
    console.log('app is running on port 3000');
});