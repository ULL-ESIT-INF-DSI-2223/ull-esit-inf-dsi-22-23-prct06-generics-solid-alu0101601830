import { SearchableCollection } from "./SearchableCollection";

/**
 * Clase que representa la colección de strings
 * @extends SearchableCollection<string>
 * @class
 */
export class NumericSearchableCollection extends SearchableCollection<string> {
    /**
     * Busca una string y todas sus ocurrencias
     * @param {string} Elemento a buscar
     * @returns {string[]} Array con todas las ocurrencias del elemento
     */    
    search(item: string): string[] {
        let resultado = [""]
        this.collection.forEach( (elemento) => {
            if (elemento.includes(item)) resultado.push(elemento);
        })
        return resultado;
    }
}