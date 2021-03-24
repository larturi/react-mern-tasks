
import React, { useContext, useEffect } from 'react';

import AuthContext from '../../context/autenticacion/authContext';

import { Navbar } from '../layout/Navbar';
import { Sidebar } from '../layout/Sidebar';
import { FormTarea } from '../tareas/FormTarea';
import { ListadoTareas } from '../tareas/ListadoTareas';

export const Proyectos = () => {

    // Extraigo informacion del usuario
    const authContext = useContext(AuthContext);
    const { usuarioAutenticado } = authContext;

    useEffect(() => {
        usuarioAutenticado();
    }, []);

    return (
        <div className="contenedor-app">
            <Sidebar/>

            <div className="seccion-principal">
                <Navbar/>

                <main>
                    <FormTarea/>
                    <div className="contenedor-tareas">
                        <ListadoTareas />
                    </div>
                </main>
            </div>
        </div>
    )
}
