import { startWith } from "rxjs";
import { ajax } from "rxjs/ajax";

// Referencias
const loading = document.createElement("div");
loading.classList.add("loading");
loading.innerHTML = "Loading...";

const body = document.querySelector("body");

// Streams
ajax
  .getJSON("https://reqres.in/api/users/2?delay=3")
  .pipe(startWith(true))
  .subscribe((resp) => {
    if (resp === true) {
      body.append(loading);
    } else {
      document.querySelector(".loading").remove();
    }
    console.log(resp);
  });
