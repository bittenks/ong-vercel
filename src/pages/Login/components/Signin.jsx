import React, { useRef } from 'react'
import {auth} from '../../../util/firebase';
import './Signin.css'
import warningIcon from '../../../assets/images/icons/warning.svg';
import PageHeader from '../../../components/PageHeader';
import { toast } from 'react-toastify';

 //mensagens notify API
 const sucesslogin = () => toast("Login realizado com Sucesso!🐶");
 const error = () => toast("Email ou senha incorreto. Tente novamente😿");

const Signin = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const signIn = e => {
        e.preventDefault()
            auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
            console.log(user)
            sucesslogin()
        }).catch(err => {
            console.log(err)
            error()
        })
    }
    return (
        <div id="page-signin-form" className="container">
            <PageHeader
                title="O cadastro está disponível apenas para os agentes da ONG."
                description="Por favor, entre para poder fazer o cadastro"
            />
             
        <main>
        <form action="">
            <fieldset>  
            <legend>Login</legend>
                
                
                <div className="signin">
                    <label htmlFor="">Email</label>
                    <input  label="Email" ref={emailRef} type="email"/>
                    <label htmlFor="">Senha</label>
                    <input  label="Senha" ref={passwordRef} type="password" />
                    <button type='submit' onClick={signIn}>Entrar </button>
                
                </div> 
                
            </fieldset>
            </form>
            <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso Importante" />
                            Importante <br />
                            Preencha todos os dados
                        </p>
                    </footer>
            </main>
        </div>
    )
}

export default Signin
