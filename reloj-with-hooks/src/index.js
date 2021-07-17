import reactDom from 'react-dom';
import Character from './Components/Character';

const App = () => {
    return (
        <Character />
    )
}


reactDom.render(
    <App />,
    document.getElementById('root')
);