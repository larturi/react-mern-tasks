
import React, { useContext, useEffect } from 'react';

import AuthContext from '../../context/autenticacion/authContext';

export const Navbar = () => {

    // Extraigo informacion del usuario
    const authContext = useContext(AuthContext);
    const { user, usuarioAutenticado, cerrarSesion } = authContext;

    useEffect(() => {
        usuarioAutenticado();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <header className="app-header">
            {
                user ? <p className="nombre-usuario">Hola <span>{ user.nombre }</span></p> : null
            }

            <nav className="nav-principal">
                <button
                    className="btn btn-blank cerrar-sesion"
                    onClick={ () => cerrarSesion() }
                >
                    Cerrar Sesión
                </button>
            </nav>
        </header>
    )
}
