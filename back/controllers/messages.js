import { createMessage, listMessages, getMessagesByIndex, readMessage, deleteMessage as deleteMessageService } from "../services/messages.js"

// Email Blacklist

const emailBlacklist = ["samuel@gmail.com"]

export const messageCreateController = (req, res) => {
    const data = req.body
    if (!data) {
        throw Error("Sem corpo na mensagem")
        return
    }
    if (!data.name || !data.email || !data.message) {
        throw Error("Nome, e-mail e mensagem são obrigatórios")
        return
    }
    if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(data.email)) {
        throw Error("E-mail inválido")
        return
    }
    if (emailBlacklist.includes(data.email)) {
        throw Error("E-mail bloqueado")
        return
    }
    try {
        const finalIndex = createMessage(data)
        res.json({ status: "ok", index: finalIndex })
    } catch (err) {
        res.status(400).send(err.message)
        return
    }
}

export const getMessagesController = (req, res) => {
    const messages = listMessages()
    res.json(messages)
}

export const getMessageByIndex = (req, res) => {
    // Validação...
    const message = getMessagesByIndex(req.params.index)
    res.json(message)
}

export const patchMessage = (req, res) => {
    const updatedMessage = readMessage(req.params.index)
    res.json(updatedMessage)
}

export const deleteMessage = (req, res) => {
    const finalLength = deleteMessageService(req.params.index)
    res.json({ status: "ok", length: finalLength })
}