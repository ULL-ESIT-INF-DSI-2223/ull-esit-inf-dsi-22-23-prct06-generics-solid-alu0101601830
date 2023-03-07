/**
 * A generic interface for collections of streamable items
 * @interface Streamable
 */
export interface Streamable {
    /**
     * Búsqueda por año de un item
     * @param {number} El año del lanzamiento del item
     * @returns {any[]} Un array de los items que coincidan con el año de lanzamiento
     */
    searchItemByYear(year: number): any[];
    /**
     * Búsqueda por nombre de un item
     * @param {string} El nombre del item
     * @returns {any[]} Un array de los items que coincidan con el nombre
     */
    searchItemByName(name: string): any[];
}