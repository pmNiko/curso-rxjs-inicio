import { ajax } from "rxjs/ajax";

const url = `https://httpbin.org//delay/1`;

const obs$ = ajax.getJSON(url, {
  "Content-Type": "application/json",
  Authorization:
    "Bearer " +
    "d7dcbee79ea521a083cd75af45c8aba95f29a1bae72a58ab9388343f454f8fbe",
});

obs$.subscribe(console.log);
