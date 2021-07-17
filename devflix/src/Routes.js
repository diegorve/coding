import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Peticiones from './components/Peticiones';


const Routes = () => {

    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/peticiones">
                <Peticiones />
            </Route>
        </>
    );
}


export default Routes;