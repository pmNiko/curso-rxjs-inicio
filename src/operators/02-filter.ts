import { from, fromEvent, range } from "rxjs";
import { filter, map } from "rxjs/operators";

// range(1, 10)
//   .pipe(filter((ele) => ele % 2 === 1))
//   .subscribe(console.log);

// range(1, 10)
//   .pipe(
//     filter((ele, i) => {
//       console.log("Index ", i);
//       return ele % 2 === 1;
//     })
//   )
//   .subscribe(console.log);

// type Character = {
//   type: "hero" | "villain";
//   name: string;
// };

// const characters: Character[] = [
//   {
//     type: "hero",
//     name: "Batman",
//   },
//   {
//     type: "hero",
//     name: "Robin",
//   },
//   {
//     type: "villain",
//     name: "Joker",
//   },
// ];

// from(characters)
//   .pipe(
//     filter((character) => character.type === "hero")

//     )
//   .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup").pipe(
  map((event) => event.code),
  filter((key) => key === "Enter")
);

keyup$.subscribe(console.log);
