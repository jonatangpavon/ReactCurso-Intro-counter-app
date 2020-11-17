describe('Pruebas de demo ', () => {
          
    test('debe de ser iguales los string ', () => {
        
        // 1- Inicializacion
        const mensaje = 'Hola mundo';

        // 2- Estimulo
        const mensaje2 = 'Hola mundo';

        // 3- Observar comportamiento:
        expect(mensaje2).toBe(mensaje);
        
    })

})

