import React, {useReducer} from 'react';

import TareaContext from './tareaContex';
import TareaReducer from './tareaReducer';

import { 
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
} from '../../types';
import clienteAxios from '../../config/axios';

const TareaState = props => {

    const initialState = {
        tareasProyecto: [],
        tareaHasError: false,
        tareaSeleccionada: null
    };

    const  [ state, dispatch ] = useReducer(TareaReducer, initialState);

    const obtenerTareas = async (proyecto) => {
        try {
            const resultado = await clienteAxios.get('/api/tareas', { params: {proyecto} });
            dispatch({
                type: TAREAS_PROYECTO,
                payload: resultado.data
            });
        } catch (error) {
            console.error(error);
        }
    };

    const agregarTarea = async (tarea) => {
        try {
            const resultado = await clienteAxios.post('/api/tareas', tarea);
            dispatch({
                type: AGREGAR_TAREA,
                payload: tarea
            });
        } catch (error) {
            console.error(error);
        }
    };

    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        });
    };

    const eliminarTarea = async (tareaId, proyecto) => {

        await clienteAxios.delete(`/api/tareas/${tareaId}`, { params: {proyecto} });
        try {
            dispatch({
                type: ELIMINAR_TAREA,
                payload: tareaId
            });
        } catch (error) {
            console.error(error);
        }
    };

    const cambiarEstadoTarea = (tarea) => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        });
    };

    const setTareaActual = (tarea) => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        });
    };

    const actualizarTarea = (tarea) => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        });
    };

    const limpiarTarea = () => {
        dispatch({
            type: LIMPIAR_TAREA,
        });
    };

    return (
        <TareaContext.Provider
            value={{
                tareasProyecto: state.tareasProyecto,
                tareaHasError: state.tareaHasError,
                tareaSeleccionada: state.tareaSeleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea,
                setTareaActual,
                actualizarTarea,
                limpiarTarea
            }}
        >
            { props.children }
        </TareaContext.Provider>
    )
};

export default TareaState;