import PageHeader from '../../components/PageHeader';
import Landing from '../Landing';
import React from 'react';
import caixa from'../../assets/images/bancos/caixa-logo.svg';
import instagram from'../../assets/images/icons/instagram.png';
import facebook  from'../../assets/images/icons/facebook2.png';
import pix  from'../../assets/images/icons/pix.png';
import vakinha  from'../../assets/images/icons/vakinha.png';


import { Link } from 'react-router-dom';
import bancodobrasil from'../../assets/images/bancos/banco do brasil.png'
import bradesco from '../../assets/images/bancos/bradesco-logo.png'
import './styles.css';

export default function Help() {

    return (
    <div id="page-pet-list" className="container">
    <PageHeader title="Que bom que você quer nos ajudar💗"/>

    <main>

        <fieldset>
        <legend>Há várias maneiras de nos ajudar </legend>
        <p>Uma delas e nos seguir nas redes sociais onde conseguimos ser mais próximo de você e que você possa nos ajudar compartilhando.</p>

        <div className="buttons-container">
                   <a href="https://www.facebook.com/ongamigosprotetores/" target="_blank" className="Facebook">
                       <img src={facebook} alt="Facebook"/>
                       Facebook
                   </a>

                   <a href="https://www.instagram.com/ongamigosprotetores/" target="_blank" className="Instagram">
                       <img src={instagram} alt="Instagram"/>
                       Instagram
                   </a>
                   
                </div>
           
            
        </fieldset>

        <fieldset>
        <p>Ou pode contribuir com qualquer valor! 😺💗🐶</p>

        <div className="buttons-container">
                   <a href="https://www.vakinha.com.br/vaquinha/vakinha-unica-ong-amigos-protetores-dos-animais-de-frutal-mg" target="_blank" className="vakinha">
                        <img src={vakinha} alt="VAKINHA"/>
                       Vakinha
                   </a>

                   <a href="#" className="Pix">
                       <img src={pix} alt="PIX"/>
                       14.987.207/0001-06(CNPJ)
                   </a>
                   
                </div>
           
            
        </fieldset>



    </main>
    </div>
    )


}