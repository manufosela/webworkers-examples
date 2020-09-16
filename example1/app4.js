/* eslint-disable no-loop-func */
function runTest4() {
  const TOTAL_NUMBERS = 1024 * 1024 * 10;
  const NUM_WORKERS = 4;
  let primesFound = 0;
  const blockLen = TOTAL_NUMBERS / NUM_WORKERS;
  const buffer = new ArrayBuffer(TOTAL_NUMBERS); // reserves 10 MB
  const view = new Uint8Array(buffer); // view the buffer as bytes

  document.getElementById('result').innerHTML = 'Test 4. Calculando números primos...';
  performance.mark('testStart');
  let offset = 0;
  for (let counterWorkers = 0; counterWorkers < NUM_WORKERS; counterWorkers++) {
    const worker = new Worker('prime-worker4.js', {type: 'module'});
    worker.onmessage = function(msg) {
      view.set(new Uint8Array(msg.data.buffer), msg.data.offset);
      primesFound += msg.data.numPrimes;

      if (msg.data.offset + msg.data.length === buffer.byteLength) {
        performance.mark('testEnd');
        performance.measure('runTest', 'testStart', 'testEnd');
        var timeTaken = performance.getEntriesByName('runTest')[0].duration;
        document.getElementById('result').innerHTML = `Terminado. Encontrados ${primesFound} números primos en ${timeTaken / 1000} s`;
        console.log(primesFound, view);
      }
    };

    worker.postMessage({
      offset: offset,
      length: blockLen
    });
    offset += blockLen;
  }
}

document.querySelector('#button4').addEventListener('click', runTest4);