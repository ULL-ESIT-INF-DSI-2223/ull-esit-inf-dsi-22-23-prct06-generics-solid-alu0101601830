/**
 * Clase que representa una canción.
 */
export class Cancion {

    /**
     * Crea una instancia de la clase Cancion.
     * @param nombre El nombre de la canción.
     * @param duracion La duración de la canción en segundos.
     * @param generos Los géneros de la canción.
     * @param single Indica si la canción es un single.
     * @param reproducciones El número de reproducciones de la canción.
     */
    constructor(
      private _nombre: string,
      private _duracion: number,
      private _generos: string[],
      private _single: boolean,
      private _reproducciones: number
    ) {}
  
    /**
     * Obtiene el nombre de la canción.
     */
    get nombre(): string {
      return this._nombre;
    }
    /**
     * Establece el nombre de la canción.
     */
    set nombre(value: string) {
      this._nombre = value;
    }
  
    /**
     * Obtiene la duración de la canción en segundos.
     */
    get duracion(): number {
      return this._duracion;
    }
    /**
     * Establece la duración de la canción en segundos.
     */
    set duracion(value: number) {
      this._duracion = value;
    }
  
    /**
     * Obtiene los géneros de la canción.
     */
    get generos(): string[] {
      return this._generos;
    }
    /**
     * Establece los géneros de la canción.
     */
    set generos(value: string[]) {
      this._generos = value;
    }
  
    /**
     * Indica si la canción es un single.
     */
    get single(): boolean {
      return this._single;
    }
    /**
     * Establece si la canción es un single.
     */
    set single(value: boolean) {
      this._single = value;
    }
  
    /**
     * Obtiene el número de reproducciones de la canción.
     */
    get reproducciones(): number {
      return this._reproducciones;
    }
    /**
     * Establece el número de reproducciones de la canción.
     */
    set reproducciones(value: number) {
      this._reproducciones = value;
    }
  }
  