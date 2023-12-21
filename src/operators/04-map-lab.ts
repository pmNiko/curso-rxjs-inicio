import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const text = document.createElement("div");
text.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non felis fermentum, tristique nisi et, lobortis urna. Nunc sapien ex, venenatis et justo sed, gravida porta mi. Praesent hendrerit sagittis tempor. Cras iaculis augue et quam tempus, non efficitur eros tristique. Nunc quis sapien eu metus efficitur iaculis. Praesent at suscipit erat, id tempor erat. Cras viverra cursus lobortis. Nullam malesuada commodo augue, at sodales orci accumsan in. Vestibulum accumsan, massa in volutpat ultricies, eros lectus scelerisque libero, ut porttitor mi nibh in sapien. Phasellus a diam in dolor lacinia sollicitudin sit amet id eros. Nullam cursus pulvinar nisi, vel elementum lectus molestie non. Integer vulputate pretium arcu, in condimentum mi fringilla quis. Vestibulum ac orci finibus, hendrerit felis ac, fringilla felis. Cras id lacinia odio, id eleifend est. Etiam convallis est ornare tellus sodales tempus.
<br><br>
Morbi et arcu purus. Sed fermentum accumsan est, nec tincidunt nunc mattis sit amet. Proin tempor libero sit amet turpis vehicula, a dapibus ligula aliquam. Maecenas mauris tortor, tincidunt in massa nec, porta mattis turpis. Nam odio nunc, volutpat non magna sed, sollicitudin eleifend magna. Cras varius elit lorem, ut efficitur diam egestas nec. Aenean in vestibulum sapien. Suspendisse varius vestibulum rhoncus. Cras tempus blandit magna, in ultrices nunc porta eget. Curabitur efficitur sapien eros, at porttitor erat molestie vel. Fusce quis dictum dui, at laoreet massa. Fusce tincidunt, diam et tristique tincidunt, nisi elit auctor dui, sed suscipit leo nunc nec est. Curabitur congue porttitor tortor vitae suscipit. Integer a arcu justo. Nam pretium erat eget ipsum aliquam bibendum.
<br><br>

Mauris sit amet enim leo. Aliquam auctor vestibulum velit et iaculis. Suspendisse vitae nibh venenatis, tempor mi ac, egestas sapien. Duis sollicitudin quam suscipit semper auctor. Pellentesque accumsan faucibus lorem eu ultrices. Cras et consectetur dolor. Mauris vel vulputate nibh. Suspendisse porttitor condimentum velit, eget semper eros venenatis sed. Morbi efficitur ullamcorper commodo. Fusce imperdiet magna ac cursus congue.
<br><br>

Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque justo est, luctus vel purus at, egestas tempor mi. Nunc hendrerit sagittis nibh vel tincidunt. Ut et tortor et risus ornare posuere faucibus sit amet ante. Nulla dignissim mauris sed neque egestas, at posuere arcu consectetur. Etiam volutpat fermentum vulputate. Aenean sollicitudin turpis ut elementum finibus. In id viverra lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
<br><br>

Cras non lobortis massa. Aliquam blandit est dolor. Donec enim ipsum, condimentum sit amet neque a, condimentum consequat sapien. Fusce vitae erat eu dolor elementum tempus. Proin venenatis viverra sem ut auctor. Phasellus rhoncus nibh nec erat euismod sagittis. Ut quis metus molestie, blandit felis a, porta urna. Nunc sed neque rhoncus eros tincidunt aliquam. Aliquam erat volutpat. Nam bibendum interdum semper.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non felis fermentum, tristique nisi et, lobortis urna. Nunc sapien ex, venenatis et justo sed, gravida porta mi. Praesent hendrerit sagittis tempor. Cras iaculis augue et quam tempus, non efficitur eros tristique. Nunc quis sapien eu metus efficitur iaculis. Praesent at suscipit erat, id tempor erat. Cras viverra cursus lobortis. Nullam malesuada commodo augue, at sodales orci accumsan in. Vestibulum accumsan, massa in volutpat ultricies, eros lectus scelerisque libero, ut porttitor mi nibh in sapien. Phasellus a diam in dolor lacinia sollicitudin sit amet id eros. Nullam cursus pulvinar nisi, vel elementum lectus molestie non. Integer vulputate pretium arcu, in condimentum mi fringilla quis. Vestibulum ac orci finibus, hendrerit felis ac, fringilla felis. Cras id lacinia odio, id eleifend est. Etiam convallis est ornare tellus sodales tempus.
<br><br>
Morbi et arcu purus. Sed fermentum accumsan est, nec tincidunt nunc mattis sit amet. Proin tempor libero sit amet turpis vehicula, a dapibus ligula aliquam. Maecenas mauris tortor, tincidunt in massa nec, porta mattis turpis. Nam odio nunc, volutpat non magna sed, sollicitudin eleifend magna. Cras varius elit lorem, ut efficitur diam egestas nec. Aenean in vestibulum sapien. Suspendisse varius vestibulum rhoncus. Cras tempus blandit magna, in ultrices nunc porta eget. Curabitur efficitur sapien eros, at porttitor erat molestie vel. Fusce quis dictum dui, at laoreet massa. Fusce tincidunt, diam et tristique tincidunt, nisi elit auctor dui, sed suscipit leo nunc nec est. Curabitur congue porttitor tortor vitae suscipit. Integer a arcu justo. Nam pretium erat eget ipsum aliquam bibendum.
<br><br>

