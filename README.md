# Práctica 6
###### Diego Wiederkehr Bruno, alu0101601830
[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct06-generics-solid-alu0101601830/badge.svg?branch=master)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct06-generics-solid-alu0101601830?branch=master)

La page se encuentra en: https://ull-esit-inf-dsi-2223.github.io/ull-esit-inf-dsi-22-23-prct06-generics-solid-alu0101601830/

## Ejercicio 1
Este ejercicio va sobre la creación de una plataforma online donde guardar colecciones de películas, series o documentales. Tal como se dice en el enunciado, hay que crear distintas clases e interfaces. Yo he separado en distintos archivos lo que quería hacer en cada parte, mi diseño es el siguiente:
* Streamable.ts: Aquí he creado la interfaz general streamable con dos funciones, `searchItemByYear` y `searchItemByName`. Lo que hace cada una es buscar el elemento de la colección que coincida con el año de lanzamiento o el nombre respectivamente.
* BasicStreamableCollection.ts: Esta parte es ya una clase abstracta que es sobre una colección en general, más tarde especificaré si es una película, un documental o una serie. Esta clase implementa la interfaz `Streamable` por lo que hereda las funciones descritas anteriormente
* Media.ts: Este archivo lo he creado para hacer tres interfaces, una para Serie con los siguientes parámetros:
```ts
    nombre: string;
    año: number;
    temporadas: number;
```
Otra interfaz para Película con los parámetros:
```ts
    nombre: string;
    año: number;
    duracion: number;
```
La última interfaz para Documental con los parámetros:
```ts
    nombre: string;
    año: number;
    duracion: number;
    topico: string;
```
* Por último, he creado tres archivos diferentes pero con la misma estructura, una para la colección de documentales, otra para la colección de series y la última para la colección de películas. Cada una de estas clases son subclases de `BasicStreamableCollection` por lo que heredan las funciones de la interfaz general `Streamable` y para cada una he creado funciones adicionales de búsqueda para otros elementos como **duración** o **tópico**.
Para realizar la búsqueda en cada función he utilizado un filtro de la siguiente forma:
`return this.collection.filter((documentales) => documentales.año === year);`. Esto es un caso de ejemplo pero en todos lo he realizado de la misma forma pero espeficicando lo que buscaba exactamente.

Para los tests en Mocha Chai, los he realizado de forma BDD y he cubierto todas las funciones necesarias de cada elemento para asegurarme al 100% que funcionaban y también hacer el coverall y que diera un resultado de 100%. Resultados de los tests:
<p align="center">

</p>

Para el coverage:
<p align="center">

</p>
