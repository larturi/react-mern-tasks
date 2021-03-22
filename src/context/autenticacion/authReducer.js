
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
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                isAuthenticated: true,
                msg: null
            }

        case REGISTRO_ERROR:
            return {
                ...state,
                token: null,
                msg: action.payload
            }

        default:
            return state;
    }

} 