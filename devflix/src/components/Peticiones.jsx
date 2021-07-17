import { useEffect, useState } from "react";
import axios from 'axios';


const Peticiones = () => {
    const [shows, setShows] = useState({});
    const showsApi = `http://api.tvmaze.com/search/shows?q=$malcom`;
    
    const getShows = async () => {
        try {
            const response = await axios.get(showsApi)
            setShows(response.data)
            console.log(response.data)
        }
        catch (error) {
            alert('Ocurrio un error de conexión :(')
        }
    }

    useEffect(() => {
        getShows()  
    });

    return (
        <div>
            Haciendo peticiones de los shows
        </div>        
    );    
}


export default Peticiones;