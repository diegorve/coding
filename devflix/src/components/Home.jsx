import { useEffect, useState } from 'react';
import ResultList from './ResultList';
import { searchShow } from '../utils/API';
import useDebounce from '../hooks/useDebounce'


const Home = () => {
    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);
    
    const searchTerm = useDebounce(search, 500);

    const makeSearch = (s) => {
        searchShow(s).then((response) => {
            setResults(response.data)
        }).catch(() => {
            setResults([])
        })
    }

    useEffect(() => {
        if (searchTerm) {
            console.log("Valor final -->", searchTerm)
            makeSearch(searchTerm)
        }
    }, [searchTerm])
    
    return (
        <div className="main">
            <h1>DEVFlix</h1>
            <div className="search-box">
                <input 
                type="text" 
                name="search"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                />
                {/* <button type="button" onClick={makeSearch}>Buscar</button> */}
            </div>
            <ResultList results={results} />
        </div>
    );
}


export default Home;