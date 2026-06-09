import postgres from "postgres"

// Mensagens (message)

const messages = []

const sql = postgres("postgres://postgres:postgres@localhost:5432/db", { max: 5 })

export async function createMessage(data) {
    messages.push({ ...data, readed: false })
    await sql`INSERT INTO messages ${sql(data)}`
    return messages.length - 1
}

export async function listMessages() {
    const messages = await sql`SELECT * FROM messages`
    return messages
}

export function getMessagesByIndex(index) {
    return messages[index]
}

export function readMessage(index) {
    const message = messages[index]
    message.readed = true
    messages[index] = message
    return message
}

export function deleteMessage(index) {
    messages.splice(index, 1)
    return messages.length
}