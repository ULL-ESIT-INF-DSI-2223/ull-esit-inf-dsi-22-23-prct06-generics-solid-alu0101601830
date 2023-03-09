import {StringSearchableCollection} from "../src/ejercicioPE103/StringSearchableCollection";
import {NumericSearchableCollection} from "../src/ejercicioPE103/NumericSearchableCollection";

import { expect } from "chai";
import "mocha";

describe("Collections", () => {
    describe("number methods", () => {
      it("deberia devolver el array con el número indicado", () => {
        let collection1 = new NumericSearchableCollection([1,5,7,9,2,3,3,6,5,5,7,8,9,5])
        collection1.addItem(10)
        expect(collection1.getItem(14)).to.deep.equal(10)
        collection1.removeItem(10)
        expect(collection1.getNumberOfItems()).to.deep.equal(15)
        let array = [5,5,5,5]
        expect(collection1.search(5)).to.deep.equal(array)
      });
    });
    describe("string methods", () => {
        it("deberia devolver el array con la string indicado", () => {
          let collection1 = new StringSearchableCollection(["Diego","hola","me","llamo","Diego"])
          let nombre = collection1.getItem(5)
          expect(nombre).to.deep.equal(undefined)
          let array = ["Diego","Diego"]
          expect(collection1.search("Diego")).to.deep.equal(array)
          expect(collection1.removeItem(7)).to.deep.equal(undefined)
        });
      });
  });