import { of } from "rxjs";

// const obs$ = of([1, 2, 3, 4, 5, 6]);
const obs$ = of(
  [1, 2, 3, 4, 5, 6],
  { a: 1, b: 2, c: 4 },
  function () {
    console.log("Funcion dentro del of");
  },
  false,
  Promise.resolve(true)
);

console.log("Inicio del observable");

const subscription = obs$.subscribe({
  next: (ele) => console.log(`Element: ${ele}`),
  error: (e) => console.error(e),
  complete: () => console.info("Done!"),
});

console.log("Fin del observable");
