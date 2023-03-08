import { Cancion } from "./Cancion";

/**
 * Clase que representa una discografia (disco o single).
 */
export class Discografia {
  
    private _nombre: string;
    private _año: number;

  /**
   * Crea una instancia de la clase Discografia.
   * @param nombre El nombre del disco.
   * @param año El año de lanzamiento del disco.
   * @param canciones Las canciones del disco.
   */
  constructor(nombre: string, año:number){
    this._nombre = nombre;
    this._año = año;
  }

  /**
   * Obtiene el nombre del disco.
   */
  get nombre(): string {
    return this._nombre;
  }
  /**
   * Establece el nombre del disco.
   */
  set nombre(value: string) {
    this._nombre = value;
  }

  /**
   * Obtiene el año de lanzamiento del disco.
   */
  get año(): number {
    return this._año;
  }
  /**
   * Establece el año de lanzamiento del disco.
   */
  set año(value: number) {
    this._año = value;
  }
}
