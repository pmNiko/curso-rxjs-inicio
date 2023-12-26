import { fromEvent, interval, skip, takeUntil, tap } from "rxjs";

const button = document.createElement("button");
button.innerHTML = "Stop timer";

document.querySelector("body").append(button);

const counter$ = interval(1000);

// const cliskBtn$ = fromEvent(button, "click");

// skip omite la emision del evento
const cliskBtn$ = fromEvent<PointerEvent>(button, "click").pipe(
  tap((val) => console.log("Tap before skip")),
  skip(1),
  tap((val) => console.log("Tap after skip"))
);

counter$.pipe(takeUntil(cliskBtn$)).subscribe({
  next: (val) => console.log("next ", val),
  complete: () => console.log("complete!"),
});
