"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentalesCollection = void 0;
const BasicStreamableCollection_1 = require("./BasicStreamableCollection");
/**
 * Clase que representa la colección de documentales
 * @extends BasicStreamableCollection<Documental>
 * @class
 */
class DocumentalesCollection extends BasicStreamableCollection_1.BasicStreamableCollection {
    /**
     * Busca los documentales que coincidan con el nombre
     * @param name Nombre de los documentales a buscar
     * @returns Lista de los documentales que coinciden en el nombre
     */
    searchItemByName(name) {
        return this.collection.filter((documentales) => documentales.nombre === name);
    }
    /**
     * Busca los documentales que coincidan con el año de lanzamiento
     * @param year Año de lanzamiento de los documentales a buscar
     * @returns Lista de los documentales que coinciden en el año de lanzamiento
     */
    searchItemByYear(year) {
        return this.collection.filter((documentales) => documentales.año === year);
    }
    /**
     * Busca los documentales que coincidan con la duración
     * @param duration Duración de los documentales a buscar
     * @returns Lista de los documentales que coinciden en la duración
     */
    searchItemByDuration(duration) {
        return this.collection.filter((documentales) => documentales.duracion === duration);
    }
    /**
     * Busca los documentales que coincidan con el tópico
     * @param topic Tópico de los documentales a buscar
     * @returns Lista de los documentales que coinciden en el tópico
     */
    searchItemByTopic(topic) {
        return this.collection.filter((documentales) => documentales.topico === topic);
    }
}
exports.DocumentalesCollection = DocumentalesCollection;
