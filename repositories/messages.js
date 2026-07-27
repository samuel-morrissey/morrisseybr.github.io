import { prisma } from "../prisma/prisma.js"

export async function getMessages() {
    // return await sql`SELECT * FROM messages ORDER BY id`
    return await prisma.message.findMany()
}

export async function saveMessage({ name, email, message }) {
    // return await sql`INSERT INTO messages (name, email, message) VALUES (${name}, ${email}, ${message}) RETURNING *`
    return await prisma.message.create({
        data: {
            name,
            email,
            message
        }
    })
}

export async function getMessageById(id) {
    // return await sql`SELECT * FROM messages WHERE id = ${id}`
    return await prisma.message.findMany({ where: { id: Number(id) } })
}

export async function deleteMessageById(id) {
    // return await sql`DELETE FROM messages WHERE id = ${id}`
    return await prisma.message.delete({ where: { id: Number(id) } })
}

export async function updateMessage({ id, name, email, message, read }) {
    // return await sql`UPDATE messages SET name = ${name}, email = ${email}, message = ${message}, read = ${read} WHERE id = ${id} RETURNING *`
    return await prisma.message.update({
        where: {
            id: Number(id)
        },
        data: {
            name,
            email,
            message,
            readed: read
        }
    })
}