import { distinct, from, of } from "rxjs";

const numbers = of(1, 1, 1, 3, 3, 2, 2, 4, 4, 5, 5, 1);

// numbers.pipe(distinct()).subscribe(console.log);

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

from(characrters)
  .pipe(distinct((character) => character.name))
  .subscribe(console.log);
