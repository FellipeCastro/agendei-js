import { consult } from "../database/connection.js"

async function Register(name, email, password) {
    let sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)"

    const user = await consult(sql, [name, email, password]) 

    return { id_user: user.insertId }
}

async function ListByEmail(email) {
    let sql = "SELECT * FROM users WHERE email = ?"

    const user = await consult(sql, [email])

    if (user.length === 0) {
        return []
    }

    return user[0]
}

async function Profile(id_user) {
    let sql = "SELECT id_user, name, email FROM users WHERE id_user = ?"

    const user = await consult(sql, [id_user])

    if (user.length === 0) {
        return []
    } 

    return user[0]
}

export default { Register, ListByEmail, Profile }
