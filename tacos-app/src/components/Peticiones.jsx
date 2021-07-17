import { useEffect, useState } from 'react';
import axios from 'axios'; // esta libreria permite hacer peticiones como fetch, axios ya tiene listas las promesas y por eso uso async await
import Tacos from './Tacos'


const Peticiones = () => {
    const [taco, setTaco] = useState({})
    const tacosApi = 'http://taco-randomizer.herokuapp.com/random/'

    const getTaco = async () => {
        try {
            const response = await axios.get(tacosApi)
            setTaco(response.data)
            console.log(response.data)
        }
        catch (error) {
            alert('Ocurrió un error al pedir el taco :(')
        }
    }

    useEffect(() => {
        setTimeout(getTaco, 1500)
    }, [])

    return (
        <>
        { taco.condiment ?
            <Tacos taco={taco}/>
            : <spam>Estamos eligiendo un taco para ti</spam>
        }
        </>
    )
}


export default Peticiones;