import express from "express"
import { registerController, loginController, meController, logoutController } from "../controllers/auth.js"

const router = express.Router()

router.post('/register', registerController)
router.post('/login', loginController)
router.get('/me', meController)
router.post('/logout', logoutController)

export { router }