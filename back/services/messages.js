// Mensagens (message)

const messages = []

export function createMessage(data) {    
    messages.push({ ...data, readed: false })
    return messages.length - 1
}

export function listMessages() {
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