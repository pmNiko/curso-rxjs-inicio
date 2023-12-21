import { range } from "rxjs";
import { map, tap } from "rxjs/operators";

range(1, 10)
  .pipe(
    // tap((x) => console.log("Secondary action: ", x * 10))
    // tap({
    //   next: (x) => console.log("Next: ", x),
    //   error: (error) => console.log("Error: ", error),
    //   complete: () => console.log("Done!"),
    // })

    tap((x) => {
      console.log("Before: ", x);
      return 100; // el return queda sin efecto
    }),
    map((val) => val * 10),
    tap({
      next: (x) => console.log("After ", x),
      complete: () => console.log("Done!"),
    })
  )
  .subscribe((emitted) =>
    console.log(`
      -------------
      subs:  ${emitted}
      -------------`)
  );
