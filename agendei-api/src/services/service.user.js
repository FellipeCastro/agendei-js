import bcrypt from "bcrypt"
import jwt from "../token.js"

import repositoryUser from "../repositories/repository.user.js"

async function Register(name, email, password) {
    const hashPassword = await bcrypt.hash(password, 10)
    const user = await repositoryUser.Register(name, email, hashPassword)

    user.token = jwt.CreateToken(user.id_user)

    return user
}

async function Login(email, password) {
    const user = await repositoryUser.ListByEmail(email)

    if (user.length === 0) {
        return []
    }

    if (await bcrypt.compare(password, user.password)) {
        delete user.password

        user.token = jwt.CreateToken(user.id_user)

        return user
    }

    return []
}

async function Profile(id_user) {
    const user = await repositoryUser.Profile(id_user)

    return user
}

export default { Register, Login, Profile }
