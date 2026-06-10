import { getMessages, getMessageById, saveMessage, updateMessage, deleteMessageById } from "../repositories/messages.js"

export async function createMessage(data) {
    const message = await saveMessage({ name: data.name, email: data.email, message: data.message })
    return message.id
}

export async function listMessages() {
    const messages = await getMessages()
    return messages
}

export async function findMessage(id) {
    const message = await getMessageById(id)
    return message
}

export async function markMessageAsRead(id) {
    const messages = await getMessageById(id)
    const message = messages[0]
    if (!message) {
        throw Error("Messagem não encontrada")
    }
    message.read = true
    const updatedMessage = await updateMessage({ id, name: message.name, email: message.email, message: message.message, read: message.read })
    return updatedMessage
}

export async function deleteMessage(id) {
    await deleteMessageById(id)
}