import { SearchableCollection } from "./SearchableCollection";

/**
 * Clase que representa la colección de números
 * @extends SearchableCollection<number>
 * @class
 */
export class NumericSearchableCollection extends SearchableCollection<number> {
    /**
     * Busca un número y todas sus ocurrencias
     * @param {number} Elemento a buscar
     * @returns {number[]} Array con todas las ocurrencias del elemento
     */    
    search(item: number): number[] {
        let resultado = [0]
        this.collection.forEach( (elemento) => {
            if (elemento === item) resultado.push(elemento);
        })
        return resultado;
    }
}