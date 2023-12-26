import { fromEvent, map, takeWhile } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, "click");

click$
  .pipe(
    map(({ x, y }) => ({ x, y })),
    takeWhile(({ x, y }) => y > 100, true) // inclusive in true
  )
  .subscribe({
    next: (val) => console.log("next", val),
    complete: () => console.log("Complete!"),
  });
