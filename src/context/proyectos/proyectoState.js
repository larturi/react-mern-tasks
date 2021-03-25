import React, {useReducer} from 'react';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';

import clienteAxios from '../../config/axios';

import { 
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ERROR,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO
 } from '../../types';


const ProyectoState = props => {

    const initialState = {
        proyectos: [],
        formulario: false,
        formularioHasError: false,
        proyecto: null,
        msg: null
    };

    const  [ state, dispatch ] = useReducer(proyectoReducer, initialState);

    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        });
    };

    const obtenerProyectos = async () => {
      try {
          const resultado = await clienteAxios.get('/api/proyectos');
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: resultado.data
        });
      } catch (error) {

        const alerta = {
            msg: 'Hubo un error',
            categoria: 'alerta-error'
        };
        
        dispatch({
            type: PROYECTO_ERROR,
            payload: alerta
        });
    }
    };

    const agregarProyecto = async (proyecto) => {

        try {
            const resultado = await clienteAxios.post('/api/proyectos', proyecto);
            dispatch({
                type: AGREGAR_PROYECTO,
                payload: resultado.data
            });
        } catch (error) {

            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            };
            
            dispatch({
                type: PROYECTO_ERROR,
                payload: alerta
            });
        }
    };

    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        });
    };

    const proyectoActual = (proyectoId) => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        });
    };

    const eliminarProyecto = async (proyectoId) => {
        try {
            await clienteAxios.delete(`/api/proyectos/${proyectoId}`);
            dispatch({
                type: ELIMINAR_PROYECTO,
                payload: proyectoId
            });
        } catch (error) {

            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            };
            
            dispatch({
                type: PROYECTO_ERROR,
                payload: alerta
            });
        }
    };

    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                formularioHasError: state.formularioHasError,
                proyecto: state.proyecto,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                proyectoActual,
                eliminarProyecto,
                msg: state.msg
            }}
        >
            { props.children }
        </proyectoContext.Provider>
    )
};

export default ProyectoState;