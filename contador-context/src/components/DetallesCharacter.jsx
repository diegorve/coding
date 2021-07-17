import React from 'react';
import { useCharacterContext } from '../context/characterContext';

const DetallesCharacter = () => {
    const { selectedCharacter } = useCharacterContext();
    
    return (
        <>
            <h1>Aqui está tu personaje</h1>
            {
                selectedCharacter.name
                ?
                    (
                        <>
                            <h2>{selectedCharacter.name}</h2>
                        </>
                    )
                : <h2>Selecciona un personaje</h2>
            }
        </>
    );
}