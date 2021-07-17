import { useState, useEffect } from 'react';
import reactDom from 'react-dom';

const Reloj = () => {
    const [pokemon, setPokemon] = useState('...loading');
    const [timer, setTimer] = useState(new Date().toLocaleTimeString());


    useEffect( () => {
        fetch('https://pokeapi.co/api/v2/pokemon/ditto')
            .then(response => response.json())
            .then(data => setPokemon(data.name))
    }, []);

    return(
        <div>
            <h2> Reloj </h2>
            <h3> {timer} </h3>
            <h3>
                Pokemon: {pokemon}
            </h3>
        </div>
    );
}

export default Reloj;