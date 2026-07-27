import { prisma } from "../prisma/prisma.js"

export async function saveUser({ email, password }) {
    return await prisma.user.create({
        data: {
            email,
            password
        }
    })
}

export async function findUserByEmail(email) {
    return await prisma.user.findUnique({
        where: {
            email
        }
    })
}

export async function findUserById(userId) {
    return await prisma.user.findUnique({
        where: {
            id: userId
        }
    })
}