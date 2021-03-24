
import { 
    REGISTRO_OK,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_OK,
    LOGIN_ERROR,
    CERRAR_SESION
 } from '../../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {

    switch (action.type) {

        case REGISTRO_OK:
        case LOGIN_OK:    
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                msg: null
            }

        case LOGIN_ERROR:
        case REGISTRO_ERROR:
        case CERRAR_SESION:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: null,
                loading: false,
                msg: action.payload
            }

        case OBTENER_USUARIO:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload
            }

        default:
            return state;
    }

} 