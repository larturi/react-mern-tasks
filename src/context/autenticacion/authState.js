import React, { useReducer } from 'react';

import AuthContext from './authContext';
import AuthReducer from './authReducer';

import clienteAxios from '../../config/axios';
import tokenAuth from '../../config/tokenAuth';


import { 
    REGISTRO_OK,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_OK,
    LOGIN_ERROR,
    CERRAR_SESION
 } from '../../types';

const AuthState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        user: null,
        msg: null
    }

    const [ state, dispatch ] = useReducer(AuthReducer, initialState);

    const registrarUsuario = async datos => {
        try {
            const respuesta = await clienteAxios.post('/api/usuarios', datos);
            console.log(respuesta);

            dispatch({
                type: REGISTRO_OK,
                payload: respuesta.data
            });
            
            usuarioAutenticado();

        } catch (error) {
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            };
            dispatch({
                type: REGISTRO_ERROR,
                payload: alerta
            });
        }
    };

    // Retorna el usuario autenticado
    const usuarioAutenticado = async () => {
        const token = localStorage.getItem('token');

        if (token) {
            // Paso el token al backend para validar la sesion
            tokenAuth(token);
        }

        try {
            const respuesta = await clienteAxios.get('/api/auth');
            dispatch({
                type: OBTENER_USUARIO,
                payload: respuesta.data.usuario
            });
        } catch (error) {
           dispatch({
               type: LOGIN_ERROR
           });
        }
    };

    // Cuando el usuario inicia sesion
    const iniciarSesion = async (datos) => {
        try {
            const respuesta = await clienteAxios.post('/api/auth', datos);
            dispatch({
                type: LOGIN_OK,
                payload: respuesta.data
            });

            usuarioAutenticado();
            
        } catch (error) {
            console.log(error.response.data.msg);
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            };
            dispatch({
                type: LOGIN_ERROR,
                payload: alerta
            });
        }
    };

    // Cierra sesion del usuario
    const cerrarSesion = () => {
        dispatch({
            type: CERRAR_SESION
        });
    };

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                loading: state.loading,
                user: state.user,
                msg: state.msg,
                registrarUsuario,
                iniciarSesion,
                usuarioAutenticado,
                cerrarSesion
            }}
        >
            { props.children }
        </AuthContext.Provider>
    );

};

export default AuthState;