import { interval, reduce, take, tap } from "rxjs";

const observer = {
  next: (value) => console.log("Result: ", value),
  complete: () => console.log("Done!"),
};

const totalReducer = (acum: number, val: number) => {
  return acum + val;
};

const INTERVAL = 1000;
const TAKE = 6;

interval(INTERVAL)
  .pipe(take(TAKE), tap(console.log), reduce(totalReducer, 0))
  .subscribe(observer);