Mauris sit amet enim leo. Aliquam auctor vestibulum velit et iaculis. Suspendisse vitae nibh venenatis, tempor mi ac, egestas sapien. Duis sollicitudin quam suscipit semper auctor. Pellentesque accumsan faucibus lorem eu ultrices. Cras et consectetur dolor. Mauris vel vulputate nibh. Suspendisse porttitor condimentum velit, eget semper eros venenatis sed. Morbi efficitur ullamcorper commodo. Fusce imperdiet magna ac cursus congue.
<br><br>

Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque justo est, luctus vel purus at, egestas tempor mi. Nunc hendrerit sagittis nibh vel tincidunt. Ut et tortor et risus ornare posuere faucibus sit amet ante. Nulla dignissim mauris sed neque egestas, at posuere arcu consectetur. Etiam volutpat fermentum vulputate. Aenean sollicitudin turpis ut elementum finibus. In id viverra lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
<br><br>

Cras non lobortis massa. Aliquam blandit est dolor. Donec enim ipsum, condimentum sit amet neque a, condimentum consequat sapien. Fusce vitae erat eu dolor elementum tempus. Proin venenatis viverra sem ut auctor. Phasellus rhoncus nibh nec erat euismod sagittis. Ut quis metus molestie, blandit felis a, porta urna. Nunc sed neque rhoncus eros tincidunt aliquam. Aliquam erat volutpat. Nam bibendum interdum semper.
<br><br>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non felis fermentum, tristique nisi et, lobortis urna. Nunc sapien ex, venenatis et justo sed, gravida porta mi. Praesent hendrerit sagittis tempor. Cras iaculis augue et quam tempus, non efficitur eros tristique. Nunc quis sapien eu metus efficitur iaculis. Praesent at suscipit erat, id tempor erat. Cras viverra cursus lobortis. Nullam malesuada commodo augue, at sodales orci accumsan in. Vestibulum accumsan, massa in volutpat ultricies, eros lectus scelerisque libero, ut porttitor mi nibh in sapien. Phasellus a diam in dolor lacinia sollicitudin sit amet id eros. Nullam cursus pulvinar nisi, vel elementum lectus molestie non. Integer vulputate pretium arcu, in condimentum mi fringilla quis. Vestibulum ac orci finibus, hendrerit felis ac, fringilla felis. Cras id lacinia odio, id eleifend est. Etiam convallis est ornare tellus sodales tempus.
<br><br>
Morbi et arcu purus. Sed fermentum accumsan est, nec tincidunt nunc mattis sit amet. Proin tempor libero sit amet turpis vehicula, a dapibus ligula aliquam. Maecenas mauris tortor, tincidunt in massa nec, porta mattis turpis. Nam odio nunc, volutpat non magna sed, sollicitudin eleifend magna. Cras varius elit lorem, ut efficitur diam egestas nec. Aenean in vestibulum sapien. Suspendisse varius vestibulum rhoncus. Cras tempus blandit magna, in ultrices nunc porta eget. Curabitur efficitur sapien eros, at porttitor erat molestie vel. Fusce quis dictum dui, at laoreet massa. Fusce tincidunt, diam et tristique tincidunt, nisi elit auctor dui, sed suscipit leo nunc nec est. Curabitur congue porttitor tortor vitae suscipit. Integer a arcu justo. Nam pretium erat eget ipsum aliquam bibendum.
<br><br>

Mauris sit amet enim leo. Aliquam auctor vestibulum velit et iaculis. Suspendisse vitae nibh venenatis, tempor mi ac, egestas sapien. Duis sollicitudin quam suscipit semper auctor. Pellentesque accumsan faucibus lorem eu ultrices. Cras et consectetur dolor. Mauris vel vulputate nibh. Suspendisse porttitor condimentum velit, eget semper eros venenatis sed. Morbi efficitur ullamcorper commodo. Fusce imperdiet magna ac cursus congue.
<br><br>

Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque justo est, luctus vel purus at, egestas tempor mi. Nunc hendrerit sagittis nibh vel tincidunt. Ut et tortor et risus ornare posuere faucibus sit amet ante. Nulla dignissim mauris sed neque egestas, at posuere arcu consectetur. Etiam volutpat fermentum vulputate. Aenean sollicitudin turpis ut elementum finibus. In id viverra lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
<br><br>

Cras non lobortis massa. Aliquam blandit est dolor. Donec enim ipsum, condimentum sit amet neque a, condimentum consequat sapien. Fusce vitae erat eu dolor elementum tempus. Proin venenatis viverra sem ut auctor. Phasellus rhoncus nibh nec erat euismod sagittis. Ut quis metus molestie, blandit felis a, porta urna. Nunc sed neque rhoncus eros tincidunt aliquam. Aliquam erat volutpat. Nam bibendum interdum semper.

`;

const body = document.querySelector("body");

body.append(text);

const progressbar = document.createElement("div");

progressbar.setAttribute("class", "progress-bar");

body.append(progressbar);

// fn que realice el calculo del progress

const calcPercent = (event) => {
  const { scrollTop, scrollHeight, clientHeight } =
    event.target.documentElement;

  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

// suscribirme al scroll del documento
// Streams
const scroll$ = fromEvent(document, "scroll");
// scroll$.subscribe(console.log);

/**
 * - clientheiht:     alcance normal de render
 * - scrollHeight:    contenido total del html
 * - scrollTop:       medidor de scroll
 * - scroll content:  450px
 *
 *  scrollHeight       clientHeight       300px
 *                                      ---------  =  0.6666666
 *     800px       -      350px           450px
 */
const progress$ = scroll$.pipe(map(calcPercent), tap(console.log));

progress$.subscribe((percent) => {
  if (percent === 100) {
    progressbar.style.backgroundColor = "red";
  } else {
    progressbar.style.backgroundColor = "#9034aa";
  }

  progressbar.style.width = `${percent}%`;
});
