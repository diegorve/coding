import React from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';


const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand mb-0 h1" href="#">LOS TACOS DEL GORDO</a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link active" to="/tacos">Tacos</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}


export default NavBar;