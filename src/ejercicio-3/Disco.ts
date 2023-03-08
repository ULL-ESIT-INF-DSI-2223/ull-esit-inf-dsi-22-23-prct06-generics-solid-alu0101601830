import { Cancion } from "./Cancion";
import { Discografia } from "./Discografia";

/**
 * Clase que representa un disco.
 */
export class Disco extends Discografia{
  private _canciones: Cancion[]
  /**
   * Crea una instancia de la clase Disco.
   * @param nombre El nombre del disco.
   * @param año El año de lanzamiento del disco.
   * @param canciones Las canciones del disco.
   */
  constructor(nombre: string, año:number, canciones: Cancion[]){
    super(nombre, año);
    this._canciones = canciones
  }

  /**
   * Obtiene las canciones del disco.
   */
  get canciones(): Cancion[] {
    return this._canciones;
  }
  /**
   * Establece las canciones del disco.
   */
  set canciones(value: Cancion[]) {
    this._canciones = value;
  }
}
