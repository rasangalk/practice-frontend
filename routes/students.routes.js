const Router = require('@koa/router');
const {addStudent, getStudents, getStudent, updateStudent, deleteStudent} = require('../api/students.api');

const router = new Router({
    prefix:'/student'
});

router.post('/',async ctx => {
    let student = ctx.request.body;
    student = await addStudent(student);
    ctx.response.status = 200;
    ctx.body = student;
});

router.get('/', async ctx => {
    ctx.body = await getStudents();
});

router.get('/:id', async ctx => {
    const id = ctx.params.id;
    ctx.body = await getStudent(id);
});

router.put('/:id', async ctx => {
    const id = ctx.params.id;
    let student = ctx.request.body;
    student = await updateStudent(id, student);
    ctx.response.status = 200;
    ctx.body = student;
});

router.delete('/:id', async ctx => {
    const id = ctx.params.id;
    ctx.body = await deleteStudent(id);
});

module.exports = router;