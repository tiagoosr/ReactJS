import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

import { isLogged } from '../../../helpers/AuthHandler'

const Footer = () => {
    let logged = isLogged();

    return (
        <div className="header">
            <div className="container" >
                <div className="logo" >
                    <Link to="/">
                        <span className="logo-1">O</span>
                        <span className="logo-2">L</span>
                        <span className="logo-3">X</span>
                    </Link>
                </div>
                <nav>
                    <ul>

                        {logged &&
                            <>
                                <li>
                                    <Link to="/my-account" className="textoLi">Minha Conta</Link>
                                </li>
                                <li>
                                    <Link to="/logout" className="textoLi">Sair</Link>
                                </li>
                                <li>
                                    <Link to="/post-an-ad" className="button">Poste um anúncio</Link>
                                </li>
                            </>
                        }

                        {!logged &&
                            <>
                                <li>
                                    <Link to="/signin" className="textoLi">Login</Link>
                                </li>
                                <li>
                                    <Link to="/signup" className="textoLi">Cadastrar</Link>
                                </li>
                            </>
                        }
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Footer;

// const style = ({
    // textoLi: {
    //     color: '#000',
    //     fontSize: '14px',
    //     textDecoration: 'none',

    //     '&:hover': {
    //         color: '#999',
    //     },
    // },

    // textoLi:hover {
    //     color: #999;
    // }

// });