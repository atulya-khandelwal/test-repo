const zod = require('zod')

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string().min(10, "Please enter at least 10 letters."),
});

const updateTodo = zod.object({
    id: zod.string(),
})

module.exports = {
    createTodo,
    updateTodo
}