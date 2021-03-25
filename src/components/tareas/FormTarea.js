import React, { useContext, useState, useEffect }  from 'react';

import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContex';

export const FormTarea = () => {

    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    const tareasContext = useContext(tareaContext);

    const { 
        tareaHasError, 
        tareaSeleccionada, 
        agregarTarea, 
        validarTarea, 
        obtenerTareas, 
        actualizarTarea,
        limpiarTarea
    } = tareasContext;

    const [ tarea, setTarea ] = useState({
        nombre: ''
    });

    useEffect(() => {
        if (tareaSeleccionada !== null) {
            setTarea(tareaSeleccionada)
        } else {
            setTarea({
                nombre: ''
            })
        }

    }, [tareaSeleccionada]);

    const { nombre } = tarea

    if(!proyecto) return null;

    const [ proyectoActual ] = proyecto;

    const handleOnSubmit = (e) => {
        e.preventDefault();

        // Validcion
        if (nombre.trim() === '') {
            validarTarea();
            return;
        }

        // Nueva Tarea o Edicion?
        if (tareaSeleccionada === null) {
            tarea.proyecto = proyectoActual._id;
            agregarTarea(tarea);
        } else {
            actualizarTarea(tarea);
            limpiarTarea();
        }

        

        obtenerTareas(proyectoActual.id);

        // Reinicia formulario
        setTarea({
            nombre: ''
        });

    };

    const handleOnChange = (e) => {
        setTarea({
            ...tarea,
            [e.target.name]: e.target.value
        })
    };

    return (
        <div className="formulario">

            <form
                onSubmit={handleOnSubmit}
            >
                <div className="contenedor-input">
                    <input 
                        type="text" 
                        className="input-text"
                        placeholder="Descripcion de la tarea..."
                        name="nombre"
                        value={nombre}
                        onChange={handleOnChange}
                    />
                </div>

                <div className="contenedor-input">
                    <input 
                        type="submit" 
                        className="btn btn-primario btn-block btn-submit"
                        value={ tareaSeleccionada ? "Editar Tarea" : "Agregar Tarea"}
                    />
                </div>
            </form>

            {
                tareaHasError ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> : null
            }

        </div>
    )
}
