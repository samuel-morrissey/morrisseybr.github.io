import * as z from "zod";
import { createMessage, listMessages, findMessage, markMessageAsRead, deleteMessage as deleteMessage } from "../services/messages.js"

// Email Blacklist

const PostMessageControllerBody = z.object({
    name: z.string(),
    email: z.email(),
    message: z.string(),
});

const emailBlacklist = ["samuel@gmail.com"]

export const postMessagesController = async (req, res) => {
    try {
        const data = PostMessageControllerBody.parse(req.body)
        if (emailBlacklist.includes(data.email)) {
            throw Error("E-mail bloqueado")
            return
        }
        const messageId = await createMessage(data)
        res.json({ status: "ok", messageId })
    } catch (err) {
        if (err.name == "ZodError") {
            const message = JSON.parse(err.message)
            res.status(400).send(`Erro de validação: ${message[0].message}`)
            return
        }
        res.status(400).send(err.message)
        return
    }
}

export const getMessagesController = async (req, res) => {
    const messages = await listMessages()
    res.json(messages)
}

export const getMessagesByIdController = async (req, res) => {
    const message = await findMessage(req.params.id)
    res.json(message)
}

export const patchMessagesController = async (req, res) => {
    const updatedMessage = await markMessageAsRead(req.params.id)
    res.json(updatedMessage)
}

export const deleteMessagesController = async (req, res) => {
    await deleteMessage(req.params.id)
    res.json({ status: "ok" })
}