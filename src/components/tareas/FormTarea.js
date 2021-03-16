import React from 'react';

export const FormTarea = () => {
    return (
        <div className="formulario">
            <form>
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
