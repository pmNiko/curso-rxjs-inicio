import { from } from "rxjs";
import { map, reduce, scan } from "rxjs/operators";

const observer = {
  next: (value) => console.log("Emit: ", value),
  complete: () => console.log("Done!"),
};

// const numbers = [1, 2, 3, 4, 5];

// const totalResult = (acc, cur) => acc + cur;

// console.log("----------- Reduce -------------");
// from(numbers).pipe(reduce(totalResult, 0)).subscribe(observer);

// console.log("-----------------------------------");
// console.log("-----------------------------------");

// console.log("----------- Scan -------------");
// from(numbers).pipe(scan(totalResult, 0)).subscribe(observer);

// Redux

interface User {
  id?: string;
  authenticated?: boolean;
  token?: string;
  age?: number;
}

const user: User[] = [
  { id: "niko", authenticated: false, token: null },
  { id: "niko", authenticated: true, token: "ABC" },
  { id: "niko", authenticated: true, token: "ABC123" },
];

const state$ = from(user).pipe(
  scan<User, User>(
    (acc, cur) => {
      return { ...acc, ...cur };
    },
    { age: 34 }
  )
);

const id$ = state$.pipe(map((state) => state.id));

id$.subscribe(console.log);
