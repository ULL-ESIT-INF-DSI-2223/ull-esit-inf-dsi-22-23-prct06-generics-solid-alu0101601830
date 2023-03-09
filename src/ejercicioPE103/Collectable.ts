/**
 * Interfaz genérica para collectable
 * @interface Collectable
 */
export interface Collectable<T> {
    /**
     * Añade un item
     * @param {T} Un item
     * @returns {void}
     */
    addItem(item: T): void;
    /**
     * Devuelve el item
     * @param {item} La posicion del item
     * @returns {T} Te devuelve el item correspondiente
     */
    getItem(item: number): T | undefined;
    /**
     * Elimina un item
     * @param {item} La posicion del item
     * @returns {item} EL item eliminado
     */
    removeItem(item: number): T | undefined;
    /**
     * Devuelve el número total de la colección
     * @returns {number} Número total de items
     */
    getNumberOfItems(): number;
}