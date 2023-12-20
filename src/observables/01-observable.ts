import { Observable, Observer, of } from "rxjs";

const observer: Observer<any> = {
  next: (value: any) => console.log(`Next: ${value}`),
  error: (error: any) => console.warn(`Error: ${error}`),
  complete: () => console.info(`Complete!`),
};

// const obs$ = Observable.create()
const obs$ = new Observable<string>((subs) => {
  subs.next("Click");
  subs.next("Click");
  subs.next("Click");

  const clicks = undefined;

  //   clicks.name = "Click";

  subs.complete();
});

// obs$.subscribe({
//   next(value) {
//     console.log(`Next ${value}`);
//   },
//   error(err) {
//     console.warn("Error: " + err);
//   },
//   complete() {
//     console.info("done");
//   },
// });

obs$.subscribe(observer);
