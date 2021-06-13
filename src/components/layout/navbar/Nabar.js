import { Fragment, useEffect, useState, useContext } from 'react';
import layoutContext from './../../../context/layout/layoutContext';
import styles from './Navbar.module.css';
import styled from '@emotion/styled';
import './navbar.css';
import { Link } from 'react-router-dom';
import Hmenu from './Hmenu';

const Row = styled.div`
    width: 100%;
    height: auto;
    position: fixed;
    z-index: 1000000;
`;

const Bar = styled.div`
    width: 100%;
    height: 9vh;
    background-color: #3C5174;
    position: absolute;
    z-index: 10;
    display: flex;
    align-items: center;

    @media (max-width: 940px) {
        display: none;
    }
}
`;

const Navbar = () => {

    // Obtener la funcion del context de tarea
    const layoutsContext = useContext(layoutContext);
    const { open, mostrarMenu } = layoutsContext;

    /*====================
        BARRA DEL MENU
    ====================*/

    const [ scrollY, setScrollY ] = useState(0);

    function logit() {
        setScrollY(window.pageYOffset)
    }

    useEffect( () => {

        const bar = document.querySelector('.bar-js');

        const watchScroll = () => {
            window.addEventListener(
                'scroll',
                logit
            );
        }
        watchScroll();

        bar.style.left = `${scrollY / 4.5 - 0}%`;

        return () => {
            window.removeEventListener(
                'scroll',
                logit
            );
        }
    })

    useEffect( () => {
        if ( open ) {
            let cuerpo = document.querySelector('body');
            cuerpo.style.overflow = "initial";
            mostrarMenu();
        }
        // eslint-disable-next-line
    }, [])

    /*======================
        MENU HAMBURGUESA
    ======================*/

    const activarMenu = () => {

        let menuBtn = document.querySelector('.h-menu');
        let body = document.querySelector('body');

        if ( !open ) {

            menuBtn.classList.add('open');
            body.style.overflow = "hidden";
            
        } else {

            menuBtn.classList.remove('open');
            body.style.overflow = "initial";

        }

        mostrarMenu();
        
    }

    return (
        <Fragment>
            <Row>
                <Bar className="bar-js">
                    <div className={styles.logo_container}>
                        <p>REDIFF</p>
                    </div>
                    <div className={styles.list_container}>
                        <Link to={'/'} className={styles.enlace}>
                            Inicio
                            <div className={styles.line}></div>
                        </Link>
                        <Link to={'/sobre-nosotros'} className={styles.enlace}>
                            Nosotros
                            <div className={styles.line}></div>
                        </Link>
                        <Link to={'/catalogo'} className={styles.enlace}>
                            Catalogo
                            <div className={styles.line}></div>
                        </Link>
                        <Link to={'/contacto'} className={styles.enlace}>
                            Contacto
                            <div className={styles.line}></div>
                        </Link>
                        <Link to={'/login'} className={styles.enlace}>
                            Inicia Sesion
                            <div className={styles.line}></div>
                        </Link>
                    </div>
                </Bar>
                <div onClick={activarMenu} className="h-menu">
                    <div className="menu-line"></div>
                </div>
            </Row>
            <Hmenu/>
        </Fragment>
    );
}

export default Navbar;