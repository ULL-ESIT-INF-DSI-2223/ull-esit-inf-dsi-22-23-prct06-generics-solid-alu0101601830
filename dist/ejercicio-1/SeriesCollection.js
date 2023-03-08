"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeriesCollection = void 0;
const BasicStreamableCollection_1 = require("./BasicStreamableCollection");
/**
 * Clase que representa la colección de series
 * @extends BasicStreamableCollection<Serie>
 * @class
 */
class SeriesCollection extends BasicStreamableCollection_1.BasicStreamableCollection {
    /**
     * Busca las series que coincidan con el nombre
     * @param name Nombre de las series a buscar
     * @returns Lista de las series que coinciden en el nombre
     */
    searchItemByName(name) {
        return this.collection.filter((series) => series.nombre === name);
    }
    /**
     * Busca las series que coincidan con el año de lanzamiento
     * @param year Año de lanzamiento de las series a buscar
     * @returns Lista de las series que coinciden en el año de lanzamiento
     */
    searchItemByYear(year) {
        return this.collection.filter((series) => series.año === year);
    }
    /**
     * Busca las series que coincidan con el número de temporadas
     * @param year Número de temporadas de las series a buscar
     * @returns Lista de las series que coinciden en el número de temporadas
     */
    searchItemBySeasons(seasons) {
        return this.collection.filter((series => series.temporadas === seasons));
    }
}
exports.SeriesCollection = SeriesCollection;
