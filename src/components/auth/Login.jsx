import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext';

export const Login = ( props ) => {

    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    const authContext = useContext(AuthContext);
    const { msg, isAuthenticated, iniciarSesion } = authContext;

    useEffect(() => {

        if (isAuthenticated) {
            props.history.push('/proyectos');
        }

        if (msg) {
            mostrarAlerta(msg.msg, msg.categoria);
        }
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [msg, isAuthenticated, props.history]);

    const [ usuario, setUsuario ] = useState({
        email: '',
        password: ''
    });

    const { email, password } = usuario;

    const handleOnChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (email.trim() === '' || password.trim() === '') {
            mostrarAlerta('Debe ingresar usuario y password', 'alerta-error')
        }

        iniciarSesion({ email, password });
    };

    return (
        <div className="form-usuario">

            {
                alerta ? ( <div className={`alerta ${ alerta.categoria }`}>{ alerta.msg }</div> ) : null
            }

            <div className="contenedor-form sombra-dark">
                <h1 data-cy="titulo">Iniciar Sesión</h1>

                <form
                    onSubmit={handleOnSubmit}
                    data-cy="form-login"
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu email"
                            value={email}
                            onChange={handleOnChange}
                            data-cy="email"
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu password"
                            value={password}
                            onChange={handleOnChange}
                            data-cy="password"
                        />
                    </div>

                    <div className="campo-form">
                        <input 
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Iniciar Sesión"
                            data-cy="submit"
                        />
                    </div>
                </form>

                <Link to={'/nueva-cuenta'} className="enlace-cuenta" data-cy="nueva-cuenta">
                    Obtener Cuenta
                </Link>
            </div>
        </div>
    )
}
