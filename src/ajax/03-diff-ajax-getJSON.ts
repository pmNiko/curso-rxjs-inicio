import { catchError, of } from "rxjs";
import { AjaxError, ajax } from "rxjs/ajax";

const url = `https://httpbinXXX.org//delay/1`;

const hanlderError = (resp: AjaxError) => {
  console.warn("err: ", resp.message);

  return of({
    ok: false,
    users: [],
  });
};

// const obs$ = ajax.getJSON(url).pipe(catchError(hanlderError));
// const obs2$ = ajax(url).pipe(catchError(hanlderError));
// obs2$.subscribe((val) => console.log("Ajax ", val));

const obs$ = ajax.getJSON(url);
const obs2$ = ajax(url);

obs$.pipe(catchError(hanlderError)).subscribe({
  next: (val) => console.log("Next ", val),
  error: (err) => console.log("Error ", err),
  complete: () => console.log("Complete!"),
});
