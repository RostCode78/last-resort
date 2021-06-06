import { Fragment } from 'react';

const Hmenu = ({ open }) => {
    return (
        <Fragment>
            { open 
            ?
                <p>HOLA DESDE EL MENU HAMBURGUESA</p>
            : null }
        </Fragment>
    );
}

export default Hmenu;