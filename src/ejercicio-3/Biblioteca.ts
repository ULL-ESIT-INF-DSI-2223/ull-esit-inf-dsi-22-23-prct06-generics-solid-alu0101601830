import {Artista} from "./Artista";
import {Disco} from "./Disco";
import {Cancion} from "./Cancion";

/**
 * Clase que representa una biblioteca musical
 * @class Biblioteca
 * @constructor new Biblioteca (artistas)
 * @param Artista[] artistas - Lista de artistas.
 */
export class Biblioteca {
    private _artistas: Artista[];
  
    constructor(artistas: Artista[]) {
      this._artistas = artistas;
    }
  
    /**
     * Obtiene la lista de los artistas.
     */
    get artistas(): Artista[] {
      return this._artistas;
    }
    /**
     * Establece la lista de artistas.
     */
    set artistas(value: Artista[]) {
      this._artistas = value;
    }
  
    /**
     * Busca un artista por nombre y muestra sus detalles en consola.
     * @param {string} nombre - Nombre del artista a buscar. 
     * @returns {void | undefined} - No devuelve nada.
     */
    searchArtist(nombre: string): void | undefined{
        this._artistas.forEach((item: Artista) => {
            if (item.nombre === nombre) console.table(item);
        });
        return undefined;
    }

    /**
     * Busca un disco por nombre y muestra sus detalles en consola.
     * @param {string} nombre - Nombre del disco a buscar.
     * @returns {void | undefined} - No devuelve nada.
     */
    searchDisco(nombre: string): void | undefined{
        this._artistas.forEach((item: Artista) => {
            item.discografia.forEach((item2: Disco) =>{
                if (item2.nombre === nombre) console.table(item2);
            });
        });
        return undefined;
    }

    /**
     * Busca una canción por nombre y muestra sus detalles en consola.
     * @param {string} nombre - Nombre de la canción a buscar.
     * @returns {void | undefined} - No devuelve nada.
     */
    searchCancion(nombre: string): void | undefined{
        this._artistas.forEach((item: Artista) => {
            item.discografia.forEach((item2: Disco) =>{
                item2.canciones.forEach((item3: Cancion)=>{
                    if (item3.nombre === nombre) console.table(item3);
                });
            });
        });
        return undefined;
    }

    /**
     * Muestra la biblioteca completa de artistas, discos y canciones en consola.
     * @returns {void} - No devuelve nada.
     */
    showBiblioteca(): void{
        console.table(this._artistas);
    }

    /**
     * Devuelve la cantidad de canciones de un disco especificado por nombre.
     * @param {string} nombre - Nombre del disco.
     * @returns {number} - Cantidad de canciones.
     */
    nsongs(nombre: string): number{
        let result = 0;
        this._artistas.forEach((item: Artista) => {
            item.discografia.forEach((item2: Disco) =>{
                if (item2.nombre === nombre) result = item2.canciones.length;
            });
        });
        return result;
    }

    /**
     * Devuelve la duración total de un disco especificado por nombre.
     * @param {string} nombre - Nombre del disco.
     * @returns {number} - Duración total en segundos.
     */
    duration(nombre: string): number{
        let result = 0;
        this._artistas.forEach((item: Artista) => {
            item.discografia.forEach((item2: Disco) =>{
                if (item2.nombre === nombre){
                    item2.canciones.forEach((item3: Cancion) =>{
                        result += item3.duracion
                    })
                }
            });
        });
        return result;
    }

    /**
     * Devuelve las reproducciones totales de un disco especificado por nombre.
     * @param {string} nombre - Nombre del disco.
     * @returns {number} - Reproducciones totales.
     */
    reproducciones(nombre: string): number{
        let result = 0;
        this._artistas.forEach((item: Artista) => {
            item.discografia.forEach((item2: Disco) =>{
                if (item2.nombre === nombre){
                    item2.canciones.forEach((item3: Cancion) =>{
                        result += item3.reproducciones
                    })
                }
            });
        });
        return result;
    }
}