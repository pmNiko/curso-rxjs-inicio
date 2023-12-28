import { concat, interval, of, take } from "rxjs";

const observer = {
  next: (val) => console.log(val),
  error: (err) => console.error(err),
  complete: () => console.log("Complete!"),
};

const interval$ = interval(1000);

concat(
  interval$.pipe(take(3)),
  interval$.pipe(take(3)),
  of(1, 2, 3, 4, 5)
).subscribe(observer);
