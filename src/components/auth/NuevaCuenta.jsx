import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext';
import Alerta from '../layout/Alerta';

export const NuevaCuenta = ( props ) => {

    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    const authContext = useContext(AuthContext);
    const { msg, isAuthenticated, registrarUsuario } = authContext;

    // En caso que se haya autenticado o registrado
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
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    });

    const { nombre, email, password, confirmar } = usuario;

    const handleOnChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if ( nombre.trim() === '' || 
             email.trim() === '' || 
             password.trim() === '' || 
             confirmar.trim() === '') {
                mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
                return;
        }

        if (password.length < 6) {
            mostrarAlerta('El password debe ser de al menos 6 caracteres', 'alerta-error');
            return;
        }

        if (password !== confirmar) {
            mostrarAlerta('Los password deben ser iguales', 'alerta-error');
            return;
        }

        // Si esta todo ok:
        registrarUsuario({
            nombre,
            email,
            password
        });

    };

    return (
        <div className="form-usuario">
            <Alerta alerta={alerta} />
            
            <div className="contenedor-form sombra-dark">
                <h1 data-cy="titulo">Obtener una Cuenta</h1>

                <form
                    onSubmit={handleOnSubmit}
                    data-cy="nueva-cuenta"
                >

                    <div className="campo-form">
                        <label htmlFor="email">Nombre</label>
                        <input 
                            type="text"
                            data-cy="nombre"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu nombre"
                            value={nombre}
                            onChange={handleOnChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            data-cy="email"
                            id="email"
                            name="email"
                            placeholder="Tu email"
                            value={email}
                            onChange={handleOnChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            data-cy="password"
                            id="password"
                            name="password"
                            placeholder="Tu password"
                            value={password}
                            onChange={handleOnChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar Password</label>
                        <input 
                            type="password"
                            data-cy="confirmar"
                            id="confirmar"
                            name="confirmar"
                            placeholder="Confirmar password"
                            value={confirmar}
                            onChange={handleOnChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input 
                            type="submit"
                            data-cy="submit-nueva-cuenta"
                            className="btn btn-primario btn-block"
                            value="Registrarme"
                        />
                    </div>
                </form>

                <Link to={'/'} className="enlace-cuenta" data-cy="iniciar-sesion">
                    Iniciar Sesión 
                </Link>
            </div>
        </div>
    )
}