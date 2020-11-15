
//Antes no tenian estado y se usaba: Staless Funcitional Components usando clases
//Ahora Functional Components - Futuro Hooks- todo funciones
import React from 'react'
import PropTypes from 'prop-types';

//<> //Fragmet sin necesidad de importar
const PrimeraApp = ({saludo}) => {

    
    const objeto = {
        nombre: "Jonatan",
        edad: 30
    }
    return (
        <> 
        <h1>{saludo} {JSON.stringify(objeto)}</h1>
        <p>Mi primera aplicación</p>
        </>
    )
};

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}
PrimeraApp.defaultProps = {
    saludo: 'Soy un valor por defecto'
}

export default PrimeraApp;