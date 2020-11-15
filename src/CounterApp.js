import React,{useState} from 'react'
import PropTypes from 'prop-types';


//<> //Fragmet sin necesidad de importar
const CounterApp = ({value}) => {
    const [nombre, setNombre] = useState('Jony');

    const [counter, setCounter] = useState(value);
    

    // handleAdd
    const handleAdd = (e) => {
        setCounter(counter+1);
        //setCounter( (c) => c+1);

    }
    const handleMenos = (e) => {
        setCounter(counter-1);
    }
    const handleReset = (e) => {
        setCounter(0);
    }



    return (
        <> 
        <h1>CounterApp</h1>
        <h2>{value}</h2>
        <h2>{counter}</h2>

        <button onClick={handleAdd}>+1</button>
        <button onClick={handleMenos}>-1</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={ () => handleAdd}>boton2</button>
        </>
    )
};

CounterApp.propTypes = {
    value: PropTypes.number
}
CounterApp.defaultProps = {
    value: 0
}

export default CounterApp;