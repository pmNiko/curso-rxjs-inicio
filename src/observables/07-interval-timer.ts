import { interval, timer } from "rxjs";

const observer = {
  next: (value: any) => console.log(`next: ${value}`),
  error: null,
  complete: () => console.log("Completed"),
};

const now = new Date();
now.setSeconds(now.getSeconds() + 5);

const timer$ = timer(now);

// const interval$ = interval(5000);
// const timer$ = timer(2000, 4000);

console.log("Inicio");
timer$.subscribe(observer);

console.log("Fin");
