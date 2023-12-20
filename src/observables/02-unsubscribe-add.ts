import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value: any) => console.log(`Next: ${value}`),
  error: (error: any) => console.warn(`Error: ${error}`),
  complete: () => console.info(`Complete!`),
};

const interval$ = new Observable<number>((subscriber) => {
  let count = 0;
  const interval = setInterval(() => {
    count++;
    subscriber.next(count);
    console.log(count);
  }, 1000);

  setTimeout(() => {
    // complete execute return in observable
    subscriber.complete();
  }, 2500);

  return () => {
    clearInterval(interval);
    console.info("Destroy interval...");
  };
});

const subs1 = interval$.subscribe(observer);
const subs2 = interval$.subscribe(observer);
const subs3 = interval$.subscribe(observer);

subs1.add(subs2);
subs1.add(subs3);

setTimeout(() => {
  subs1.unsubscribe();
  //  unsubscribe execute return in observable
  // subs1.unsubscribe();
  // subs2.unsubscribe();
  // subs3.unsubscribe();

  console.log("Final Interval Complete! ");
}, 3000);
