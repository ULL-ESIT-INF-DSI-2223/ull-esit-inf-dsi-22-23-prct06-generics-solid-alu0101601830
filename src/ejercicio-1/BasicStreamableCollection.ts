import {Streamable} from "./Streamable"
/**
 * Clase abstracta que representa una colección de items stremeables
 * @template T El tipo de item en la colección
 * @class
 */
export abstract class BasicStreamableCollection<T> implements Streamable {
    /**
     * La colección de items
     * @protected
     */
    protected collection: T[];

    /**
     * 
     * @param collection Crea una nueva instancia de BasicStreamableCollecion
     * @param collection La colección de items que estará dentro de la colección streamable
     */
    constructor(collection: T[]) {
        this.collection = collection;
    }

    /**
     * Búsqueda por nombre de un item.
     * @param {string} El nombre del item
     * @returns {any[]} Un array de los items que coincidan con el nombre
     */
    abstract searchItemByName(name: string): T[];
    
    /**
     * Búsqueda por año de un item.
     * @param {number} El año del lanzamiento del item
     * @returns {any[]} Un array de los items que coincidan con el año de lanzamiento
     */
    abstract searchItemByYear(year: number): T[];

}