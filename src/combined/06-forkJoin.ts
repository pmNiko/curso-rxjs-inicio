import { delay, forkJoin, interval, of, take } from "rxjs";

const numbers$ = of(1, 2, 3, 4);
const intervals$ = interval(1000).pipe(take(3));
const letters$ = of("a", "b", "c", "d").pipe(delay(3500));

// forkJoin(numbers$, intervals$, letters$).subscribe(console.log);
forkJoin({
  num: numbers$,
  int: intervals$,
  let: letters$,
}).subscribe((resp) => console.log(resp.int));
