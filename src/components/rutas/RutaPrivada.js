import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

import AuthContext from '../../context/autenticacion/authContext';

export const RutaPrivada = ({ component: Component, ...props }) => {

    const authContext = useContext(AuthContext);
    const { isAuthenticated, loading, usuarioAutenticado } = authContext;

    useEffect(() => {
        usuarioAutenticado();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Route
            {...props}
            render = { props=> !isAuthenticated && !loading ? (
                <Redirect to="/" />
            ) : (
                <Component {...props} />
            )}
        />
            
    );

}
