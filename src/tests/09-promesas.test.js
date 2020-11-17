
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
    });
});