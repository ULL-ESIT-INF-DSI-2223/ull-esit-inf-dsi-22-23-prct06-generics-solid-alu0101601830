import { BasicStreamableCollection } from "./BasicStreamableCollection";
import { Serie } from "./Media";
/**
 * Clase que representa la colección de series
 * @extends BasicStreamableCollection<Serie>
 * @class
 */
export declare class SeriesCollection extends BasicStreamableCollection<Serie> {
    /**
     * Busca las series que coincidan con el nombre
     * @param name Nombre de las series a buscar
     * @returns Lista de las series que coinciden en el nombre
     */
    searchItemByName(name: string): Serie[];
    /**
     * Busca las series que coincidan con el año de lanzamiento
     * @param year Año de lanzamiento de las series a buscar
     * @returns Lista de las series que coinciden en el año de lanzamiento
     */
    searchItemByYear(year: number): Serie[];
    /**
     * Busca las series que coincidan con el número de temporadas
     * @param year Número de temporadas de las series a buscar
     * @returns Lista de las series que coinciden en el número de temporadas
     */
    searchItemBySeasons(seasons: number): Serie[];
}
