import { debounceTime, fromEvent } from "rxjs";
import { distinctUntilChanged, map, pluck } from "rxjs/operators";

// const click$ = fromEvent(document, "click");

// click$.pipe(debounceTime(3000)).subscribe(console.log);

const input = document.createElement("input");

document.querySelector("body").append(input);

// fromEvent<KeyboardEvent>(document, "keyup")
//   .pipe(pluck("target", "value"))
//   .subscribe(console.log);

fromEvent<KeyboardEvent>(document, "keyup")
  .pipe(
    debounceTime(500), // delay de petición
    map((ev) => (ev.target as HTMLInputElement).value),
    distinctUntilChanged() // si no cambia no emite
  )
  .subscribe(console.log);
