import { Fragment, useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Row = styled.div`
    width: 100%;
    height: auto;
    position: fixed;
`;

const Bar = styled.div`
    width: 100%;
    height: 9vh;
    background-color: #3C5174;
    position: absolute;
    z-index: 10;
    display: flex;
    align-items: center;

    @media (max-width: 800px) {
        display: none;
    }
}
`;

const Hmenu = styled.div`
    width: 50px;
    height: 50px;
    background-color: #0C9AEC;
    position: absolute;
    top: 10px;
    right: 15px;
    z-index: 1;
    cursor: pointer;
`;

const Navbar = () => {

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
                        <Link to={'/login'} className={styles.enlace}>
                            Inicia Sesion
                            <div className={styles.line}></div>
                        </Link>
                    </div>
                </Bar>
                <Hmenu></Hmenu>
            </Row>
        </Fragment>
    );
}

export default Navbar;