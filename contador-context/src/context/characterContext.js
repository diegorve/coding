import React, { useState, useEffect, useContext, createContext } from 'react';
import axios from 'axios';


const CharacterContext = React.createContext();

const CharacterProvider = (props) => {
    const [lista, setLista] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState({});

    const characterApi = 'http://rickandmortyapi.com/api/character';

    const getCharacter = async () => {
        try {
            const response = await axios.get(characterApi);
            setLista(response.data.results);
        }
        catch (error) {
            alert('Ups no lo conseguimos :(');
        }
    }

    useEffect(() => {
        getCharacter()
    }, []);

    console.log(response);

    const value = {
        lista,
        selectedCharacter,
        setSelectedCharacter,
    }

    return <CharacterContext.Provider value={value} {...props} />
}

const useCharacterContext = () => {
    const context = React.useContext(CharacterContext);
    return context;
}


export {
    CharacterProvider,
    useCharacterContext
}