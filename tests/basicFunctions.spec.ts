import {SeriesCollection} from "../src/ejercicio-1/SeriesCollection";
import {DocumentalesCollection} from "../src/ejercicio-1/DocumentalesCollection";
import {PeliculasCollection} from "../src/ejercicio-1/PeliculasCollection";


import { expect } from "chai";
import "mocha";

describe("Streamable", () => {
  describe("searchItemByYear", () => {
    it("deberia devolver un array con las series de ese año", () => {
      const series = [
        { nombre: "Breaking Bad", año: 2008, temporadas: 5 },
        { nombre: "Game of Thrones", año: 2011, temporadas: 8 },
      ];

      const seriesCollection = new SeriesCollection(series);

      const result = seriesCollection.searchItemByYear(2011);

      expect(result).to.have.lengthOf(1);
      expect(result[0]).to.deep.include({
        nombre: "Game of Thrones",
        año: 2011,
        temporadas: 8,
      });
    });
  });

  describe("searchItemByName", () => {
    it("deberia devolver un array con los documentales con ese nombre", () => {
      const documentaries = [
        { nombre: "Planet Earth", año: 2006, duracion: 300, topico: "Nature" },
        { nombre: "Blackfish", año: 2013, duracion: 83, topico: "Animals" },
      ];

      const documentariesCollection = new DocumentalesCollection(documentaries);

      const result = documentariesCollection.searchItemByName("Blackfish");

      expect(result).to.have.lengthOf(1);
      expect(result[0]).to.deep.include({
        nombre: "Blackfish",
        año: 2013,
        duracion: 83,
        topico: "Animals",
      });
    });
  });
});

describe("SeriesCollection", () => {
  describe("searchItemBySeasons", () => {
    it("deberia devolver un array de series que coincidan con el número de temporadas", () => {
      const series = [
        { nombre: "Breaking Bad", año: 2008, temporadas: 5 },
        { nombre: "Game of Thrones", año: 2011, temporadas: 8 },
        { nombre: "Friends", año: 1994, temporadas: 10 },
      ];

      const seriesCollection = new SeriesCollection(series);

      const result = seriesCollection.searchItemBySeasons(8);

      expect(result).to.have.lengthOf(1);
      expect(result[0]).to.deep.include({
        nombre: "Game of Thrones",
        año: 2011,
        temporadas: 8,
      });
    });
  });
});

describe("DocumentalesCollection", () => {
  describe("searchItemByTopic", () => {
    it("deberia devolver un array de documentales con ese tópico", () => {
      const documentaries = [
        { nombre: "Planet Earth", año: 2006, duracion: 300, topico: "Nature" },
        { nombre: "Blackfish", año: 2013, duracion: 83, topico: "Animals" },
        { nombre: "The Social Dilemma", año: 2020, duracion: 90, topico: "Technology" },
      ];

      const documentariesCollection = new DocumentalesCollection(documentaries);

      const result = documentariesCollection.searchItemByTopic("Animals");

      expect(result).to.have.lengthOf(1);
      expect(result[0]).to.deep.include({
        nombre: "Blackfish",
        año: 2013,
        duracion: 83,
        topico: "Animals",
      });
    });
  });
});

describe("PeliculasCollection", () => {
  describe("searchItemByDuration", () => {
    it("deberia devolver un array de peliculas de esa duración", () => {
      const movies = [
        { nombre: "Inception", año: 2010, duracion: 152 },
        { nombre: "The Godfather", año: 1972, duracion: 175 },
        { nombre: "The Dark Knight", año: 2008, duracion: 152 },
      ];

      const moviesCollection = new PeliculasCollection(movies);

      const result = moviesCollection.searchItemByDuration(152);

      expect(result).to.have.lengthOf(2);
      expect(result[0]).to.deep.include({
        nombre: "Inception",
        año: 2010,
        duracion: 152,
      });
      expect(result[1]).to.deep.include({
        nombre: "The Dark Knight",
        año: 2008,
        duracion: 152,
      });
    });
  });
});
