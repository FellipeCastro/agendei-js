import jwt from "jsonwebtoken"

const secretToken = "agendeijs"

function CreateToken(id_user) {
    const token = jwt.sign({ id_user }, secretToken, {
        expiresIn: 999
    })

    return token
}

function ValidateToken(req, res, next) {
    const authToken = req.headers.authorization

    if (!authToken) {
        return res.status(401).json({ error: "Token não infromado" })
    }

    const [bearer, token] = authToken.split(" ")

    jwt.verify(token, secretToken, (err, tokenDecoded) => {
        if (err) {
            return res.status(401).json({ error: "Token inválido" })
        }

        req.id_user = tokenDecoded.id_user

        next() // token validado, seguir adiante...
    })
}

export default { CreateToken, ValidateToken }
