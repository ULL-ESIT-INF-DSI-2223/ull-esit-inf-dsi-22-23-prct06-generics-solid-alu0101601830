import {Disco} from "./Disco";

/**
 * Clase que representa un artista musical.
 */
export class Artista {
  
    /**
     * Crea una instancia de Artista.
     * @param nombre - El nombre del artista.
     * @param oyentes - El número de oyentes del artista.
     * @param discografia - La discografía del artista.
     */
    constructor(
      private _nombre: string,
      private _oyentes: number,
      private _discografia: Disco[]
    ) {}
  
    /**
     * Obtiene el nombre del artista.
     * @returns El nombre del artista.
     */
    get nombre(): string {
      return this._nombre;
    }

    /**
     * Establece el nombre del artista.
     * @param value - El nuevo nombre del artista.
     */
    set nombre(value: string) {
      this._nombre = value;
    }
  
    /**
     * Obtiene el número de oyentes del artista.
     * @returns El número de oyentes del artista.
     */
    get oyentes(): number {
      return this._oyentes;
    }

    /**
     * Establece el número de oyentes del artista.
     * @param value - El nuevo número de oyentes del artista.
     */
    set oyentes(value: number) {
      this._oyentes = value;
    }
  
    /**
     * Obtiene la discografía del artista.
     * @returns La discografía del artista.
     */
    get discografia(): Disco[] {
      return this._discografia;
    }

    /**
     * Establece la discografía del artista.
     * @param value - La nueva discografía del artista.
     */
    set discografia(value: Disco[]) {
      this._discografia = value;
    }

  }
