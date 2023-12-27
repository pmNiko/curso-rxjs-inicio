# RX-JS

### Sección 1

> [!NOTE] > **Observer Cold vs Hot**
> Cuando la data es producida por el observable en si mismo,
> es considerado un **Cold Observable**. Pero cuando la data  
> es producida fuera del observable es llamado **Hot Observable**.
>
> **Subject** _nos permite transformar un_ **Cold Observable** _en un_ **Hot Observable**.

> [!TIP]
>
> - _Se debe tener cuidado con los intervalos corriendo en el background._
>
> - _Esto por menor que sea genera fugas de memoria y no es el escenario esperado._

<br>

---

### Sección 2

> [!NOTE]
>
> **Funciones para la creación de observables**
>
> > - of
> > - fromEvent
> > - interval
> > - timer
> > - asyncScheduler
>
> ## _Estas funciones abstraen la manera en la que instaciamos un observer_

<br>

---

### Sección 3

> [!NOTE]
>
> **Operadores**
>
> > - map
> > - pluck
> > - mapTo
> > - filter
> > - tap
> > - reduce
> > - scan
>
> ## \_\_

<br>

---

### Sección 4

> [!NOTE]
>
> **Operadores no tan comunes**
>
> > - take
> > - first
> > - takeWhile
> > - skip
> > - distinct
> > - distinctUntilChanged
> > - distinctUntilKeyChanged
>
> ## _Esto son operadores que si bien no son tan utilizados son importantes_

<br>

---

<br>

### Sección 5

> [!NOTE]
>
> **Operadores de tiempo**
>
> > - debounceTime
> > - throttleTime
> > - sampleTime
> > - sample
> > - auditTime
>
> ## _Operadores del tiempo, los cuales se enfocan en trabajar de alguna manera con intervalos de tiempo._

<br>

---

<br>

### Sección 6

> [!NOTE]
>
> **Peticiones Ajax**
>
> > - Conceptos básicos de una petición ajax
> > - Manejo de errores
> > - Fetch API
> > - getJson
> > - Ajax
> > - Diferencia entre getJson y Ajax
> > - PUT, POST, DELETE, GET
>
> ## \_

<br>

---

<br>

### Sección 7

> [!NOTE]
>
> **Operadores de transformación**
>
> > - mergeAll
> > - mergeMap
> > - switchMap
> > - concatMap
> > - exhaustMap
>
> ## Estos son operadores de aplanamiento de datos.

<br>

---

<br>

### Sección 8

> [!NOTE]
>
> **Operadores combinados**
>
> > - startWith
> > - endWith
> > - concat
> > - merge
> > - combineLatest
> > - forkJoin
>
> ## métodos para combinar las emisiones de los observables o bien varios observables entre sí.

<br>

---
