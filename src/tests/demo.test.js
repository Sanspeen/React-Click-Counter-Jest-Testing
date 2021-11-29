
describe('Pruebas en el archivo demo.rest.js', () => {
    
    test('Deben de ser iguales dos string ', () => {
    
        //Inicialización.
        const mensaje = "Hola mundo";
        //Estimulo.
        const mensaje2 = "Hola mundo";
        //Observar el comportamiento.
        expect(mensaje).toBe(mensaje2);
    })

    test('El nombre tiene que ser juan', () => {
        
        //Inicialización.
        let name = "gabriel"
        
        //Estimulo.
        function changeName(name){
            return name = "juan";
        }

        //Observar el comportamiento.
        expect("juan").toBe(changeName(name));
    })
    
    
});


