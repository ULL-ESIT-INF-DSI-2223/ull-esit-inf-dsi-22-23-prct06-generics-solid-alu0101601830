"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lista = void 0;
/**
 * Clase Lista para tener una lista de cualquier tipo de datos
 * @class
 */
class Lista {
    _elementos;
    /**
     * Constructor de Lista
     * @param elementos Elementos de la lista
     */
    constructor(elementos) {
        this._elementos = elementos;
    }
    /**
     * Getter que devuelve los elementos de la lista
     */
    get elementos() {
        return this._elementos;
    }
    /**
     * Metodo para imprimir la lista
     * @returns Devuelve una string con los elementos de la lista
     */
    toString() {
        let result = "[";
        for (let i = 0; i < this.length(); i++) {
            result += this._elementos[i];
            if (i != this.length() - 1)
                result += ",";
        }
        return result + "]";
    }
    /**
     * Método para devolver el elemento en el indice introducido
     * @param indice Indice del array de elementos
     * @returns Contenido de elemento[indice]
     */
    get(indice) {
        return this.elementos[indice];
    }
    /**
     * Método para anexar una lista al final de esta lista
     * @param lista Lista para anexar
     */
    append(lista) {
        let auxiliar = this.length();
        for (let i = 0; i < lista.length(); i++) {
            this._elementos[auxiliar + i] = lista.get(i);
        }
    }
    /**
     * Método para concatenar varias listas a esta lista
     * @param listas Listas para anexar a esta lista
     * @returns Esta lista con todas las listas anexadas
     */
    concatenate(listas) {
        for (const lista of listas) {
            this.append(lista);
        }
        return this;
    }
    /**
     * Método para aplicar un predicado lógio a esta lista
     * @param predicado Predicado lógico que debe de cumplir
     * @returns Una lista con todos los elementos de la lista inicial para los cuales el predicado lógio es verdadero
     */
    filter(predicado) {
        const nuevaLista = new Lista([]);
        for (let i = 0; i < this.length(); i++) {
            const elemento = this.get(i);
            if (predicado(elemento))
                nuevaLista.append(new Lista([elemento]));
        }
        return nuevaLista;
    }
    /**
     * Método que devuelve la longitud de la lista
     * @returns Número con la longitud de la lista
     */
    length() {
        let i = 0;
        while (this.get(i) != null) {
            i++;
        }
        return i;
    }
    /**
     * Dada una lista y una función, retorna la lista resultante de aplicar a cada elemento de la lista inicial la función
     * @param funcion Función que debe aplicarse
     * @returns Lista resultante de aplicar a cada elemento de la lista inicial la función
     */
    map(funcion) {
        const nuevaLista = new Lista([]);
        for (let i = 0; i < this.length(); i++) {
            nuevaLista.append(new Lista([funcion(this.get(i))]));
        }
        return nuevaLista;
    }
    /**
     * Método que dad una lista, una función y un acumulador inicial, reduce cada elemento al acumulador utilizando la función
     * @param funcion Funcón para aplicar a cada elemento
     * @param acumulador Acumulador inicial
     * @returns La lista resultante
     */
    reduce(funcion, acumulador) {
        let resultado = acumulador;
        for (let i = 0; i < this.length(); i++) {
            resultado = funcion(resultado, this.get(i));
        }
        return resultado;
    }
    /**
     * Método que revierte la lista
     * @returns Lista revertida
     */
    reverse() {
        const nuevaLista = new Lista([]);
        for (let i = this.length() - 1; i >= 0; i--) {
            nuevaLista.append(new Lista([this.get(i)]));
        }
        return nuevaLista;
    }
    /**
     * Método que dad una lista y una función, permite iterar en los elementos de la lista e invocar la función con cada uno de ellos
     * @param funcion Función aplicable en cada elemento
     */
    forEach(funcion) {
        for (let i = 0; i < this.length(); i++) {
            const elemento = this.get(i);
            funcion(elemento);
        }
    }
}
exports.Lista = Lista;
let lista1 = new Lista([1]);
let lista2 = new Lista([2, 2]);
let lista3 = new Lista([3, 3, 3]);
let lista4 = new Lista([4, 4, 4, 4]);
let lista5 = new Lista([1, 2, 3, 4, 5, 6]);
lista1.append(lista2);
console.log("Append: " + lista1.toString());
let listas = [lista3, lista4];
lista2.concatenate(listas);
console.log("Concatenate: " + lista2.toString());
console.log("Filter: " + lista5.filter(elemento => elemento % 2 == 0));
console.log("Length: " + lista4.length());
console.log("Map: " + lista4.map(elemento => elemento / 2));
console.log("Reduce: " + lista5.reduce((acumulador, elemento) => acumulador + elemento, 0));
console.log("Reverse: " + lista5.reverse());
console.log("For each: ");
lista5.forEach((elemento) => {
    console.log(elemento * 2);
});
