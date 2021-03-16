import React from 'react';
import { Tarea } from './Tarea';

export const ListadoTareas = () => {

    const tareasProyecto = [
        { nombre: 'Tarea 1', estado: true},
        { nombre: 'Tarea 2', estado: false},
        { nombre: 'Tarea 3', estado: true},
        { nombre: 'Tarea 4', estado: true},
    ];

    return (
        <>
            <h2>Proyecto 2</h2>

            <ul className="listado-tareas">
                {
                    (tareasProyecto.length === 0) 
                    ? ( <li className="tarea"><p>No hay tareas</p></li> )
                    : tareasProyecto.map(tarea => (
                        <Tarea
                            tarea={tarea}
                        />
                    ))
                }

                <button
                    type="button"
                    className="btn btn-primario"
                >
                    Eliminar Proyecto
                </button>

            </ul>

           
        </>
    )
}
