import React from 'react';
import PropTypes from 'prop-types';


const Tacos = ({taco, author}) => {
    
    const { base_layer, mixin, condiment, seasoning, shell } = taco

    return (
        <>
            <h1>{mixin.name}</h1>
            <p>{`Author: ${author}`}</p>
            <p>{`Base: ${base_layer.name}`}</p>
            <p>{`Condiment: ${condiment.name}`}</p>
            <p>{`Seasoning: ${seasoning.name}`}</p>
            <p>{`Shell: ${shell.name}`}</p>
        </>
    );
}

Tacos.defaultProps = {
    author: 'Desconocido'
};

Tacos.propTypes = {
    taco: PropTypes.object.isRequired
};


export default Tacos;