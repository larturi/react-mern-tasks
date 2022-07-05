import React from 'react';
import { ListadoProyectos } from '../proyectos/ListadoProyectos';
import { NuevoProtecto } from '../proyectos/NuevoProtecto';

export const Sidebar = () => {
    return (
        <aside>
            <h1>MERN<span>Task</span></h1>

            <NuevoProtecto/>

            <div className="proyectos">
                <h2>Tus Proyectos</h2>

                <ListadoProyectos/>
            </div>
        </aside>
    )
}
