import {
  catchError,
  exhaustMap,
  fromEvent,
  map,
  mergeMap,
  of,
  switchMap,
  tap,
} from "rxjs";
import { ajax } from "rxjs/ajax";

const uri = "https://reqres.in/api/login?delay=1";
// helper
const httpRequestLogin = (userPassw) =>
  ajax.post(uri, userPassw).pipe(
    map((resp) => resp.response["token"]),
    catchError((err) => of(err.message))
  );

// creando un formulario
const form = document.createElement("form");
const inputEmail = document.createElement("input");
const inputPassw = document.createElement("input");
const submitBtn = document.createElement("button");

// configuraciones
inputEmail.type = "email";
inputEmail.placeholder = "Email";
inputEmail.value = "eve.holt@reqres.in";

inputPassw.type = "password";
inputPassw.placeholder = "Password";
inputPassw.value = "cityslicka";

submitBtn.innerHTML = "Ingresar";

form.append(inputEmail, inputPassw, submitBtn);

document.querySelector("body").append(form);

//  Streams
const submitForm$ = fromEvent<SubmitEvent>(form, "submit");

submitForm$
  .pipe(
    tap((ev) => ev.preventDefault()),
    map((event) => ({
      email: event.target[0].value,
      password: event.target[1].value,
    })),
    exhaustMap(httpRequestLogin)
  )
  .subscribe(console.log);
