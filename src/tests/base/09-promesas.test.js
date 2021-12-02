import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";
import heroes from "../../data/heroes";

describe('Pruebas con promesas', () => {
    
    test('getHeroeByIdAsync debe retornar un heroe Async', ( done ) => {
        
        const id = 1;

        getHeroeByIdAsync(id)
        .then(heroe =>{

            expect(heroe).toBe(heroes.find(h => h.id === id));
            done();

        })

    })
    
})
