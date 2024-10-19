import serviceUser from "../services/service.user.js"


async function Register(req, res) {
    const { name, email, password } = req.body

    const user = await serviceUser.Register(name, email, password)

    // status 201 = criado com sucesso
    res.status(201).json(user)
}

async function Login(req, res) {
    const { email, password } = req.body

    const user = await serviceUser.Login(email, password)

    if (user.length === 0) {
        // status 401 = não autorizado
        res.status(401).json({ error: "Email ou senha inválidos" })
    }

    res.status(200).json(user)
}

async function Profile(req, res) {
    const id_user = req.id_user
    const user = await serviceUser.Profile(id_user)

    res.status(200).json(user)
}

export default { Register, Login, Profile }
