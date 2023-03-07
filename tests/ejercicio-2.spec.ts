import {Lista} from "../src/ejercicio-2/Lista";
import { expect } from "chai";
import "mocha";

describe("Lista", () => {
    describe("append", () => {
      it("deberia devolver la lista original con otra lista anexada", () => {
        let lista1 = new Lista<number>([1])
        let lista2 = new Lista<number>([2,2])
        let resultante = new Lista<number>([1,2,2])
        lista1.append(lista2)
        expect(lista1).to.deep.equal(resultante)
      });
    });
    describe("concatenate", () => {
        it("deberia devolver la lista original con las listas concatenadas", () => {
          let lista1 = new Lista<number>([1])
          let lista2 = new Lista<number>([2,2])
          let lista3 = new Lista<number>([3,3,3])
          let listas = [lista2, lista3]
          let resultante = new Lista<number>([1,2,2,3,3,3])
          lista1.concatenate(listas)
          expect(lista1).to.deep.equal(resultante)
        });
      });
      describe("filter", () => {
        it("deberia devolver la lista original con los elementos que cumplan el filtro", () => {
          let lista5 = new Lista<number>([1,2,3,4,5,6])
          let resultante = new Lista<number>([2,4,6])
          let lista6 = lista5.filter(elemento => elemento % 2 == 0)
          expect(lista6).to.deep.equal(resultante)
        });
      }); 
      describe("length", () => {
        it("deberia devolver el tamaño de la lista", () => {
          let lista5 = new Lista<number>([1,2,3,4,5,6])
          expect(lista5.length()).to.deep.equal(6)
        });
      });
      describe("map", () => {
        it("deberia devolver la lista con la función aplicada", () => {
          let lista4 = new Lista<number>([4,4,4,4])
          let resultante = new Lista<number>([2,2,2,2])
          let lista6 = lista4.map(elemento => elemento / 2)
          expect(lista6).to.deep.equal(resultante)
        });
      });
      describe("reduce", () => {
        it("deberia devolver la lista con la reduccion al acumulador aplicada", () => {
          let lista5 = new Lista<number>([1,2,3,4,5,6])
          expect(lista5.reduce((acumulador, elemento) => acumulador + elemento, 0)).to.deep.equal(21)
        });
      });  
      describe("reverse", () => {
        it("deberia devolver la lista revertida", () => {
          let lista5 = new Lista<number>([1,2,3,4,5,6])
          let resultante = new Lista<number>([6,5,4,3,2,1])
          let lista6 = lista5.reverse()
          expect(lista6).to.deep.equal(resultante)
        });
      });  
      describe('forEach', () => {
        it('debería ejecutar la función para cada elemento de la lista', () => {
          const lista = new Lista([1, 2, 3, 4]);
          const elementos: number[] = [];
    
          lista.forEach((elemento) => {
            elementos.push(elemento * 2);
          });
    
          expect(elementos).to.deep.equal([2, 4, 6, 8]);
        });
    
        it('no debería ejecutar la función si la lista está vacía', () => {
          const lista = new Lista([]);
          let funcionEjecutada = false;
    
          lista.forEach(() => {
            funcionEjecutada = true;
          });
    
          expect(funcionEjecutada).to.equal(false);
        });
      });  
  });