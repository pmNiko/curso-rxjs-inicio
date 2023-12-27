import { concatMap, fromEvent, interval, take } from "rxjs";

const interval$ = interval(500).pipe(take(10));
const click$ = fromEvent<MouseEvent>(document, "click");

click$.pipe(concatMap(() => interval$)).subscribe(console.log);
