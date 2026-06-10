import express from "express"
import { postMessagesController, getMessagesController, getMessagesByIdController, patchMessagesController, deleteMessagesController } from '../controllers/messages.js'

const router = express.Router()

router.post('/', postMessagesController)

router.get("/", getMessagesController)

router.get("/:id", getMessagesByIdController)

router.patch("/:id", patchMessagesController)

router.delete("/:id", deleteMessagesController)

export { router }