import { sql } from "../db/db.js"

export async function getMessages() {
    return await sql`SELECT * FROM messages ORDER BY id`
}

export async function saveMessage({ name, email, message }) {
    return await sql`INSERT INTO messages (name, email, message) VALUES (${name}, ${email}, ${message}) RETURNING *`
}

export async function getMessageById(id) {
    return await sql`SELECT * FROM messages WHERE id = ${id}`
}

export async function deleteMessageById(id) {
    return await sql`DELETE FROM messages WHERE id = ${id}`
}

export async function updateMessage({ id, name, email, message, read }) {
    return await sql`UPDATE messages SET name = ${name}, email = ${email}, message = ${message}, read = ${read} WHERE id = ${id} RETURNING *`
}