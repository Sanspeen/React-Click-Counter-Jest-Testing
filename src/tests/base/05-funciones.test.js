import "@testing-library/jest-dom";
import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones"

describe('05-funciones.js tests', () => {
    test('getUser debe retornar un objeto con id y nombre', () => {
        const objetoTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const objeto = getUser();
        
        expect(objeto).toStrictEqual(objetoTest);
    })

    test('getUsuarioActivo debe retornar un objeto con un nombre de entrada', () => {
        const objetoTest = {
            uid: 'ABC567',
            username: "Santiago"
        }

        const objeto = getUsuarioActivo("Santiago");

        expect(objeto).toEqual(objetoTest);
    })

    test('getUsuarioActivo debe retornar un objeto con un nombre por defecto el cual es: Pedro', () => {
        
        const objetoTest = {
            uid: 'ABC567',
            username: "Pedro"
        }

        const objeto = getUsuarioActivo();

        expect(objeto).toEqual(objetoTest);
    
    })
    
    
})
