import { fromEvent } from "rxjs";

/**
 * Eventos del DOM
 */
const src1$ = fromEvent<PointerEvent>(document, "click");
const src2$ = fromEvent<KeyboardEvent>(document, "keyup");

const observer = {
  next: (val: any) => console.log("Val ", val),
};

src1$.subscribe(({ x, y }) => console.log(x, y));
src2$.subscribe(({ key }) => console.log(key));
