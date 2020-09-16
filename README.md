# Ejemplos de Web-Workers

## [Ejemplo1](https://manufosela.github.io/webworkers-examples/example1/index.html)

En el ejemplo 1 se calcula, con varias estrategias, todos los números primos entre 2 y 10485760.

### app1

En app1a.js, app1b.js y app1c.js se calcula de manera secuencial. Una vez pulsado el boton correspondiente, se lanza el bucle que recorre de 2 a 10485760 buscando los números primos.

El 1a de manera directa.
El 1b y el 1c usando promesas.

En los 3 casos podemos comprobar que la página se bloquea, ya que al pulsar el botón 'Cambia', no produce ningún efecto hasta que termina de ejecutar el cálculo.

### app2

En app2.js se calcula usando web-workers, de manera que delegamos el calculo a otro hilo de ejecución y que devuelve el resultado al terminar.
De esta manera podemos comprobar que mientras está realizando el cálculo, la página no se bloquea y podemos pulsar el botón 'cambiar' mientras se realiza el cálculo y funciona el cambio de color.

### app3

En la app3.js se calcula usando web-workers, pero ademas trasferimos del array donde se almacena el resultado del calculo de los números primos, optimizando la performance, aunque en tiempos no se nota.
Podemos comprobar que no hay bloqueos.

### app4

En la app4.js se calcula usando web-workers, transferimos el array donde se almacena el resultado y además repartimos el cálculo en 4 web-workers.
Podemos comprobar que aparte de no haber bloqueo, se mejora el tiempo de cálculo.

## [Ejemplo2](https://manufosela.github.io/webworkers-examples/example2/index.html)

En el ejemplo 2 vamos a usar SharedBuffer y Atomics.
SharedBuffer nos permite compartir memoria entre el hilo principal y los workers, de manera que no tiene que hacer clones del array que se pasa.

### app1

En la app1.js simplemente enviamos un ArraySharedBuffer con todos los valores a 0 y en worker los cambia al cuadrado del indice del array.
Usa un setTimeout para hacerlo en diferido.
Se puede comprobar que SharedArray tiene un valor difente conforme pasa el tiempo.

### app2

En la app2.js volvemos a calcular los numeros primos comprendidos entre 2 y 10485760, pero esta vez en vez de enviar el array que se va completando con un 1 en la posición donde se encuentra un número primo, se utiliza un SharedArray, evitando el clonado.
