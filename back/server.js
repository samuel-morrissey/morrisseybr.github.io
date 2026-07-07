import "dotenv/config"
import express from 'express'
import { router as messagesRouter } from "./routes/messages.js"
import { router as authRouter } from "./routes/auth.js"
import session from 'express-session'

const server = express()
const PORT = process.env.PORT || 3000

server.use(express.json())
server.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,   // sem acesso via JS no navegador
    secure: false,    // true em produção (HTTPS)
    sameSite: 'lax',  // controla envio entre sites
    maxAge: 1000 * 60 * 60 * 24 // 24 horas
  }
}))

server.get("/health", (req, res) => {
    res.json({ status: "ok" })
})

server.get("/version", (req, res) => {
    res.json({ version: "2.0.0" })
})

server.use('/messages', messagesRouter)
server.use('/auth', authRouter)

server.listen(PORT, () => {
    console.log(`Escutando pelo express na porta ${PORT}!!!`)
})