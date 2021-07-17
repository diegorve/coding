import React from 'react';
import { useCounterContext } from '../context/counterContext';


const Contador = () => {
    /* 
    const counterContextGlobal = useCounterContext();
    const contador = counterContextGlobal.counter;
    console.log(counterContextGlobal);

    const setCounter = (value) => {
        return (
            counterContextGlobal.setCounter(value)
        );
    }
    
    return (
        <div>
            <h1>Contador</h1> {
                counterContextGlobal.Contador
            }
            <button onClick={() => setCounter(contador + 1)}>Sumar</button>
            <button onClick={() => setCounter(contador - 1)}>Restar</button>
        </div>
    );
    */
    
    // Codigo destructurado
    const { counter, setCounter} = useCounterContext();

    return (
        <>
            <h1>
                Contador
            </h1>
            <h2>
                {counter}
            </h2>
            <div>
                <button onClick={() => setCounter(counter + 1)}>Sumar</button>
                <button onClick={() => setCounter(counter - 1)}>Restar</button>
            </div>
        </>
    )

}


export default Contador;