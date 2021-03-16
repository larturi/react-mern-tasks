import React, { useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

export const NuevoProtecto = () => {

    const proyectosContext = useContext(proyectoContext);
    const { formulario, mostrarFormulario } = proyectosContext;

    const [ proyecto, setProyecto ] = useState({
        nombre: ''
    });

    const { nombre } = proyecto;

    const handleOnChange = (e) => {
        setProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleOnClick = () => {
        mostrarFormulario();
    }

    return (
        <>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={ handleOnClick }
            >
                Nuevo Proyecto
            </button>

            {
                formulario ?
                (
                    <form
                        className="formulario-nuevo-proyecto"
                        onSubmit={handleSubmit}
                    >
                        <input 
                            type="text" 
                            className="input-text"
                            placeholder="Nombre del Proyecto"
                            name="nombre"
                            value={nombre}
                            onChange={handleOnChange}
                        />

                        <input 
                            type="submit" 
                            className="btn btn-primario btn-block"
                            value="Agregar Proyecto"
                        />

                    </form>
                ) : null
            }
        </>
    )
}
