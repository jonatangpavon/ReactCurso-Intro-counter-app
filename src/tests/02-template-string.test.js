
import '@testing-library/jest-dom';

const { getSaludo } = require("../base/02-template-string");

describe('Pruebas 02-template-string', () => {
          
    test('getSaludo debe de retornar hola Jonatan ', () => {
        
        // 1- Inicializacion
        const nombre = 'Jonatan';

        // 2- Estimulo
        const saludo = getSaludo(nombre);

        // 3- Observar comportamiento:
        expect(saludo).toBe('Hola '+nombre);
        
    })

    test('getSaludo debe de retornar hola Carlos cuando no tiene argumenos ', () => {
        
       

        // 2- Estimulo
        const saludo = getSaludo();

        // 3- Observar comportamiento:
        expect(saludo).toBe('Hola Carlos');
        
    })

})