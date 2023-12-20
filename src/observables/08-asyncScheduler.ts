import { asyncScheduler } from "rxjs";

// const sayHello = () => console.log("Hello world!");
const sayHello = ({ name, year }: { name: string; year: number }) =>
  console.log(`Hello ${name} you have ${year} old.`);

// asyncScheduler.schedule(sayHello, 3000, { name: "niko", year: 34 });

const subs$ = asyncScheduler.schedule(
  function (state) {
    console.log("state ", state);

    // Con esta directiva generamos un setinterval
    this.schedule(state + 1, 1000);
  },
  3000,
  0
);

// setTimeout(() => {
//   subs$.unsubscribe();
// }, 6000);

// reemplazamos el setTimeout
asyncScheduler.schedule(() => subs$.unsubscribe(), 6000);
