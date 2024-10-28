import { Link, useNavigate } from "react-router-dom"

import logo from "../../assets/logo.png"
import bg from "../../assets/fundo.png"

import "./register.css"

function Register() {
    const navigate = useNavigate()

    function executeRegister() {
        navigate("/appointments")
    }

    return (
        <div className="row">
            <div className="col-sm-5 d-flex justify-content-center align-items-center text-center">
                <form className="form-signin">
                    <img src={logo} alt="Logo" className="logo mb-4" />

                    <h5 className="mb-5">Crie sua conta agora mesmo!</h5>
                    <h5 className="mb-4 text-secondary">Preencha os campos abaixo</h5>

                    <div className="mt-4">
                        <input type="text" placeholder="Nome" className="form-control" />
                    </div>
                    <div className="mt-2">
                        <input type="email" placeholder="E-mail" className="form-control" />
                    </div>
                    <div className="mt-2">
                        <input type="password" placeholder="Senha" className="form-control" />
                    </div>
                    <div className="mt-2">
                        <input type="password" placeholder="Confirme sua senha" className="form-control" />
                    </div>
                    <div className="mt-3 mb-5">
                        <button className="btn btn-primary w-100" onClick={executeRegister} type="button">Criar minha conta</button>
                    </div>
                    <div>
                        <span>Já tenho uma conta. <Link to="/">Acessar agora</Link></span>
                    </div>
                </form>
            </div>

            <div className="col-sm-7">
                <img src={bg} alt="Imagem de fundo" className="background-login" />
            </div>
        </div>
    )
}

export default Register
