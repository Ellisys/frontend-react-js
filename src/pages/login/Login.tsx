import Btn from "../../components/button/index";
import Links from "../../components/links/index"
import BgLogin from "../../components/background-login";
import * as yup from 'yup';
import axios from "axios";

import "./login.css"
import "../../assets/img/moutain.jpg"

const btnBg = document.getElementsByClassName("bg-login")

function mudarCadastro() {

    if (window.innerWidth < 1024) {
        document.getElementById("cadastro")?.classList.toggle("dBlock")
        document.getElementById("login")?.classList.toggle("dNone")
    }
    if (window.innerWidth >= 1024) {
        document.getElementById("login")?.classList.toggle("closeCad")
        document.getElementById("cadastro")?.classList.toggle("openCad")

        btnBg[2]?.classList.toggle("closeCad")
        btnBg[3]?.classList.toggle("openBtn")
    }
}

function loginUsuario(e) {
    event?.preventDefault()
    const alerta = document.getElementById("alertaLogin");
    alerta!.className = ""

    let dataFormulario = {
        name: e.target[0].value,
        password: e.target[1].value
    }
    const yupSchema = yup.object().shape({
        name: yup.string().required(),
        password: yup.string().required(),
    })

    if (dataFormulario.name == "" || dataFormulario.password == "") {
        alerta!.innerText = "Usuário ou senha não preenchidos."
        alerta!.classList.add("aviso")
        return
    }

    yupSchema.isValid(dataFormulario).then(valid => {
        if (valid == true) {
            axios.post('http://localhost:4000/login', {
                name: dataFormulario.name,
                password: dataFormulario.password
            })
                .then(function (response) {
                    console.log(response.status);
                    if (response.status == 200) {
                        alerta!.innerText = "Usuário logado com sucesso!"
                        alerta!.classList.add("sucesso")
                        e.target[0].value = null
                        e.target[1].value = null
                    }
                })
                .catch(function (error) {
                    console.log(error.response.data);
                    alerta!.innerText = "Usuário ou senha inválidos."
                    alerta!.classList.add("falha")
                });
        }
    })
}

function cadastrarUsuario(e) {
    event?.preventDefault()
    const alerta = document.getElementById("alerta");
    alerta!.className = ""

    let dataFormulario = {
        name: e.target[0].value,
        password: e.target[1].value,
        confirmPassword: e.target[2].value
    }

    const yupSchema = yup.object().shape({
        name: yup.string().required(),
        password: yup.string().required(),
        confirmPassword: yup.string().required()
    })

    if (dataFormulario.password != dataFormulario.confirmPassword) {
        alerta!.classList.add("aviso")
        alerta!.innerText = "Por favor insira senhas iguais."
        return
    }

    yupSchema.isValid(dataFormulario).then(valid => {
        if (valid == true) {
            console.log(valid)
            axios.post('http://localhost:4000/user/cadaster', {
                name: dataFormulario.name,
                password: dataFormulario.password
            })
                .then(function (response) {
                    console.log(response.status);
                    if (response.status == 200) {
                        alerta!.innerText = "Usuário cadastrado com sucesso!"
                        alerta!.classList.add("sucesso")
                        e.target[0].value = null
                        e.target[1].value = null
                        e.target[2].value = null
                    }
                })
                .catch(function (error) {
                    console.log(error.response.data);
                    alerta!.innerText = "Usuário já cadastrado."
                    alerta!.classList.add("falha")
                });
        } else {
            alerta!.innerText = "Existe algum campo vázio."
            alerta!.classList.add("aviso")
        }
    })

}


function Login() {
    return (
        <>
            <section id="login" className="login">

                <article>
                    <h2>Login</h2>

                    <span className="alerta" id="alertaLogin"></span>

                    <form onSubmit={loginUsuario}>

                        <input className="inputTxt" type="text" placeholder="Username" />
                        <input className="inputTxt" type="text" placeholder="Senha" min={1} />

                        <div>
                            <input type="checkbox" id="cb-conectado" />
                            <label htmlFor="cb-conectado">Permanecer conectado</label>
                        </div>

                        <Btn text="Log In" />
                        <Links text="Cadastro" href="#" />
                    </form>

                    
                </article>

                <BgLogin pTxt="Crie uma conta" btnTxt="Cadastrar" func={mudarCadastro} />

            </section>

            <section id="cadastro" className="login cadastro">

                <article>
                    <h2>Cadastro</h2>

                    <span className="alerta" id="alerta"></span>

                    <form onSubmit={cadastrarUsuario}>

                        <input className="inputTxt" type="text" placeholder="Username" name="username" />

                        <input className="inputTxt" type="text" placeholder="Senha" name="password" />
                        <input className="inputTxt" type="text" placeholder="Confirme a senha" />

                        <div>
                            <input type="checkbox" id="cb-termos" required />
                            <label htmlFor="cb-termos">Aceito as <a href="#">políticas</a> de privacidade e <a href="#">termos</a> de uso.</label>
                        </div>
                        <Btn text="Cadastrar" />
                        <Links text="Log in" href="#" />
                    </form>

                </article>
                <BgLogin pTxt="Já tem uma conta?" btnTxt="Login" func={mudarCadastro} />

            </section>

            <div className="btnDesktop">
                <BgLogin pTxt="Crie uma conta" btnTxt="Cadastrar" func={mudarCadastro} />
                <BgLogin pTxt="Já tem uma conta?" btnTxt="Login" func={mudarCadastro} />
            </div>

        </>
    );

}


export default Login