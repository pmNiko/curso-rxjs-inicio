import { distinctUntilChanged, distinctUntilKeyChanged, from } from "rxjs";

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

from(characrters).pipe(distinctUntilKeyChanged("name")).subscribe(console.log);
