import { catchError, forkJoin, of } from "rxjs";
import { ajax } from "rxjs/ajax";

const GITHUB_API_URL = "https://api.github.com/users";
const GITHUB_USERNAME = "pmNiko";

forkJoin({
  user: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USERNAME}`),
  repos: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USERNAME}/repos`),
  gist: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USERNAME}/gist`),
})
  .pipe(catchError((err) => of(err.message)))
  .subscribe(console.log);
