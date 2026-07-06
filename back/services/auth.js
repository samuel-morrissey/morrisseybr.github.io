import bcrypt from 'bcrypt'
import { saveUser, findUserByEmail, findUserById } from '../repositories/auth.js'

export async function registerUser(data) {
    const hash = await bcrypt.hash(data.password, 12)
    const user = await saveUser({ email: data.email, password: hash })
    return user.id
}

export async function verifyUser(data) {
    const user = await findUserByEmail(data.email)
    if (!user) {
        throw Error("Usuário não encontrado")
    }
    const isPasswordCorrect = await bcrypt.compare(data.password, user.password)
    if (isPasswordCorrect) {
        return user.id
    } else {
        throw Error("Credenciais inválidas")
    }
}

export async function findMe(userId) {
    const user = await findUserById(userId)
    if (!user) {
        throw Error("Usuário não encontrado")
    }
    return { id: user.id, email: user.email }
}