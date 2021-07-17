import '../App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home';
import ListaCanciones from './ListaCanciones';
import DetalleCancion from './DetalleCancion';
import Contador from './Contador';
import Character from './ListCharacter';
import { SongProvider } from './SongContext';
import CounterContext, { CounterProvider } from '../context/counterContext';
import { CharacterProvider } from '../context/characterContext';


function App() {
  return (
    <div className="App">
      <CounterProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/canciones">  
              <SongProvider>
                <div className="izquierdo">
                  <ListaCanciones />
                </div>
                <div className="derecho">
                  <DetalleCancion  />
                </div>
              </SongProvider>
            </Route>
            <Route exact path="/contador">
              <Contador />
            </Route>
            <Route exact path="/character">
              <CharacterProvider>
                <Character />
              </CharacterProvider>
            </Route>
          </Switch>
        </Router>
      </CounterProvider>
    </div>
  );
}

export default App;
