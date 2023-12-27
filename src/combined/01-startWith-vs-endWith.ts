import { endWith, of, startWith } from "rxjs";

const number$ = of(1, 2, 3);

number$
  .pipe(startWith("a", "b", "c"), endWith("x", "y", "z"))
  .subscribe(console.log);
