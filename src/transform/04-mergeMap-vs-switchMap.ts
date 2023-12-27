import { fromEvent, interval, mergeMap, switchMap } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, "click");
const interval$ = interval(1000);

// click$.pipe(mergeMap(() => interval$)).subscribe(console.log);
click$.pipe(switchMap(() => interval$)).subscribe(console.log);
