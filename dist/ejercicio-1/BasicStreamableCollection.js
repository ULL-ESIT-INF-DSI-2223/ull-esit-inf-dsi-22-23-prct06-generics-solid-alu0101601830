"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicStreamableCollection = void 0;
/**
 * Clase abstracta que representa una colección de items stremeables
 * @template T El tipo de item en la colección
 * @class
 */
class BasicStreamableCollection {
    /**
     * La colección de items
     * @protected
     */
    collection;
    /**
     *
     * @param collection Crea una nueva instancia de BasicStreamableCollecion
     * @param collection La colección de items que estará dentro de la colección streamable
     */
    constructor(collection) {
        this.collection = collection;
    }
}
exports.BasicStreamableCollection = BasicStreamableCollection;
