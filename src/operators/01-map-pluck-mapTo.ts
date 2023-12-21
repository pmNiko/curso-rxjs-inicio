import { fromEvent, range } from "rxjs";
import { map, mapTo, pluck } from "rxjs/operators";

/**
 * Contamos con la capacidad de inferir el tipo de dato s de entrada y salida
 * sin la necesidad de tener que definirlo a mano
 */
// range(1, 5)
//   .pipe(map((val) => (val * 10).toString()))
//   .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");

// const keyupCode$ = keyup$.pipe(map((event) => event.code));
// keyupCode$.subscribe((code) => console.log("map", code));

// const keyupPluck$ = keyup$.pipe(pluck("target", "baseURI"));
// keyupPluck$.subscribe((ele) => console.log("pluck", ele));

const keyupMapTo$ = keyup$.pipe(mapTo("Tecla presionada!"));
keyupMapTo$.subscribe(console.log);
