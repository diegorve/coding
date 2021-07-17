import React, { useState } from 'react';


const CounterContext = React.createContext();

const CounterProvider = (props) => {
    const [counter, setCounter] = useState(0);

    const value = {
        counter,
        setCounter,
    }

    return <CounterContext.Provider value={value} {...props} />
}

const useCounterContext = () => {
    const context = React.useContext(CounterContext);
    return context;
}


export {
    CounterProvider,
    useCounterContext,
}
