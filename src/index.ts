import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
  next: (value: any) => console.log(`Next: ${value}`),
  error: (error: any) => console.warn(`Error: ${error}`),
  complete: () => console.info(`Complete!`),
};

const interval$ = new Observable<number>((subs) => {
  const intervalID = setInterval(() => {
    subs.next(Math.random());
  }, 1000);

  return () => {
    clearInterval(intervalID);
    console.log("Cleanner");
  };
});

/**
 * 1- casteo multiple(misma informacion a todos los subs)
 * 2- también es un observer
 */
const subject$ = new Subject();

const subscription = interval$.subscribe(subject$);

const subscription1 = subject$.subscribe(observer);
const subscription2 = subject$.subscribe(observer);

setTimeout(() => {
  subject$.next(10);
  subject$.complete();

  subscription.unsubscribe();
}, 4000);
