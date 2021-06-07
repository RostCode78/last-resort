import { Fragment, useEffect, useState } from 'react';
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

const Hmenu = ({ open }) => {

    const [ active, setActive ] = useState(false);

    const prueba = () => {

        let menuBtn = document.querySelector('.lateral-menu');

        if ( open ) {

            menuBtn.classList.add('open');
            setActive(true);

        } else {

            if(active) {
                setActive(false);
            }

            return;

        }
    }

    useEffect( () => {
        prueba();
        // eslint-disable-next-line
    }, [open])

    return (
        <Fragment>
            { open
            ?
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
            : null }
        </Fragment>
    );
}

export default Hmenu;