import React, { useContext } from 'react';

import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContex';

export const Tarea = ({ tarea }) => {

    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    const tareasContext = useContext(tareaContext);
    const { eliminarTarea, obtenerTareas, cambiarEstadoTarea, setTareaActual } = tareasContext;

    const handleEliminarTarea = (id) => {
        eliminarTarea(id);
        obtenerTareas(proyecto[0].id);
    };

    const handleCambiarEstado = (tarea) => {
        if (tarea.estado) {
            tarea.estado = false;
        } else {
            tarea.estado = true;
        }

        cambiarEstadoTarea(tarea);
    };

    const seleccionarTarea = (tarea) => {
        setTareaActual(tarea);
    };

    return (
        <li className="tarea sombra">
            <p>{ tarea.nombre }</p>

            <div className="estado">
                {
                    tarea.estado ?
                    (<button 
                        type="button" 
                        className="completo"
                        onClick={() => handleCambiarEstado(tarea)}
                    >
                        Completo
                    </button>) :

                    (<button 
                        type="button" 
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
                    className="btn btn-primario"
                    onClick={ () => seleccionarTarea(tarea) }
                >
                    Editar
                </button>

                <button 
                    type="button" 
                    className="btn btn-secundario"
                    onClick={ () => handleEliminarTarea(tarea.id) }
                >
                    Eliminar
                </button>
            </div>
        </li>
    )
}
