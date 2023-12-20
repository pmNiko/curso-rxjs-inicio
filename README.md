# RX-JS

> [!NOTE] > **Observer Cold vs Hot**
> Cuando la data es producida por el observable en si mismo,
> es considerado un **Cold Observable**. Pero cuando la data  
> es producida fuera del observable es llamado **Hot Observable**.
>
> **Subject** _nos permite transformar un_ **Cold Observable** _en un_ **Hot Observable**.

> [!TIP]
>
> _Se debe tener cuidado con los intervalos corriendo en el background._
>
> _Esto por menor que sea genera fugas de memoria y no es el escenario esperado._
