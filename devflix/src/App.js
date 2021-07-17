import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'
import Routes from './Routes';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="container">
      <Router>
      <NavBar />
      <Switch>
      <main>
        <Routes />
      </main>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
