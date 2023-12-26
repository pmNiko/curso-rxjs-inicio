import { catchError, map, of } from "rxjs";
import { AjaxError, ajax } from "rxjs/ajax";

const url = `https://api.github.com/useXXXrs?per_page=5`;

const errorHanlding = (response: Response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response;
};

const customCatchError = (err: AjaxError) => {
  console.warn(
    `\n Url: ${err.request.url} \n Message: ${err.name} \n Status: ${err.status}`
  );
  return of([]);
};

const fetchPromise = fetch(url);

ajax(url)
  .pipe(
    map((resp) => resp.response),
    catchError(customCatchError)
  )
  .subscribe((users) => console.log("users: ", users));

// fetchPromise
//   .then(errorHanlding)
//   .then((response) => response.json())
//   .then((data) => console.log("data: ", data))
//   .catch((err) => console.warn("Fetch not found \n ", err));

// fetchPromise
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(
//         `Error fetching ${url} response with error: ${response.status}`
//       );
//     }

//     return response.json();
//   })
//   .then(console.table)
//   .catch((error) => console.warn(error));
