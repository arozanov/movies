import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {routes} from './routes';

export const InternalRouter = () => {
    const renderRoutes = (routes) => {
        return routes.map((route, index) => {
            const {element, path} = route
            return <Route key={index} path={path} element={element}/>
        });
    };
    return (
        <Routes>{renderRoutes(routes)}</Routes>
    );
};
