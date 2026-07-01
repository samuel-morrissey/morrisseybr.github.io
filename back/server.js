import "dotenv/config"
import express from 'express'
import { router as messagesRouter } from "./routes/messages.js"
import { router as authRouter } from "./routes/auth.js"

const server = express()
const PORT = process.env.PORT || 3000

server.use(express.json())

server.get("/health", (req, res) => {
    res.json({ status: "ok" })
})

server.get("/version", (req, res) => {
    res.json({ version: "2.0.0" })
})

server.use('/messages', messagesRouter)
server.use('/auth', authRouter)

server.listen(PORT, () => {
    console.log(`Escutando pelo express na porta ${PORT}!`)
})