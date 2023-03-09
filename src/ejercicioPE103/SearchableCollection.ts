import {Collectable} from "./Collectable"
import {Searchable} from "./Searchable"

/**
 * Clase abstracta que representa una colección de items
 * @template T El tipo de item en la colección
 * @class
 */
export abstract class SearchableCollection<T> implements Collectable<T>, Searchable<T> {
    /**
     * La colección de items
     * @protected
     */
    protected collection: T[];

    /**
     * Crea una nueva instancia de SearchableCollection
     * @param collection La colección de items que estará dentro de la colección
     */
    constructor(collection: T[]) {
        this.collection = collection;
    }
    /**
     * Añade un item
     * @param {T} Un item
     * @returns {void}
     */
    addItem(item: T): void{
        this.collection.push(item);
    }
    /**
     * Devuelve el item
     * @param {item} La posicion del item
     * @returns {T} Te devuelve el item correspondiente
     */
    getItem(item: number): T | undefined{
        if (item >= this.getNumberOfItems()) return undefined
        return this.collection[item]
    }
    /**
     * Elimina un item
     * @param {item} La posicion del item
     * @returns {void}
     */
    removeItem(item: number): T | undefined{
        if (item >= this.getNumberOfItems()) return undefined
        this.collection.slice(item, item + 1)
        return this.getItem(item)
    }
    /**
     * Devuelve el número total de la colección
     * @returns {number} Número total de items
     */
    getNumberOfItems(): number{
        return this.collection.length;
    }
    /**
     * Busca un tipo que se desconoce a priori
     * @param {T} Elemento a buscar
     * @returns {T[]} Array con todas las ocurrencias del elemento
     */
    abstract search(item: T): T[];
}