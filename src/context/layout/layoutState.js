import { useReducer } from 'react';
import LayoutContext from './layoutContext';
import LayoutReducer from './layoutReducer';

import {
    ABRIR_MENU
} from './../../types/index';

const LayoutState = props => {

    const initialState = {
        open: false
    }

    const [ state, dispatch ] = useReducer( LayoutReducer, initialState );

    // Funciones
    const mostrarMenu = () => {
        dispatch({
            type: ABRIR_MENU
        })
    }

    return (
        <LayoutContext.Provider
            value={{
                open: state.open,
                mostrarMenu
            }}
        >
            {props.children}
        </LayoutContext.Provider>
    )

}

export default LayoutState;