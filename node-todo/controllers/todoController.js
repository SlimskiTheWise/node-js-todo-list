const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getTodos = async (req, res) => {
    const todos = await prisma.todo.findMany()
    res.json(todos)
}

const getTodoDetails = async (req, res) => {
    const { id } = req.params

    const todo = await prisma.todo.findUnique({
        where: { id: Number(id) }
    })

    res.json(todo)
}

module.exports = {
    getTodos,
    getTodoDetails
}