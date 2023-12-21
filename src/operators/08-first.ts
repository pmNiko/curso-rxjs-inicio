import { first, fromEvent, map, tap } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, "click");

click$
  .pipe(
    tap(() => console.log("tap")),
    // first<MouseEvent>((ev) => ev.clientY > 150)
    // map((ev) => ({
    //   clientY: ev.clientY,
    //   clientX: ev.clientX,
    // }))
    map(({ clientX, clientY }) => ({ clientY, clientX })),
    first((ev) => ev.clientY > 150)
  )
  .subscribe({
    next: ({ clientX, clientY }) =>
      console.log(`Emit: clientX: ${clientX} clientY: ${clientY}`),
    complete: () => console.log("Done!"),
  });
