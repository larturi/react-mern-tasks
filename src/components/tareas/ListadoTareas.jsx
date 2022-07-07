import React, { useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContex';

import { Tarea } from './Tarea';

export const ListadoTareas = () => {

    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    const tareasContext = useContext(tareaContext);
    const { tareasProyecto } = tareasContext;

    if(!proyecto) return <h2 data-cy="seleccionaProyecto">Selecciona un proyecto</h2>;

    const [ proyectoActual ] = proyecto;

    const handleOnClickDelete = () => {
        eliminarProyecto(proyectoActual._id);
    };

    return (
        <>
            <h2>Proyecto {proyectoActual.nombre}</h2>

            <ul className="listado-tareas">
                {
                    (tareasProyecto?.length === 0) 
                    ? ( <li className="tarea"><p>No hay tareas</p></li> )
                    : 
                    <TransitionGroup>
                        {
                            tareasProyecto.map(tarea => (
                                <CSSTransition
                                 key={tarea.id}
                                 timeout={200}
                                 classNames="tarea"
                                >
                                    <Tarea
                                        tarea={tarea}
                                    />
                                </CSSTransition>
                            ))
                        }
                    </TransitionGroup>
                }

                <button
                    type="button"
                    className="btn btn-primario"
                    onClick={ handleOnClickDelete }
                >
                    Eliminar Proyecto
                </button>

            </ul>

           
        </>
    )
}
