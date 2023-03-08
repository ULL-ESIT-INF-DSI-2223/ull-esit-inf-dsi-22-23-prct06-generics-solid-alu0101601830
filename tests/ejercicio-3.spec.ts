import 'mocha';
import {expect} from 'chai';
import {Biblioteca} from "../src/ejercicio-3/Biblioteca";
import {Cancion} from "../src/ejercicio-3/Cancion";
import {Disco} from "../src/ejercicio-3/Disco";
import {Discografia} from "../src/ejercicio-3/Discografia";
import {Single} from "../src/ejercicio-3/Single";
import {Artista} from "../src/ejercicio-3/Artista";


describe('Biblioteca', () => {
    it('crea una cancion', () => {
      const generos = ["Rap", "HipHop"]
      const cancion = new Cancion("HUMBLE", 180, generos, false, 100507);
      cancion.nombre = "HUMBLE"
      expect(cancion.nombre).to.be.equal("HUMBLE")
      cancion.duracion = 180
      expect(cancion.duracion).to.be.equal(180)
      cancion.generos = generos
      expect(cancion.generos).to.be.equal(generos)
      cancion.single = false
      expect(cancion.single).to.be.equal(false)
      cancion.reproducciones = 100507
      expect(cancion.reproducciones).to.be.equal(100507)

    });
    it('crea un disco', () => {
        const cancion1 = new Cancion("HUMBLE", 180, ["Rap", "HipHop"], false, 100507);
        const cancion2 = new Cancion("FEEL", 150, ["Rap", "HipHop"], false, 80798);
        const canciones = [cancion1, cancion2]
        const disco = new Disco("DAMN", 2017, canciones);
        disco.nombre = "DAMN"
        expect(disco.nombre).to.be.equal("DAMN")
        disco.año = 2017
        expect(disco.año).to.be.equal(2017)
        disco.canciones = canciones
        expect(disco.canciones).to.be.equal(canciones) 
      });
      it('crea un single', () => {
        const cancion1 = new Cancion("HUMBLE", 180, ["Rap", "HipHop"], false, 100507);
        const disco = new Single("HUMBLE", 2017, cancion1);
        expect(disco.nombre).to.be.equal("HUMBLE")
        expect(disco.año).to.be.equal(2017)
        disco.cancion = cancion1
        expect(disco.cancion).to.be.equal(cancion1) 
      });

      it('crea un artista', () => {
        const cancion1 = new Cancion("HUMBLE", 180, ["Rap", "HipHop"], false, 100507);
        const cancion2 = new Cancion("FEEL", 150, ["Rap", "HipHop"], false, 80798);
        const canciones = [cancion1, cancion2]
        const disco = new Disco("DAMN", 2017, canciones);
        const discos = [disco]
        const artista = new Artista("Kendrick Lamar", 43000000, discos);
        artista.nombre = "Kendrick Lamar"
        expect(artista.nombre).to.be.equal("Kendrick Lamar")
        artista.oyentes = 43000000
        expect(artista.oyentes).to.be.equal(43000000)
        artista.discografia = discos
        expect(artista.discografia).to.be.equal(discos) 
      });

      it('crea una biblioteca y la prueba', () => {
        const cancion1 = new Cancion("HUMBLE", 180, ["Rap", "HipHop"], false, 100507);
        const cancion2 = new Cancion("FEEL", 150, ["Rap", "HipHop"], false, 80798);
        const cancion3 = new Cancion("Alright", 200, ["Rap", "HipHop", "Jazz"], false, 700050);
        const cancion4 = new Cancion("King Kunta", 195, ["Rap", "HipHop", "Jazz"], false, 1000405);

        const disco1 = new Disco("DAMN", 2017, [cancion1, cancion2]);
        const disco2 = new Disco("To Pimp A Butterfly", 2015, [cancion3, cancion4])
        
        const artista = new Artista("Kendrick Lamar", 43000000, [disco1, disco2]);

        const biblioteca = new Biblioteca([artista]);
        const artistas = [artista]
        biblioteca.artistas = artistas
        expect (biblioteca.artistas).to.be.equal(artistas)
        expect (biblioteca.searchArtist("Kendrick Lamar")).to.be.equal(console.table(artista))
        expect (biblioteca.searchArtist("J. Cole")).to.be.equal(undefined)

        expect (biblioteca.searchDisco("DAMN")).to.be.equal(console.table(disco1))
        expect (biblioteca.searchDisco("Section.80")).to.be.equal(undefined)

        expect (biblioteca.searchCancion("HUMBLE")).to.be.equal(console.table(cancion1))
        expect (biblioteca.searchCancion("DNA")).to.be.equal(undefined)

        expect (biblioteca.showBiblioteca()).to.be.equal(console.table(biblioteca))

        expect (biblioteca.nsongs("DAMN")).to.be.equal(2)
        expect (biblioteca.nsongs("Section.80")).to.be.equal(0)

        expect (biblioteca.duration("DAMN")).to.be.equal(330)
        expect (biblioteca.duration("Section.80")).to.be.equal(0)

        expect (biblioteca.reproducciones("DAMN")).to.be.equal(181305)
        expect (biblioteca.reproducciones("Section.80")).to.be.equal(0)

      });
  });