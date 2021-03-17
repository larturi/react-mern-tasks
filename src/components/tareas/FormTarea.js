import React, { useContext }  from 'react';

import proyectoContext from '../../context/proyectos/proyectoContext';

export const FormTarea = () => {

    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    if(!proyecto) return null;

    const [ proyectoActual ] = proyecto;

    const handleOnSubmit = (e) => {
        e.preventDefault();
        
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
                        value=""
                    />
                </div>

                <div className="contenedor-input">
                    <input 
                        type="submit" 
                        className="btn btn-primario btn-block btn-submit"
                        value="Agregar Tarea"
                    />
                </div>
            </form>
        </div>
    )
}
