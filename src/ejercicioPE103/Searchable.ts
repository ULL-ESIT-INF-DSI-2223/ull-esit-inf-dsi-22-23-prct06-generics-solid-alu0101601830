/**
 * Interfaz genérica para searchable
 * @interface Searchable
 */
export interface Searchable<T> {
    /**
     * Busca un tipo que se desconoce a priori
     * @param {T} Elemento a buscar
     * @returns {T[]} Array con todas las ocurrencias del elemento
     */
    search(item: T): T[];
}