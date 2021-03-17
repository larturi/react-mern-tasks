import React, {useReducer} from 'react';

import TareaContext from './tareaContex';
import TareaReducer from './tareaReducer';

import { 
    TAREAS_PROYECTO,
    AGREGAR_TAREA
} from '../../types';

const TareaState = props => {

    const initialState = {
        tareas: [
            { nombre: 'Tarea 11', estado: true, proyectoId: 1},
            { nombre: 'Tarea 12', estado: false, proyectoId: 1},
            { nombre: 'Tarea 21', estado: true, proyectoId: 2},
            { nombre: 'Tarea 22', estado: false, proyectoId: 2},
            { nombre: 'Tarea 31', estado: true, proyectoId: 3},
            { nombre: 'Tarea 32', estado: true, proyectoId: 3},
            { nombre: 'Tarea 33', estado: false, proyectoId: 3},
            { nombre: 'Tarea 41', estado: true, proyectoId: 4},
            { nombre: 'Tarea 43', estado: false, proyectoId: 4},
        ],
        tareasProyecto: null
    };

    const  [ state, dispatch ] = useReducer(TareaReducer, initialState);

    const obtenerTareas = (proyectoId) => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        });
    };

    const agregarTarea = (tarea) => {
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        });
    };

    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasProyecto: state.tareasProyecto,
                obtenerTareas,
                agregarTarea
            }}
        >
            { props.children }
        </TareaContext.Provider>
    )
};

export default TareaState;