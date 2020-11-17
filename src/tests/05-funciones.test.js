
import '@testing-library/jest-dom';
import { getUsuarioActivo } from '../base/05-funciones';

describe('Pruebas 05-funciones', () => {
          
    test('getUser debe de retornar un objeto', () => {
        
        const nombre = 'Jonatan';
        // 1- Inicializacion
        const userTest = {
            uid: 'ABC567',
            username: 'Jonatan'
        }
       

        // 2- Estimulo
        const user = getUsuarioActivo(nombre);

        // 3- Observar comportamiento:
        expect(user).toEqual(userTest);
        //IMPORTANTE toEqual y no toBe para objetos
    })

    test('getUser debe de retornar un objeto', () => {
        
        const nombre = "Juan";
        
        // 2- Estimulo
        const user = getUsuarioActivo(nombre);

        // 3- Observar comportamiento:
        expect(user).toEqual({
            uid: 'ABC567',
            username: nombre
        });
        //IMPORTANTE toEqual y no toBe para objetos
    })

})