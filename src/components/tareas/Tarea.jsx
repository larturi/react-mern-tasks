import React, { useContext } from 'react';

import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContex';

export const Tarea = ({ tarea }) => {

    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    const tareasContext = useContext(tareaContext);
    const { eliminarTarea, obtenerTareas, actualizarTarea, setTareaActual } = tareasContext;

    const [ proyectoActual ] = proyecto;

    const handleEliminarTarea = (id) => {
        eliminarTarea(id, proyectoActual._id);
        obtenerTareas(proyectoActual._id);
    };

    const handleCambiarEstado = (tarea) => {

        if (tarea.completa) {
            tarea.completa = false;
        } else {
            tarea.completa = true;
        }

        actualizarTarea(tarea);
    };

    const seleccionarTarea = (tarea) => {
        setTareaActual(tarea);
    };

    return (
        <li data-cy="tarea" className="tarea sombra" key={tarea.id}>
            <p>{ tarea.nombre }</p>

            <div className="estado">
                {
                    tarea.completa ?
                    (<button 
                        type="button"
                        data-cy="tarea-completa"
                        className="completo"
                        onClick={() => handleCambiarEstado(tarea)}
                    >
                        Completo
                    </button>) :

                    (<button 
                        type="button"
                        data-cy="tarea-incompleta"
                        className="incompleto"
                        onClick={() => handleCambiarEstado(tarea)}
                    >
                        Pendiente
                    </button>) 
                }
            </div>

            <div className="acciones">
                <button 
                    type="button"
                    data-cy="btn-editar"
                    className="btn btn-primario"
                    onClick={ () => seleccionarTarea(tarea) }
                >
                    Editar
                </button>

                <button 
                    type="button"
                    data-cy="btn-eliminar"
                    className="btn btn-secundario"
                    onClick={ () => handleEliminarTarea(tarea._id) }
                >
                    Eliminar
                </button>
            </div>
        </li>
    )
}
