import "@testing-library/jest-dom"
import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";

describe('Puebas del 08-img-exp.js', () => {
    
    test('getHeroeById retornara un heroe buscandolo por su ID', () => {
        
        const id = 2;

        const heroeTest = heroes.find(h => h.id === id);

        const heroe = getHeroeById(id);

        expect(heroe).toEqual(heroeTest);

    })

    test('getHeroeById retornara undefined si no encuentra el id en el arreglo', () => {
        
        const id = 10;

        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);

    })

    test('Debe retornar un arreglo con los heroes de DC', () => {
        
        const owner = "DC";

        const heroesDC = getHeroesByOwner(owner)

        const heroesData = heroes.filter(heroes => heroes.owner === owner);

        expect(heroesDC).toEqual(heroesData);

    });

    test('Debe retornar un arreglo con los heroes de marvel y este debe ser lenght = 2', () => {

        const owner = "Marvel";
        const lenghtTest = 2;

        const heroesMarvel = getHeroesByOwner(owner)

        expect(heroesMarvel.length).toBe(lenghtTest);
    
    })
    
    
    

})
