import { Fragment, useEffect, useState, useContext } from 'react';
import layoutContext from './../../../context/layout/layoutContext';
import styled from '@emotion/styled';
import user from './../img/user.svg';
import facebook from './../img/facebook.svg';
import instagram from './../img/instagram.svg';
import whatsapp from './../img/whatsapp.svg';
import './hmenu.css'
import { Link } from 'react-router-dom';

const BoxH = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ##f9f5f4a6;
    position: fixed;
    z-index: 2;
`;

const Hmenu = () => {

    // Obtener la funcion del context de tarea
    const layoutsContext = useContext(layoutContext);
    const { open } = layoutsContext;

    const prueba = () => {

        let lateral = document.querySelector('.lateral-menu');
        let redSocial = document.querySelectorAll('.red-social');
        if ( open ) {

            lateral.classList.add('open');
            redSocial[0].classList.add('open');
            redSocial[1].classList.add('open');
            redSocial[2].classList.add('open');

        } else {

            lateral.classList.remove('open');
            redSocial[0].classList.remove('open');
            redSocial[1].classList.remove('open');
            redSocial[2].classList.remove('open');

        }
    }

    useEffect( () => {
        prueba();
        // eslint-disable-next-line
    }, [open])

    return (
        <Fragment>
                <BoxH>
                    <div className="lateral-menu">
                        <div className="lateral-list">
                            <Link to={'/'} className="enlace">
                                Inicio
                                <div className="line"></div>
                            </Link>
                            <Link to={'/sobre-nosotros'} className="enlace">
                                Nosotros
                                <div className="line"></div>
                            </Link>
                            <Link to={'/catalogo'} className="enlace">
                                Catalogo
                                <div className="line"></div>
                            </Link>
                            <Link to={'/contacto'} className="enlace">
                                Contacto
                                <div className="line"></div>
                            </Link>
                        </div>

                        <Link to={'/login'} className="login-btn">
                            <img src={user} alt="Icono de inicio de sesion" />
                            <div className="line"></div>
                        </Link>

                    </div>

                    <div className="redes-menu">
                        <a href="https://www.facebook.com/codigo.del.norte.78/" className="red-social">
                            <img src={facebook} alt="Icono de facebook" />
                        </a>
                        <a href="https://www.instagram.com/rost_code/" className="red-social">
                            <img src={instagram} alt="Icono de instagram" />
                        </a>
                        {/* eslint-disable-next-line */}
                        <a href="#" className="red-social">
                            <img src={whatsapp} alt="Icono de whatsapp" />
                        </a>
                    </div>
                </BoxH>
        </Fragment>
    );
}

export default Hmenu;