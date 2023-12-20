import { asyncScheduler, range, observeOn } from "rxjs";

// forma deprecada
// const src$ = range(1, 5, asyncScheduler);

const src$ = range(1, 5).pipe(observeOn(asyncScheduler));

console.log("inicio");
src$.subscribe(console.log);
console.log("Fin");
