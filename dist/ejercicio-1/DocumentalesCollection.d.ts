import { BasicStreamableCollection } from "./BasicStreamableCollection";
import { Documental } from "./Media";
/**
 * Clase que representa la colección de documentales
 * @extends BasicStreamableCollection<Documental>
 * @class
 */
export declare class DocumentalesCollection extends BasicStreamableCollection<Documental> {
    /**
     * Busca los documentales que coincidan con el nombre
     * @param name Nombre de los documentales a buscar
     * @returns Lista de los documentales que coinciden en el nombre
     */
    searchItemByName(name: string): Documental[];
    /**
     * Busca los documentales que coincidan con el año de lanzamiento
     * @param year Año de lanzamiento de los documentales a buscar
     * @returns Lista de los documentales que coinciden en el año de lanzamiento
     */
    searchItemByYear(year: number): Documental[];
    /**
     * Busca los documentales que coincidan con la duración
     * @param duration Duración de los documentales a buscar
     * @returns Lista de los documentales que coinciden en la duración
     */
    searchItemByDuration(duration: number): Documental[];
    /**
     * Busca los documentales que coincidan con el tópico
     * @param topic Tópico de los documentales a buscar
     * @returns Lista de los documentales que coinciden en el tópico
     */
    searchItemByTopic(topic: string): Documental[];
}
