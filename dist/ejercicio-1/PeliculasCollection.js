"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeliculasCollection = void 0;
const BasicStreamableCollection_1 = require("./BasicStreamableCollection");
/**
 * Clase que representa la colección de películas
 * @extends BasicStreamableCollection<Pelicula>
 * @class
 */
class PeliculasCollection extends BasicStreamableCollection_1.BasicStreamableCollection {
    /**
     * Busca las películas que coincidan con el nombre
     * @param name Nombre de las películas a buscar
     * @returns Lista de las películas que coinciden en el nombre
     */
    searchItemByName(name) {
        return this.collection.filter((peliculas) => peliculas.nombre === name);
    }
    /**
     * Busca las películas que coincidan con el año de lanzamiento
     * @param year Año de lanzamiento de las películas a buscar
     * @returns Lista de las películas que coinciden en el año de lanzamiento
     */
    searchItemByYear(year) {
        return this.collection.filter((peliculas) => peliculas.año === year);
    }
    /**
     * Busca las películas que coincidan con la duración
     * @param duration Duración de las películas a buscar
     * @returns Lista de las películas que coinciden en la duración
     */
    searchItemByDuration(duration) {
        return this.collection.filter((peliculas => peliculas.duracion === duration));
    }
}
exports.PeliculasCollection = PeliculasCollection;
