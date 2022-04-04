import React from 'react';
import { Link } from 'react-router-dom';
import logoIcon from '../../assets/images/logo.svg';
import logo_ong from '../../assets/images/Logo-ONG.png'

import backIcon from '../../assets/images/icons/back.svg';
import './styles.css';

interface PageHeaderProps {
    title: string;
    description?: string;
};

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar" />
                </Link>
                <img src={logo_ong} alt="Proffy" />
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>
                { props.description && <p>{props.description}</p> }
                {props.children}
            </div>
        </header>
    );
}

export default PageHeader;