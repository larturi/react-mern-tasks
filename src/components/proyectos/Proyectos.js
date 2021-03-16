
import React from 'react';
import { Navbar } from '../layout/Navbar';
import { Sidebar } from '../layout/Sidebar';
import { FormTarea } from '../tareas/FormTarea';
import { ListadoTareas } from '../tareas/ListadoTareas';

export const Proyectos = () => {
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
