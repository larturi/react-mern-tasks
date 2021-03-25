import React, { useContext, useEffect } from 'react';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import AlertaContext from '../../context/alertas/alertaContext';
import ProyectoContext from '../../context/proyectos/proyectoContext';

import { Proyecto } from './Proyecto';

export const ListadoProyectos = () => {

    const proyectosContext = useContext(ProyectoContext);
    const { msg, proyectos, obtenerProyectos } = proyectosContext;

    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    useEffect(() => {
        if (msg) {
            mostrarAlerta(msg.msg, msg.categoria)
        }

        obtenerProyectos();
        // eslint-disable-next-line
    }, [msg]);

    if (proyectos.length === 0) return <p>No hay proyectos, comienza creando uno nuevo</p>;

    return (

        <ul className="listado-proyectos">

            { alerta ? ( <div className={`alerta ${alerta.categoria}`}>{ alerta.msg }</div> ) : null }

            <TransitionGroup>
            {
                proyectos.map( proyecto => (
                    <CSSTransition
                      key={proyecto._id}
                      timeout={200}
                      classNames="proyecto"
                    >
                        <Proyecto
                            proyecto={proyecto}
                        />
                    </CSSTransition>
                ))
            }
            </TransitionGroup>
        </ul>

    )
}
