import React, {useReducer} from 'react';

import uuid from 'uuid';

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

const TareaState = props => {

    const initialState = {
        tareas: [
            { id: 1, nombre: 'Tarea 11', estado: true, proyectoId: 1},
            { id: 2, nombre: 'Tarea 12', estado: false, proyectoId: 1},
            { id: 3, nombre: 'Tarea 21', estado: true, proyectoId: 2},
            { id: 4, nombre: 'Tarea 22', estado: false, proyectoId: 2},
            { id: 5, nombre: 'Tarea 31', estado: true, proyectoId: 3},
            { id: 6, nombre: 'Tarea 32', estado: true, proyectoId: 3},
            { id: 7, nombre: 'Tarea 33', estado: false, proyectoId: 3},
            { id: 8, nombre: 'Tarea 41', estado: true, proyectoId: 4},
            { id: 9, nombre: 'Tarea 43', estado: false, proyectoId: 4},
        ],
        tareasProyecto: null,
        tareaHasError: false,
        tareaSeleccionada: null
    };

    const  [ state, dispatch ] = useReducer(TareaReducer, initialState);

    const obtenerTareas = (proyectoId) => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        });
    };

    const agregarTarea = (tarea) => {
        tarea.id = uuid.v4();
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        });
    };

    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        });
    };

    const eliminarTarea = (id) => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        });
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
                tareas: state.tareas,
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