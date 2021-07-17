import React from 'react';
import useCharacterContext from '../context/characterContext';


const ListCharacter = () => {
    const { lista } = useCharacterContext();
    return (
        <>
            <h1>Characters</h1>
            {lista.length > 0 && lista.map((character) => {
                return <h5 key={character.name}>{character.name}</h5>
            })}
        </>
        
    );
}


export default ListCharacter;