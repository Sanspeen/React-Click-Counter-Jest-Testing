import { getSaludo } from "../../base-pruebas/02-template-string"
import '@testing-library/jest-dom';

describe('Pruebas en 02-template-string', () => {
    
    test('getSaludo debe retornar un saludo, ejemplo: "Hola Santiago"', () => {

        const nombre = `Santiago`;

        const saludo = getSaludo(nombre);
        console.log(saludo);

        expect(saludo).toBe(`Hola ${nombre}`);

    });

    test('getSaludo por defecto debe retornar: Hola Carlos', () => {
        
        const saludo = getSaludo();

        expect(saludo).toBe("Hola Carlos");
    
    });
    
    

})
