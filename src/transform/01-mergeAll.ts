import { Observable, debounceTime, fromEvent, map } from "rxjs";
import { ajax } from "rxjs/ajax";
import { mergeAll } from "rxjs/operators";
import { GithubUser, GithubUserResponse } from "../interfaces/GithubUser";

const uri = "https://api.github.com/search/users?q=";
const body = document.querySelector("body");
const textInput = document.createElement("input");
const orderList = document.createElement("ol");
body.append(textInput, orderList);

// helpers
const showUsers = (users: GithubUser[]) => {
  console.log(users);
  orderList.innerHTML = "";

  for (const user of users) {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = user.avatar_url;

    const anchor = document.createElement("a");
    anchor.href = user.html_url;
    anchor.text = "Ver página";
    anchor.target = "_blank";

    li.append(img);
    li.append(user.login + " ");
    li.append(anchor);

    orderList.append(li);
  }
};

// Streams
const input$ = fromEvent<KeyboardEvent>(document, "keyup");

input$
  .pipe(
    debounceTime(500),
    map<KeyboardEvent, string>((ev) => ev.target["value"]),
    map<string, Observable<GithubUserResponse>>((val) =>
      ajax.getJSON(`${uri}${val}`)
    ),
    mergeAll(),
    map((resp) => resp["items"])
  )
  .subscribe(showUsers);

/** -------------- Refactor ---------------- */

// input$
//   .pipe(
//     debounceTime(500),
//     map((ev) => {
//       const text = ev.target["value"];

//       //   return ajax.getJSON(`https://api.github.com/users/${text}`);
//       return ajax.getJSON(`https://api.github.com/search/users?q=${text}`);
//     }), // alternativa a la implementación de abajo
//     // map((ev) => (ev.target as HTMLInputElement ).value )
//     mergeAll(),
//     map((resp) => resp["items"])
//   )
//   .subscribe(console.log);
