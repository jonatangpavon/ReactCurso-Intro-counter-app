
import { getHeroeByIdAsync } from '../base/09-promesas';
import {heroes} from '../data/heroes';
import '@testing-library/jest-dom'

describe('Pruebas con promesas', () => {
          
    test('getHeroeByIdAsync debe de retornar un Héroe async', ( done) => {
        
        const id = 1;
        getHeroeByIdAsync(id)
        .then(
            heroe =>{
                expect(heroe).toBe(heroes[0]);
                done();
            }

        );        
    })


    test('getHeroeByIdAsync debe de retornar No se pudo encontrar el héroe', ( done) => {
        //Nota se usa catch en vez de then
        const id = 18;
        getHeroeByIdAsync(id)
        .catch(
            error =>{
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            }

        );        
    });

});

