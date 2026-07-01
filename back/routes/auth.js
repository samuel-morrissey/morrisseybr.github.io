import express from "express"

const router = express.Router()

router.post('/register', () => { console.log("Rota de registro chamada!") })

export { router }