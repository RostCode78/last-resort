import {
    ABRIR_MENU
} from './../../types/index';

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