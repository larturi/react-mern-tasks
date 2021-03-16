import React, {useReducer} from 'react';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { 
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS
 } from '../../types';


const ProyectoState = props => {

    const proyectos = [
        { id: 1, nombre: 'WitWorks' },
        { id: 2, nombre: 'MyBudget' },
        { id: 3, nombre: 'Portfolio' },
        { id: 4, nombre: 'Seguridad' },
        { id: 5, nombre: 'Sociales' },
    ];

    const initialState = {
        proyectos: [],
        formulario: false
    };

    const  [ state, dispatch ] = useReducer(proyectoReducer, initialState);

    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        });
    };

    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    };

    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                mostrarFormulario,
                obtenerProyectos
            }}
        >
            { props.children }
        </proyectoContext.Provider>
    )
};

export default ProyectoState;