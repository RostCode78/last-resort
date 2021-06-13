import {
    ABRIR_MENU
} from './../../types/index';

// eslint-disable-next-line
export default (state, action) => {
    switch(action.type) {

        case ABRIR_MENU:
            return {
                ...state,
                open: !state.open
            }
            
        default:
            return state;
    }
}