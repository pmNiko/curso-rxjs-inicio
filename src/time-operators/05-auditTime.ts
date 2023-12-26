import { auditTime, interval, take } from "rxjs";

const interval$ = interval(1000);

interval$.pipe(take(20), auditTime(5000)).subscribe({
  next: (val) => console.log(val),
  complete: () => console.log("complete!"),
});
