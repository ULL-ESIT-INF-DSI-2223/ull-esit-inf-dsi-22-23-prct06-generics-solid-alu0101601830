import { Cancion } from "./Cancion";
import { Discografia } from "./Discografia";

/**
 * Clase que representa un single.
 */
export class Single extends Discografia{
  private _cancion: Cancion
  /**
   * Crea una instancia de la clase Single.
   * @param nombre El nombre del single.
   * @param año El año de lanzamiento del single.
   * @param canciones Las canciones del single.
   */
  constructor(nombre: string, año:number, cancion: Cancion){
    super(nombre, año);
    this._cancion = cancion
  }

  /**
   * Obtiene la cancion del single
   */
  get cancion(): Cancion {
    return this._cancion;
  }
  /**
   * Establece la cancion del single
   */
  set canciones(value: Cancion) {
    this._cancion = value;
  }
}
