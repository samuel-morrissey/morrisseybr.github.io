import * as z from "zod";
import { registerUser, verifyUser, findMe } from "../services/auth.js"

const RegisterControllerBody = z.object({
    email: z.email(),
    password: z.string().check(z.minLength(6), z.maxLength(12)),
    confirmPassword: z.string().check(z.minLength(6), z.maxLength(12))
});

export const registerController = async (req, res) => {
    const params = RegisterControllerBody.parse(req.body)
    if (params.password !== params.confirmPassword) {
        throw Error("As senhas são diferentes!")
    }
    const userId = await registerUser({ email: params.email, password: params.password })
    res.json({ status: "ok", userId })
}

const LoginControllerBody = z.object({
    email: z.email(),
    password: z.string(),
});

export const loginController = async (req, res) => {
    try {
        const params = LoginControllerBody.parse(req.body)
        const userId = await verifyUser({ email: params.email, password: params.password })
        if (!userId) {
            throw Error("Credenciais inválidas")
        }
        req.session.userId = userId
        res.json({ status: "ok", message: "Usuário logado" })
    } catch {
        res.status(403).json({ message: "Credenciais inválidas" })
    }
}

export const meController = async (req, res) => {
    const userId = req.session.userId
    if (!userId) {
        res.status(403).json({ message: "Sem usuário logado" })
        return
    }
    const result = await findMe(userId)
    res.json({status: "ok", result})
}

export const logoutController = async (req, res) => {
    req.session.destroy()
    res.json({ mensagem: 'Logout realizado' })
}