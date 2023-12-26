import { asyncScheduler, debounceTime, fromEvent } from "rxjs";
import { distinctUntilChanged, map, pluck, throttleTime } from "rxjs/operators";

const click$ = fromEvent(document, "click");

click$.pipe(throttleTime(3000)).subscribe(console.log);

const input = document.createElement("input");

document.querySelector("body").append(input);

fromEvent<KeyboardEvent>(document, "keyup")
  .pipe(
    throttleTime(1000, asyncScheduler, {
      leading: true,
      trailing: true,
    }), // delay de petición
    map((ev) => (ev.target as HTMLInputElement).value),
    distinctUntilChanged() // si no cambia no emite
  )
  .subscribe(console.log);
