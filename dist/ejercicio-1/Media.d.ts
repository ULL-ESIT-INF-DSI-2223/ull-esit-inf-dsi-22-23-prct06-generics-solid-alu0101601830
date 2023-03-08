/**
 * Interfaz que define la estructura de una serie
 * @interface
 */
export interface Serie {
    nombre: string;
    año: number;
    temporadas: number;
}
/**
 * Interfaz que define la estructura de una película
 * @interface
 */
export interface Pelicula {
    nombre: string;
    año: number;
    duracion: number;
}
/**
 * Interfaz que define la estructura de un documental
 * @interface
 */
export interface Documental {
    nombre: string;
    año: number;
    duracion: number;
    topico: string;
}
