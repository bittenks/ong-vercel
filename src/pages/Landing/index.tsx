import React from 'react';
import { Link } from 'react-router-dom';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import adotarIcon from'../../assets/images/icons/adotar.svg';
import logoimg from'../../assets/images/logo.svg';
import logo_ong from '../../assets/images/Logo-ONG.png'
import landingimg from'../../assets/images/landing.svg';
import ajudarIcon from'../../assets/images/icons/ajudar.svg';

import petIcon from'../../assets/images/icons/pet.svg';


import './styles.css';
function Landing() {
    
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logo_ong}alt="logo"/>
                    <h2>Plataforma de adoção de animais.</h2>
                
                </div>
                <img src={landingimg} 
                alt="landing-img" 
                className="hero-image"
                />

                <div className="buttons-container">
                   <Link to="/adotar" className="adotar">
                       <img src={adotarIcon} alt="adotar"/>
                       Adotar
                   </Link>

                   <Link to="/ajudar" className="ajudar">
                       <img src={ajudarIcon} alt="Estudar"/>
                       Ajudar
                   </Link>
                   <Link to="/cadastrar" className="cadastrar">
                       <img src={petIcon} alt="cadastrar"/>
                       Cadastrar
                   </Link>
                   
                </div>
                
                <span className="total-connections">
                Amar, respeitar e proteger os animais.💗
                </span>

            </div>
        </div>
    )
}

export default Landing;
 