import { distinctUntilChanged, from } from "rxjs";

interface Character {
  name: string;
}

const characrters: Character[] = [
  {
    name: "Mega Man",
  },
  {
    name: "X",
  },
  {
    name: "Zero",
  },
  {
    name: "Dr. Willy",
  },
  {
    name: "Dr. Willy",
  },
  {
    name: "Mega Man",
  },
  {
    name: "X",
  },
  {
    name: "Zero",
  },
  {
    name: "Mega Man",
  },
  {
    name: "Mega Man",
  },
];

// from(characrters)
//   .pipe(distinct((character) => character.name))
//   .subscribe(console.log);

from(characrters)
  .pipe(distinctUntilChanged((prev, curr) => prev.name === curr.name))
  .subscribe(console.log);
