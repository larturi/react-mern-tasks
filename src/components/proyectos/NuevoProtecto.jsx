import React, { useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

export const NuevoProtecto = () => {

    const proyectosContext = useContext(proyectoContext);
    const { formulario, formularioHasError, mostrarFormulario, agregarProyecto, mostrarError } = proyectosContext;

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

        if(nombre === '') {
            mostrarError();
            return;
        };

        agregarProyecto(proyecto);

        setProyecto({
            nombre: ''
        });
    }

    const handleOnClick = () => {
        mostrarFormulario();
    }

    return (
        <>
            <button
                type="button"
                data-cy="boton-nuevo-proyecto"
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
                            data-cy="input-nuevo-proyecto"
                            className="input-text"
                            placeholder="Nombre del Proyecto"
                            name="nombre"
                            value={nombre}
                            onChange={handleOnChange}
                        />

                        <input 
                            type="submit"
                            data-cy="submit-nuevo-proyecto"
                            className="btn btn-primario btn-block"
                            value="Agregar Proyecto"
                        />

                    </form>
                ) : null }

                { formularioHasError ? <p data-cy="alerta" className="mensaje error">El nombre del proyecto es obligatorio</p> : null }
        </>
    )
}
