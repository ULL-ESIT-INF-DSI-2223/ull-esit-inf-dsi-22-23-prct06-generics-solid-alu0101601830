/**
 * Clase Lista para tener una lista de cualquier tipo de datos
 * @class
 */
export declare class Lista<T> {
    private _elementos;
    /**
     * Constructor de Lista
     * @param elementos Elementos de la lista
     */
    constructor(elementos: T[]);
    /**
     * Getter que devuelve los elementos de la lista
     */
    get elementos(): T[];
    /**
     * Metodo para imprimir la lista
     * @returns Devuelve una string con los elementos de la lista
     */
    toString(): string;
    /**
     * Método para devolver el elemento en el indice introducido
     * @param indice Indice del array de elementos
     * @returns Contenido de elemento[indice]
     */
    get(indice: number): T;
    /**
     * Método para anexar una lista al final de esta lista
     * @param lista Lista para anexar
     */
    append(lista: Lista<T>): void;
    /**
     * Método para concatenar varias listas a esta lista
     * @param listas Listas para anexar a esta lista
     * @returns Esta lista con todas las listas anexadas
     */
    concatenate(listas: Lista<T>[]): Lista<T>;
    /**
     * Método para aplicar un predicado lógio a esta lista
     * @param predicado Predicado lógico que debe de cumplir
     * @returns Una lista con todos los elementos de la lista inicial para los cuales el predicado lógio es verdadero
     */
    filter(predicado: (elemento: T) => boolean): Lista<T>;
    /**
     * Método que devuelve la longitud de la lista
     * @returns Número con la longitud de la lista
     */
    length(): number;
    /**
     * Dada una lista y una función, retorna la lista resultante de aplicar a cada elemento de la lista inicial la función
     * @param funcion Función que debe aplicarse
     * @returns Lista resultante de aplicar a cada elemento de la lista inicial la función
     */
    map<U>(funcion: (elemento: T) => U): Lista<U>;
    /**
     * Método que dad una lista, una función y un acumulador inicial, reduce cada elemento al acumulador utilizando la función
     * @param funcion Funcón para aplicar a cada elemento
     * @param acumulador Acumulador inicial
     * @returns La lista resultante
     */
    reduce(funcion: (acumulador: T, elemento: T) => T, acumulador: T): T;
    /**
     * Método que revierte la lista
     * @returns Lista revertida
     */
    reverse(): Lista<T>;
    /**
     * Método que dad una lista y una función, permite iterar en los elementos de la lista e invocar la función con cada uno de ellos
     * @param funcion Función aplicable en cada elemento
     */
    forEach(funcion: (elemento: T) => void): void;
}
