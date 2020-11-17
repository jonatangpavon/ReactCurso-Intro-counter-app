import { getHeroeById, getHeroesByOwner } from '../base/08-imp-exp';
import {heroes} from '../data/heroes'


describe('Pruebas en funciones de héroes', () => {
          
    test('Debe devolver un héroe por id', () => {
        
        const id = 1;
        const heroe = getHeroeById(id);        

        const heroeData = heroes.find( h => h.id ===id);

        expect(heroe).toEqual(heroeData);
    })

    test('Debe devolver undefined', () => {
        
        const id = 10;
        const heroe = getHeroeById(id);        

        expect(heroe).toEqual(undefined);
    })

    test('Debe devolver un arreglo con los héroes de DC', () => {
        
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);        

        const heroesData = heroes.filter( h => h.owner === h.owner);

        expect(heroes).toEqual(heroesData);
    })

    test('Debe devolver un arreglo con los héroes de DC', () => {
        
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);        

        expect(heroes.length).toBe(2);
    })

})