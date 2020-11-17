
import '@testing-library/jest-dom';
import { retornaArreglo } from '../base/07-deses-arr';

describe('Pruebas 07-deses-arr', () => {
          
    test('Debe devolver una string y un número', () => {
        
      //  const arr = retornaArreglo();
      //  expect(arr).toEqual(['ABC', 123]);
      
       const [letras,numeros] = retornaArreglo();
       expect(letras).toBe('ABC');
       expect(typeof letras).toBe('string');

       expect(typeof numeros).toBe('number');
    })

})