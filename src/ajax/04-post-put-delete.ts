import { of } from "rxjs";
import { AjaxError, ajax } from "rxjs/ajax";

const url = `https://httpbin.org//delay/1`;

const hanlderError = (resp: AjaxError) => {
  console.warn("err: ", resp.message);

  return of({
    ok: false,
    users: [],
  });
};

// ajax
//   .post(
//     url,
//     {
//       id: 1,
//       name: "Nikolas",
//     },
//     {
//       Authorization: "Bearer " + "1234567890abcdef",
//     }
//   )
//   .subscribe(console.log);

ajax({
  url,
  method: "POST",
  headers: {
    Authorization: "Bearer " + "1234567890abcdef",
  },
  body: {
    id: 1,
    name: "Nikolas",
  },
}).subscribe(console.log);

/**
 * Todo esto podria combinarse con el catchError de RX JS
 */
