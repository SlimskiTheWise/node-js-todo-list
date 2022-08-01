const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const todos = [
    {
        title: 'clean the room',
        content: 'til tomorrow',
        status: 'done'
    },
    {
        title: 'clean the bathroom',
        content: 'til monday',
        status: 'done'
    },
    {
        title: 'clean the bedroom',
        content: 'whenever you want',
        status: 'done'
    }
]

async function main() {
    console.log(`Start seeding ...`)
    for (const u of todos) {
        const todo = await prisma.todo.create({
            data: u,
        })
        console.log(`Created user with id: ${todo.id}`)
    }
    console.log(`Seeding finished.`)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })