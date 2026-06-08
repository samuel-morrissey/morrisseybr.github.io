import express from "express"
import { messageCreateController, getMessagesController, getMessageByIndex, patchMessage, deleteMessage } from '../controllers/messages.js'

const router = express.Router()

router.post('/', messageCreateController)

router.get("/", getMessagesController)

router.get("/:index", getMessageByIndex)

router.patch("/:index", patchMessage)

router.delete("/:index", deleteMessage)

export { router }