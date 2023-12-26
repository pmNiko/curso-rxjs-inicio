import { fromEvent, interval, sample, take } from "rxjs";

const interval$ = interval(500);

const click$ = fromEvent<MouseEvent>(document, "click");

/**
 * Trabja en combinación de ambos observables para emitir los valores
 * finalmente arroja el complete al cumplir el take
 */
interval$.pipe(take(20), sample(click$)).subscribe({
  next: (val) => console.log(val),
  complete: () => console.log("Complete"),
});
