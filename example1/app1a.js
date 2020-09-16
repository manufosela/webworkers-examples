import { calculatePrimes } from './calculatePrimes.js';

function runTest1a() {
  document.getElementById('result').innerHTML = 'ESTE MENSAJE NO SE LLEGA A VER PORQUE EL BLOQUEO SE PRODUCE ANTES DE QUE PUEDA MOSTRARLO';
  const buffer = new ArrayBuffer(1024 * 1024 * 10); // reserves 10 MB
  const view = new Uint8Array(buffer); // view the buffer as bytes

  performance.mark('testStart'); // Crea un timestamp referenciado por testStart

  const numPrimes = calculatePrimes(view);

  performance.mark('testEnd'); // Crea un timestamp referenciado por testEnd
  performance.measure('runTest', 'testStart', 'testEnd'); // Mide la diferencia entre las marcas testStart y testEnd y lo referencia por runTest
  const performanceEntries = performance.getEntriesByName('runTest'); // Devuelve una lista de objetos PerformanceEntry que tengan en nombre de entrada runTest.
  const timeTaken = performanceEntries[0].duration; // tomamos el primer elemento de la lista (solo hay 1) y obtenemos la duración
  console.log(performanceEntries);
  document.getElementById('result').innerHTML = `Terminado. Encontrados ${numPrimes} números primos en ${timeTaken / 1000} s`;
  console.log(numPrimes, view);
}

document.querySelector('#button1a').addEventListener('click', runTest1a);