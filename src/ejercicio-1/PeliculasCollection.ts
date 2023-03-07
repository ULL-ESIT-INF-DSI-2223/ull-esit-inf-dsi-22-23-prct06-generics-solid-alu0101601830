import { BasicStreamableCollection } from "./BasicStreamableCollection";
import { Pelicula } from "./Media";

/**
 * Clase que representa la colección de películas
 * @extends BasicStreamableCollection<Pelicula>
 * @class
 */
export class PeliculasCollection extends BasicStreamableCollection<Pelicula> {
    /**
     * Busca las películas que coincidan con el nombre
     * @param name Nombre de las películas a buscar
     * @returns Lista de las películas que coinciden en el nombre
     */
    searchItemByName(name: string): Pelicula[] {
        return this.collection.filter((peliculas) => peliculas.nombre === name);
    }

    /**
     * Busca las películas que coincidan con el año de lanzamiento
     * @param year Año de lanzamiento de las películas a buscar
     * @returns Lista de las películas que coinciden en el año de lanzamiento
     */
    searchItemByYear(year: number): Pelicula[] {
        return this.collection.filter((peliculas) => peliculas.año === year);
    }

    /**
     * Busca las películas que coincidan con la duración
     * @param duration Duración de las películas a buscar
     * @returns Lista de las películas que coinciden en la duración
     */
    searchItemByDuration(duration: number): Pelicula[] {
        return this.collection.filter((peliculas => peliculas.duracion === duration))
    }
}